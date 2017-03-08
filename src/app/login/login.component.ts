import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
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
      ]))
    });
  }

  onSubmit(credential) {
    if (this.authentication.login(credential) == true) {
      console.log("Sucess!");
      this.router.navigate(['./profile']);
    } else {
      this.alert.error("Error: Username or password missmatch");
    }
  }
}
