import { UsersRepository } from "@/repositories/users_repository";
import { hash } from "bcryptjs";
import { UserAlreadyExistsError } from "./errors/users_already_exists_error";
import { Role, Tag, User } from "@prisma/client";

interface RegisterServiceRequest {
  name: string;
  email: string;
  password: string;
  role?: Role;
  interested_tags?: Tag[];
}

interface RegisterServiceResponse {
  user: User;
}

export class RegisterService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    email,
    password,
    role,
    interested_tags,
  }: RegisterServiceRequest): Promise<RegisterServiceResponse> {
    const password_hash = await hash(password, 6);

    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
      role,
      interested_tags,
    });

    return {
      user,
    };
  }
}
