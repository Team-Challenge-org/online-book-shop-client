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
    if (strength === 3 || strength === 3) {
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

// export function getPasswordStrength(password: string) {
//   const hasLowercase = /[a-z]/.test(password);
//   const hasUppercase = /[A-Z]/.test(password);
//   const hasNumber = /[0-9]/.test(password);
//   const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
//   const passwordLength = password?.length;

//   let strength = 0;

//   if (hasLowercase) strength++;
//   if (hasUppercase) strength++;
//   if (hasNumber) strength++;
//   if (hasSpecialChar) strength++;

//   if (passwordLength >= 8 && passwordLength <= 30) {
//     // Слабый пароль: содержит только одну категорию символов
//     if (strength === 1) {
//       return "weak";
//     }

//     // Слабый пароль: содержит только буквы и одну дополнительную категорию (верхний регистр, число или спецсимвол)
//     if (strength === 3 && hasLowercase && !hasUppercase && !hasNumber && !hasSpecialChar) {
//       return "weak";
//     }

//     // Средний пароль: содержит две любые категории символов
//     if (strength === 3) {
//       return "medium";
//     }

//     // Надежный пароль: содержит три или более категорий символов
//     if (strength >= 3) {
//       return "strong";
//     }
//   }

//   // По умолчанию: пароль не соответствует требованиям по длине или очень слабый
//   return "weak";
// }

