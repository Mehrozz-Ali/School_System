"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { examSchema, ExamSchema } from "@/lib/formValidationSchemas";
import { createExam, updateExam } from "@/lib/actions";
import { Dispatch, SetStateAction, startTransition, useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";




const ExamForm = ({ type, data, setOpen, relatedData }: { type: "create" | "update"; data?: any, setOpen: Dispatch<SetStateAction<boolean>>, relatedData?: any }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ExamSchema>({
        resolver: zodResolver(examSchema),
    });


    // Afte react 19 it will be USEACTIONSTATE
    const [state, formAction] = useActionState(type === "create" ? createExam : updateExam, { success: false, error: false })


    const onSubmit = handleSubmit(data => {
        console.log(data);
        startTransition(() => {
            formAction(data);
        });
    })

    const router = useRouter();
    useEffect(() => {
        if (state.success) {
            toast(`Exam has been ${type === "create" ? "created" : "updated"}! `)
            setOpen(false);
            router.refresh();
        }
    }, [state])


    const { lessons } = relatedData;


    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">{type === "create" ? "Create a new Exam" : "Update the exam"}</h1>

            <div className="flex flex-wrap justify-between gap-4">
                <InputField label="Exam Title" name="title" defaultValue={data?.title} register={register} error={errors?.title} />
                <InputField label="Start Date" name="startTime" type="datetime-local" defaultValue={data?.startTime} register={register} error={errors?.startTime} />
                <InputField label="End Date" name="endTime" type="datetime-local" defaultValue={data?.endTime} register={register} error={errors?.endTime} />


                {data && (
                    <InputField label="Id" name="id" defaultValue={data?.id} register={register} error={errors?.id} hidden />
                )}

                <div className="flex flex-col gap-2 w-full md:w-1/4 ">
                    <label htmlFor="" className="text-xs text-gray-500">Lessons</label>
                    <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full" {...register("lessonId")} defaultValue={data?.lessonId}>

                        {lessons.map((lesson: { id: number, name: string}) => (
                            <option value={lesson.id} key={lesson.id}>{lesson.name}</option>
                        ))}
                        <option value="female">Female</option>
                    </select>
                    {errors.lessonId?.message && <p className="text-red-400">{errors.lessonId.message.toString()}</p>}
                </div>

            </div>

            {state.error && <span className="text-red-500">Something went wrong!</span>}

            <button className="bg-blue-400 text-white p-2 rounded-md">{type === "create" ? "Create" : "Update"}</button>

        </form>
    )
}

export default ExamForm;