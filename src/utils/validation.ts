export const validation = {
  isValidEmail: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  isStrongPassword: (pass: string) => pass.length >= 8,
};
