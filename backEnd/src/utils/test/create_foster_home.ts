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
      neighborhood: "neighborhood",
      phone_number: "81988888888",
      site: "www.site.com",
      social_network: "@social_network",
      state: "state",
      street: "street",
      house_number: "001",
    });

  const { fosterHome } = createFosterHome.body;

  return {
    fosterHome,
  };
}
