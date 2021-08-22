export interface User {
  data: {
    name: string;
    followers: string;
    following: string;
    updated_at: string;
    avatar_url: string;
    bio: string;
  };
}

export interface InitialState {
  isLoggedIn: boolean;
  client_id: string;
  redirect_url: string;
  client_secret: string;
  proxy_url: string;
  isLoading: boolean;
  errorMessage: string;
  user: User;
}

export interface actionsTyps {
  type: string;
  payload: {
    user: User;
    isLoggedIn: boolean;
    errorMessage: string;
    isLoading: boolean;
  };
}

export type Dispatch = (args: actionsTyps) => actionsTyps;
