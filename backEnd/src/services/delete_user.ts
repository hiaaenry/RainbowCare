import { ResourceNotFoundError } from "./errors/resource_not_found_error";
import { UsersRepository } from "@/repositories/users_repository";

interface DeleteUserProfileServiceRequest {
  userId: string;
}

interface DeleteUserProfileServiceResponse {}

export class DeleteUserProfileService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
  }: DeleteUserProfileServiceRequest): Promise<DeleteUserProfileServiceResponse> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new ResourceNotFoundError();
    }

    const deleteUser = await this.usersRepository.deleteUserById(user);

    return { deleteUser };
  }
}
