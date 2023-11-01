import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createFosterHome } from "@/utils/test/create_foster_home";
import { createAndAuthenticateUser } from "@/utils/test/create_and_authenticate_user";

describe("Search Foster Home Controller (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to search foster home", async () => {
    await createFosterHome(app);

    const result = await request(app.server)
      .get("/foster-home")
      .query({
        query: "Foster",
      })
      .send();

    expect(result.statusCode).toEqual(202);
    expect(result.body.fosterHomes).toHaveLength(1);
    expect(result.body.fosterHomes).toEqual([
      expect.objectContaining({
        name: "Foster Home Test Name",
      }),
    ]);
  });
});
