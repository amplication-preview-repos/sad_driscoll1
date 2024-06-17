import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReaderServiceBase } from "./base/reader.service.base";

@Injectable()
export class ReaderService extends ReaderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
