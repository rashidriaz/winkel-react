export class AuthValidator {

  static #matchPasswords({password, confirmPassword}) {
    const error = new Error("Passwords do not match");
    return password === confirmPassword ? null : {error};
  }

  static #checkPasswordLength(password) {
    const error = new Error("Password must be at least 8 characters long");
    return password.length >= 8 ? null : {error};
  }

  static #isPasswordAlphanumeric(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const error = new Error(`Must Contain 8 Characters,
      One Uppercase, One Lowercase, One Number and one special case Character`);

    return password.match(regex) ? null : {error}
  }

  static validatePassword(password, confirmPassword) {
    let result = AuthValidator.#matchPasswords(password, confirmPassword) ||
      AuthValidator.#checkPasswordLength(password) ||
      AuthValidator.#isPasswordAlphanumeric(password);
    console.log(result);
    if (result) {
      const {error: {message}} = result;
      return message;
    }
  }

  static getErrorMessageForFirebaseAuthErrors({code}) {
    switch (code) {
      case "auth/email-already-in-use":
        return {error: "Email already in use"};
      case "auth/user-not-found":
      case "auth/wrong-password":
        return {error: "Incorrect email or password"};
      default:
        return {error: "something went wrong. Please try again later."};
    }
  }
}
