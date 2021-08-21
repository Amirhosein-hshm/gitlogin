export interface InitialState {
  isLoggedIn: boolean;
  client_id: string | undefined;
  redirect_url: string | undefined;
  client_secret: string | undefined;
  proxy_url: string | undefined;
  isLoading: boolean;
  errorMessage: string;
  user: string | Object | null;
}

export interface actionsTyps {
  type: string;
  payload: {
    user: Object;
    isLoggedIn: boolean;
    errorMessage: string;
    isLoading: boolean;
  };
}

export type Dispatch = (args: actionsTyps) => actionsTyps;
