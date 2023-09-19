import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component1',
  template: `
    <div class="container">
    <h3>This is first component</h3>
    </div>
  `,
  styles: [`
    .container {
      border: 2px solid;
      padding: 10px 20px;
      width: 200px;
    }
  `]
})
export class FirstComponent1Component {

}
