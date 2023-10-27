import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { prisma } from "@/lib/prisma";
import { createAndAuthenticateUser } from "@/utils/test/create_and_authenticate_user";

describe("Send Notification Controller (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able send notification", async () => {
    const { token } = await createAndAuthenticateUser(app);

    const user = await prisma.user.findFirstOrThrow();

    const result = await request(app.server)
      .post("/send-notification")
      .set("Authorization", `Bearer ${token}`)
      .send({
        recipientEmail: user.email,
        title: "Test Email",
        content: "Test Email Content",
      });

    expect(result.statusCode).toBe(201);
  });
});
