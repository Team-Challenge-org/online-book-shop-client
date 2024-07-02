export function getPasswordStrength(password: string) {
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const passwordLength = password?.length;

  let strength = 0;

  if (hasLowercase) strength++;
  if (hasUppercase) strength++;
  if (hasNumber) strength++;
  if (hasSpecialChar) strength++;

  if (passwordLength > 7) strength++;
  if (passwordLength > 12) strength++;

  switch (strength) {
    case 0:
    case 1:
      return "weak";
    case 2:
    case 3:
      return "medium";
    default:
      return "strong";
  }
}
