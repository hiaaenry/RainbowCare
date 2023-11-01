import request from "supertest";
import { FastifyInstance } from "fastify";
import { createAndAuthenticateUser } from "./create_and_authenticate_user";

export async function createFosterHome(app: FastifyInstance) {
  const { token } = await createAndAuthenticateUser(app);

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
