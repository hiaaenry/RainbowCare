import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it, test } from "vitest";

describe("Register Controller (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to register", async () => {
    const response = await request(app.server)
      .post("/users")
      .send({
        name: "Test Name",
        email: "test.email@example.com",
        password: "test.password",
        role: "USER",
        interested_tags: ["JOB"],
      });

    expect(response.statusCode).toBe(201);
  });
});
