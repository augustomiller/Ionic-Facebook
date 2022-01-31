import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.creatForm();
  }

  private creatForm(): void{
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get email(): FormControl {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return <FormControl>this.authForm.get('email');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get password(): FormControl {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return <FormControl>this.authForm.get('password');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  onSubmit(): void {
    console.log('AuthForm: ', this.authForm.value);
  }
}
