import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;

  configs = {
    isSignIn: true,
    action: 'Login',
    actionChange: 'Create account'
  };

  private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get name(): FormControl {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return <FormControl> this.authForm.get('name');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get email(): FormControl {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return <FormControl> this.authForm.get('email');
  }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    get password(): FormControl {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return <FormControl> this.authForm.get('password');
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    changeAuthAction(): void {
      this.configs.isSignIn = !this.configs.isSignIn;
      const { isSignIn } = this.configs;
      this.configs.action = isSignIn ? 'Login' : 'Sign Up';
      this.configs.actionChange = isSignIn ? 'Create account' : 'Already have an account';
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      !isSignIn ? this.authForm.addControl('name', this.nameControl) : this.authForm.removeControl('name');
    }


  // eslint-disable-next-line @typescript-eslint/member-ordering
  onSubmit(): void {
    console.log('AuthForm: ' ,this.authForm.value);
  }

}
