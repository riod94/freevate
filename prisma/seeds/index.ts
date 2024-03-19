import BankSeeder from "./bank";

// Run Bank Seeder
BankSeeder()
    .then((res) => {
        console.log(res, "Bank seeding finished. ")
    }).catch((error) => {
        console.error(error)
    })