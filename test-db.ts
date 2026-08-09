import { PrismaClient } from './src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.$queryRaw`SELECT 1 as result`;
    console.log('Connection successful:', result);
}

main()
    .catch((e) => {
        console.error('Connection failed:', e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });