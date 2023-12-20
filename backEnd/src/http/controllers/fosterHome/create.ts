import { UserAlreadyExistsError } from "@/services/errors/users_already_exists_error";
import { makeCreateFosterHomeService } from "@/services/factories/make_create_foster_home";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import * as nodemailer from "nodemailer";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  await request.jwtVerify();

  const createFosterFomeBodySchema = z.object({
    name: z.string(),
    tags: z.enum(["JOB", "BOOTCAMP"]).array(),
    description: z.string(),
    phone_number: z.string(),
    street: z.string(),
    neighborhood: z.string(),
    house_number: z.string(),
    state: z.string(),
    site: z.string(),
    social_network: z.string(),
  });

  const {
    name,
    tags,
    description,
    neighborhood,
    phone_number,
    site,
    social_network,
    state,
    street,
    house_number,
  } = createFosterFomeBodySchema.parse(request.body);

  try {
    const createFosterHomeService = makeCreateFosterHomeService();

    await createFosterHomeService.execute({
      name,
      tags,
      description,
      neighborhood,
      phone_number,
      site,
      social_network,
      state,
      street,
      house_number,
    });
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({
        message: error.message,
      });
    }
    throw error;
  }

  return reply.status(201).send();
}
