import { Component } from '@angular/core';

@Component({
  selector: 'microfrontends-demo-posts-and-users-entry',
  template: `<div class="remote-entry">
    <h2>posts-and-users's Remote Entry Component</h2>
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
