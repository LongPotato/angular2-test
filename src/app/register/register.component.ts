import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent {
  form;

  constructor(
    private router: Router,
    private alert: AlertService,
    private authentication: AuthenticationService) {}

  ngOnInit() {
    let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

    this.form = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(emailRegex)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  onSubmit(credential) {
    if (credential.password == credential.confirmPassword) {
      this.authentication.register(credential);
      this.router.navigate(['/profile']);
    } else {
      this.alert.error("Password missmatch.");
    }
  }
}
