import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: '',
  template: `
  <section id="layout-root">
    <main><router-outlet layout-outlet></router-outlet></main>
  </section>
  `,
  styleUrl: './index.scss',
  imports: [RouterOutlet],
})
export class NonAuthenticatedLayout {}