import { makeGetUserProfileService } from "@/services/factories/make_get_user_profile_service";
import { FastifyReply, FastifyRequest } from "fastify";

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  const getUserProfile = makeGetUserProfileService();

  const { user } = await getUserProfile.execute({
    userId: request.user.sub,
  });

  return reply.status(201).send({
    user: {
      ...user,
      password_hash: undefined,
    },
  });
}
