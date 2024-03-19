import { fetcher } from '../../src/utils'
import { prisma } from '../../src/data/prisma.server'

async function BankSeeder() {
    try {
        
        console.log(`Start bank seeding...`)
        const bankData = await fetcher("https://raw.githubusercontent.com/riod94/list-bank/main/bank.json")
        let counter = 0;
        for (const bank of bankData) {
            await prisma.banks.upsert({
                where: {
                    code: bank.code
                },
                create: {
                    code: bank.code,
                    name: bank.name,
                    contact: bank.contact,
                    link: bank.link,
                    category: bank.category,
                    created_at: new Date()
                },
                update: {
                    name: bank.name,
                    contact: bank.contact,
                    link: bank.link,
                    category: bank.category
                }
            })
            counter += 1
        }
        console.log(`Finish bank seeding...`)
        return counter
    } catch (e) {
        console.error(e)
        return e
    }
}

export default BankSeeder