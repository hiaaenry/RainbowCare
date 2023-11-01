import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAndAuthenticateUser } from "@/utils/test/create_and_authenticate_user";

describe("Profile Controller (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to get user profile", async () => {
    const { token } = await createAndAuthenticateUser(app);

    const result = await request(app.server)
      .get("/users/me")
      .set("Authorization", `Bearer ${token}`)
      .send();

    expect(result.statusCode).toBe(201);
    expect(result.body.user).toEqual(
      expect.objectContaining({
        email: "test.email@example.com",
      })
    );
  });
});
