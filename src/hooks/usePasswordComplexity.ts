import type { TRegisterField } from "types/auth";

import { useState } from "react";
import { errorMessage } from "constants/auth";
import { getPasswordStrength } from "utils/getPasswordStrength";

export function usePasswordComplexity(
  passwordValue: string,
  field: TRegisterField
) {
  const [passwordHidden, setPasswordHidden] = useState(true);

  const passwordComplexity: string = getPasswordStrength(passwordValue);
  const isPasswordField = passwordValue && field.valueName === "password";

  let passwordComplexityMessage;

  if (passwordComplexity === "weak")
    passwordComplexityMessage = errorMessage.PASSWORD.STRENGTH.WEAK;
  if (passwordComplexity === "medium")
    passwordComplexityMessage = errorMessage.PASSWORD.STRENGTH.MEDIUM;
  if (passwordComplexity === "strong")
    passwordComplexityMessage = errorMessage.PASSWORD.STRENGTH.STRONG;

  return {
    passwordHidden,
    isPasswordField,
    setPasswordHidden,
    passwordComplexity,
    passwordComplexityMessage,
  };
}
