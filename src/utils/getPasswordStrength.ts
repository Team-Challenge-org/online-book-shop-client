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

  // Password is considered "strong" if it meets all criteria
  if (passwordLength >= 8 && passwordLength <= 30) {
    // Strong password
    if (strength >= 4) {
      return "strong";
    }

    // Good password (if it contains 2 of 4 character categories)
    if (strength === 2 || strength === 3) {
      return "medium";
    }

    // Weak password (if it contains only 1 character category or meets specific weak criteria)
    if (
      strength === 1 ||
      (strength === 2 && !hasUppercase && !hasNumber && !hasSpecialChar)
    ) {
      return "weak";
    }
  }

  // By default, if the password length does not meet requirements
  return "weak";
}
