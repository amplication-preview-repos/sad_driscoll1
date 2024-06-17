/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PostAnalytics } from "./PostAnalytics";
import { PostAnalyticsCountArgs } from "./PostAnalyticsCountArgs";
import { PostAnalyticsFindManyArgs } from "./PostAnalyticsFindManyArgs";
import { PostAnalyticsFindUniqueArgs } from "./PostAnalyticsFindUniqueArgs";
import { DeletePostAnalyticsArgs } from "./DeletePostAnalyticsArgs";
import { PostAnalyticsService } from "../postAnalytics.service";
@graphql.Resolver(() => PostAnalytics)
export class PostAnalyticsResolverBase {
  constructor(protected readonly service: PostAnalyticsService) {}

  async _postAnalyticsItemsMeta(
    @graphql.Args() args: PostAnalyticsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PostAnalytics])
  async postAnalyticsItems(
    @graphql.Args() args: PostAnalyticsFindManyArgs
  ): Promise<PostAnalytics[]> {
    return this.service.postAnalyticsItems(args);
  }

  @graphql.Query(() => PostAnalytics, { nullable: true })
  async postAnalytics(
    @graphql.Args() args: PostAnalyticsFindUniqueArgs
  ): Promise<PostAnalytics | null> {
    const result = await this.service.postAnalytics(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PostAnalytics)
  async deletePostAnalytics(
    @graphql.Args() args: DeletePostAnalyticsArgs
  ): Promise<PostAnalytics | null> {
    try {
      return await this.service.deletePostAnalytics(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
