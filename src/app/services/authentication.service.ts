import { Router } from '@angular/router';

export class AuthenticationService {
  users = {};

  login(credential) {
    console.log(credential);
    if (this.users[credential.email] != null && this.users[credential.email] == credential.password) {
      console.log('Login successful!');
      return true;
    } else {
      return false;
    }
  }

  register(credential) {
    this.users[credential.email] = credential.password;
    console.log("Register success!");
  }
}
