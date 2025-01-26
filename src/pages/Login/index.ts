import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInput, MatLabel } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: '[layout-outlet]',
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
          <div id="login-button-container">
            <button mat-flat-button type="submit">Enter</button>
            <button mat-flat-button>Forgot my password</button>
          </div>
          <button mat-flat-button routerLink="/signup">Create an account</button>
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
    RouterLink,
  ],
  styleUrl: './index.scss',
})
export class LoginPage {
  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    console.log(data.get('username'));
    console.log(data.get('password'));
  };
}