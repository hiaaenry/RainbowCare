import request from "supertest";
import { FastifyInstance } from "fastify";

export async function createAndAuthenticateUser(app: FastifyInstance) {
  const user = await request(app.server).post("/users").send({
    name: "Test Name",
    email: "test.email@example.com",
    password: "test.password",
    role: "USER",
  });

  const authResponse = await request(app.server).post("/sessions").send({
    email: "test.email@example.com",
    password: "test.password",
  });

  const { token } = authResponse.body;

  return {
    token,
  };
}
