import { FosterHome, Tag } from "@prisma/client";
import { FosterHomeRepository } from "@/repositories/foster_home_repository";
import { UsersRepository } from "@/repositories/users_repository";
import * as nodemailer from "nodemailer";

interface CreateFosterHomeServiceRequest {
  name: string;
  tags: Tag[];
  recipient_email?: string[];
  description: string;
  neighborhood: string;
  phone_number: string;
  site: string;
  social_network: string;
  state: string;
  street: string;
  house_number: string;
}

interface CreateFosterHomeServiceResponse {
  fosterHome: FosterHome;
}

export class CreateFosterHomeService {
  constructor(
    private usersRepository: UsersRepository,
    private fosterHomeRepository: FosterHomeRepository
  ) {}

  async execute({
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
  }: CreateFosterHomeServiceRequest): Promise<CreateFosterHomeServiceResponse> {
    const user = await this.usersRepository.catchEmailfindByTag(tags);

    const email: string[] = [];
    if (user) {
      email.push(user);
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "f19ea46a5068e6",
        pass: "be63ee04dc7535",
      },
    });

    transport.sendMail({
      from: "8d567914ae-a56ed9@inbox.mailtrap.io",
      to: email,
      subject: "",
      text: description,
    });

    const fosterHome = await this.fosterHomeRepository.create({
      name,
      tags,
      recipient_email: email,
      description,
      neighborhood,
      phone_number,
      site,
      social_network,
      state,
      street,
      house_number,
    });

    return {
      fosterHome,
    };
  }
}
