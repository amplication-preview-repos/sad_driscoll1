import { Reader as TReader } from "../api/reader/Reader";

export const READER_TITLE_FIELD = "id";

export const ReaderTitle = (record: TReader): string => {
  return record.id?.toString() || String(record.id);
};
