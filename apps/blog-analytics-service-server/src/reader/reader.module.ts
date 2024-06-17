import { Module } from "@nestjs/common";
import { ReaderModuleBase } from "./base/reader.module.base";
import { ReaderService } from "./reader.service";
import { ReaderController } from "./reader.controller";
import { ReaderResolver } from "./reader.resolver";

@Module({
  imports: [ReaderModuleBase],
  controllers: [ReaderController],
  providers: [ReaderService, ReaderResolver],
  exports: [ReaderService],
})
export class ReaderModule {}
