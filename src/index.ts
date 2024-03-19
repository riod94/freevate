import { Elysia } from "elysia";
import { prisma } from "./data/prisma.server";

const api = new Elysia({ prefix: "/api" })
  .get("/", () => "Welcome to Freevate API made with Elysia")
  .get("/banks", async () => {
    const banks = await prisma.banks.findMany();
    return Response.json({ 'data': banks });
  })
  .get("/banks/:code", async ({ params }) => {
    const bank = await prisma.banks.findUnique({ where: { code: params.code } });
    return Response.json(bank);
  })

const app = new Elysia()
  .get("/", () => "Hello Welcome to Freevate made with Elysia")
  .use(api)
  .onError(({ code }) => {
    if (code === 'NOT_FOUND') return 'Route not found :('
  })
  .listen(3030);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
