import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAndAuthenticateUser } from "@/utils/test/create_and_authenticate_user";
import { createFosterHome } from "@/utils/test/create_foster_home";
import { prisma } from "@/lib/prisma";

describe("Edit Home Foster Controller (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to edit foster home", async () => {
    const { token } = await createAndAuthenticateUser(app);

    await createFosterHome(app);

    const catchFosterHome = await prisma.fosterHome.findFirstOrThrow();

    const result = await request(app.server)
      .put("/foster-home")
      .set("Authorization", `Bearer ${token}`)
      .send({
        fosterHomeId: catchFosterHome.id,
        name: "Edit",
      });

    expect(result.statusCode).toBe(204);
  });
});
