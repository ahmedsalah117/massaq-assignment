export * from "./modals";
export type APISingleResourceResponse<T> = {
  data: T;
};

export type APIActionResponse<T> =
  | {
      data: T;
    }
  | {
      error: {
        status: number;
        message: string;
      };
    };

export type CommentType = {
  id: string | number;
  user: { fullName: string };
  body: string;
};