import { ReaderWhereInput } from "./ReaderWhereInput";
import { ReaderOrderByInput } from "./ReaderOrderByInput";

export type ReaderFindManyArgs = {
  where?: ReaderWhereInput;
  orderBy?: Array<ReaderOrderByInput>;
  skip?: number;
  take?: number;
};
