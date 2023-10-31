import request from "supertest";
import { FastifyInstance } from "fastify";

export async function createFosterHome(app: FastifyInstance) {
  await request(app.server).post("/users").send({
    name: "Test Name",
    email: "test.email@example.com",
    password: "test.password",
    role: "ADMIN",
  });

  const authResponse = await request(app.server).post("/sessions").send({
    email: "test.email@example.com",
    password: "test.password",
  });

  const { token } = authResponse.body;

  const createFosterHome = await request(app.server)
    .post("/foster-home")
    .set("Authorization", `Bearer ${token}`)
    .send({
      name: "Foster Home Test Name",
      tags: ["JOB"],
      description: "description",
    });

  const { fosterHome } = createFosterHome.body;

  return {
    fosterHome,
  };
}
