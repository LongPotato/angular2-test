export class AuthenticationService {
  login(credential) {
    console.log(credential);
    if (credential.email == 'test_user@email.com' && credential.password == "123456") {
      console.log('Login successful!');
    }
  }
}
