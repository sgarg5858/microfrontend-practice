import { Component } from '@angular/core';

@Component({
  selector: 'microfrontends-demo-login-app-entry',
  template: `<div class="remote-entry">
    <h2>login-app's Remote Entry Component</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
