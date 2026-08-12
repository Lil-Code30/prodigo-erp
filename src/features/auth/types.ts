export interface Authority {
  authority: string;
}

export interface AuthResponse {
  userId: number;
  tenantSlug: string | null;
  accessToken: string;
  authorities: Authority[];
}

export interface SelectedModule {
  moduleId: number;
  moduleName: string;
  moduleKey: string;
}

export interface MessageResponse {
  message: string;
}
