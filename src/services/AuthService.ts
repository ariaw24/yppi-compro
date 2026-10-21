export interface AuthResult {
  success: boolean;
  message?: string;
  user?: {
    id: string;
    name: string;
    role: 'admin' | 'student';
  };
}

export class AuthService {
  private static instance: AuthService;

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public loginAdmin(username: string, pass: string): AuthResult {
    if (username === 'admin' && pass === 'admin123') {
      return {
        success: true,
        user: { id: 'admin-01', name: 'Petugas Administrator', role: 'admin' },
      };
    }
    return {
      success: false,
      message: 'Kredensial tidak sesuai. Gunakan admin / admin123 untuk demo.',
    };
  }

  public loginStudent(username: string, pass: string): AuthResult {
    if (!username.trim() || !pass.trim()) {
      return {
        success: false,
        message: 'Mohon lengkapi username / no pendaftaran dan kata sandi.',
      };
    }
    return {
      success: true,
      user: { id: username, name: 'Ahmad Fauzi', role: 'student' },
    };
  }
}

export const authService = AuthService.getInstance();
