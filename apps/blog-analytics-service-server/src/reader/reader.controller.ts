import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReaderService } from "./reader.service";
import { ReaderControllerBase } from "./base/reader.controller.base";

@swagger.ApiTags("readers")
@common.Controller("readers")
export class ReaderController extends ReaderControllerBase {
  constructor(protected readonly service: ReaderService) {
    super(service);
  }
}
