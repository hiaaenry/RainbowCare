import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

interface RegisterServiceRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterService {
  constructor(private usersRepository: any) {}

  async execute({ name, email, password }: RegisterServiceRequest) {
    const password_hash = await hash(password, 6);

    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      throw new Error("Email already exists!");
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    });
  }
}
