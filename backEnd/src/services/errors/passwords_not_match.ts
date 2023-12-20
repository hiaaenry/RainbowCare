export class PasswordsNotMatch extends Error {
  constructor() {
    super("Passwords do not match.");
  }
}
