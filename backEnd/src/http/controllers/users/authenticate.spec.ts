import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it, test } from "vitest";

describe("Authenticate Controller (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to authenticate", async () => {
    await request(app.server)
      .post("/users")
      .send({
        name: "Test Name",
        email: "test.email@example.com",
        password: "test.password",
        role: "USER",
        interested_tags: ["JOB"],
      });

    const response = await request(app.server).post("/sessions").send({
      email: "test.email@example.com",
      password: "test.password",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      token: expect.any(String),
    });
  });
});
