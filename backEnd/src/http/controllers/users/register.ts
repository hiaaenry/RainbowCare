import { PasswordsNotMatch } from "@/services/errors/passwords_not_match";
import { UserAlreadyExistsError } from "@/services/errors/users_already_exists_error";
import { makeRegisterService } from "@/services/factories/make_register_service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
    role: z.enum(["USER", "ADMIN"]),
    interested_tags: z
      .enum([
        "JOB",
        "BOOTCAMP",
        "HEALTH",
        "HOME",
        "LEISURE",
        "EDUCATION",
        "NEWS",
        "ENTERTAINMENT",
        "BIOGRAPHY",
        "EVENTS",
        "LIFESTYLE",
        "PSYCHOLOGY",
      ])
      .array(),
  });

  const {
    name,
    last_name,
    email,
    password,
    confirm_password,
    role,
    interested_tags,
  } = registerBodySchema.parse(request.body);

  try {
    const registerService = makeRegisterService();

    await registerService.execute({
      name,
      last_name,
      email,
      password,
      confirm_password,
      role,
      interested_tags,
    });
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({
        message: error.message,
      });
    } else if (error instanceof PasswordsNotMatch) {
      return reply.status(400).send({
        message: error.message,
      });
    }
    throw error;
  }

  return reply.status(201).send();
}
