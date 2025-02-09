import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInput, MatLabel } from '@angular/material/input';

@Component({
  selector: '',
  template: `
    <mat-card appearance="outlined">
      <mat-card-content>
        <form id="login-form" (submit)="onSubmit($event)">
          <mat-form-field>
            <mat-label>Username:</mat-label>
            <input matInput type="text" name="username" />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Password:</mat-label>
            <input matInput type="password" name="password" />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Confirm password:</mat-label>
            <input matInput type="password" name="passwordConfirm" />
          </mat-form-field>
          <button mat-flat-button type="submit">Create account</button>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
  ],
  styleUrl: './index.scss',
})
export class SignupPage {
  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    console.log(data.get('username'));
    console.log(data.get('password'));
  };
}