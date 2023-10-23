import { UsersRepository } from "@/repositories/users_repository";
import { User } from "@prisma/client";
import { ResourceNotFoundError } from "./errors/resource_not_found_error";

interface EditProfileServiceRequest {
  userId: string;
  name: string;
  email: string;
}

interface EditProfileServiceResponse {
  user: User;
}

export class EditProfileService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
    name,
    email,
  }: EditProfileServiceRequest): Promise<EditProfileServiceResponse> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new ResourceNotFoundError();
    }

    user.name = name;
    user.email = email;

    await this.usersRepository.save(user);

    return {
      user,
    };
  }
}
