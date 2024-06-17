import * as graphql from "@nestjs/graphql";
import { ReaderResolverBase } from "./base/reader.resolver.base";
import { Reader } from "./base/Reader";
import { ReaderService } from "./reader.service";

@graphql.Resolver(() => Reader)
export class ReaderResolver extends ReaderResolverBase {
  constructor(protected readonly service: ReaderService) {
    super(service);
  }
}
