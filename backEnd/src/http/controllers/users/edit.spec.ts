import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAndAuthenticateUser } from "@/utils/test/create_and_authenticate_user";
import { prisma } from "@/lib/prisma";
import { ResourceNotFoundError } from "@/services/errors/resource_not_found_error";

describe("Edit Profile Controller (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to edit user profile", async () => {
    const { token } = await createAndAuthenticateUser(app);

    const user = await prisma.user.findFirstOrThrow();

    const result = await request(app.server)
      .put(`/users/edit/${user.id}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Edit",
        email: "edit.email@example.com",
      });

    expect(result.statusCode).toBe(204);
  });

  it("should not be able to edit profile with incorrect token", async () => {
    const user = await prisma.user.findFirstOrThrow();

    const nonExistentToken = "non-existent.token";

    const result = await request(app.server)
      .put(`/users/edit/${user.id}`)
      .set("Authorization", `Bearer ${nonExistentToken}`)
      .send({
        name: "Edit",
        email: "edit.email@example.com",
      });

    expect(result.statusCode).toBe(401);
  });

  it("should not be able to edit profile with incorrect user id", async () => {
    const { token } = await createAndAuthenticateUser(app);

    const nonExistentUserId = "6fca5003-d420-4df5-bcee-7a1fa35e2458";

    const result = await request(app.server)
      .put(`/users/edit/${nonExistentUserId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Edit",
        email: "edit.email@example.com",
      });

    console.log(result);

    expect(result.statusCode).toBe(404);
  });
});
