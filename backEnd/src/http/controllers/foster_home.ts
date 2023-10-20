import { UserAlreadyExistsError } from "@/services/errors/users_already_exists_error";
import { makeCreateFosterHomeService } from "@/services/factories/make_create_foster_home";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  await request.jwtVerify();

  console.log(request.user.sub);

  const createFosterFomeBodySchema = z.object({
    name: z.string(),
  });

  const { name } = createFosterFomeBodySchema.parse(request.body);

  try {
    const createFosterHomeService = makeCreateFosterHomeService();

    await createFosterHomeService.execute({
      name,
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
