import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it, test } from "vitest";
import { createAndAuthenticateUser } from "@/utils/test/create_and_authenticate_user";

describe("Create Foster Home Controller (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to create foster home", async () => {
    const { token } = await createAndAuthenticateUser(app);

    const response = await request(app.server)
      .post("/foster-home")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Test Foster Home",
        tags: ["JOB"],
        description: "description",
      });

    expect(response.statusCode).toBe(201);

    expect(response.statusCode).toBe(201);
  });
});
