export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken?: string;
  user: AuthUser;
}

export interface RegisterResponse {
  accessToken: string;
  refreshToken?: string;
  user: AuthUser;
}

export interface MessageResponse {
  message: string;
}
