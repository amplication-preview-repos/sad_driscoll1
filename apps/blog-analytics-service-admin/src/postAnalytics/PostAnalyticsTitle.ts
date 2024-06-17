import { PostAnalytics as TPostAnalytics } from "../api/postAnalytics/PostAnalytics";

export const POSTANALYTICS_TITLE_FIELD = "id";

export const PostAnalyticsTitle = (record: TPostAnalytics): string => {
  return record.id?.toString() || String(record.id);
};
