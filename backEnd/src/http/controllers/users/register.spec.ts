import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it, test } from "vitest";
import { ZodError } from "zod";

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

  it("should not be able register an user existent", async () => {
    const response = await request(app.server)
      .post("/users")
      .send({
        name: "Test Name",
        email: "test.email@example.com",
        password: "test.password",
        role: "USER",
        interested_tags: ["JOB"],
      });

    expect(response.statusCode).toBe(409);
  });

  it("should not be able register with required fields", async () => {
    const result = await request(app.server)
      .post("/users")
      .send({
        name: "Test Name",
        email: "test.email@example.com",
        password: "test.password",
        interested_tags: ["JOB"],
      });

    expect(result.statusCode).toBe(400);
  });
});
