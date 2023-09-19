import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding2',
  templateUrl: './data-binding2.component.html',
  styleUrls: ['./data-binding2.component.scss']
})
export class DataBinding2Component {

  interpolationData:number = 23;
  
  property:string = 'green';
  
  twoWay:string = 'green';  

  eventBindingFunction() {
    this.interpolationData = 50;
  }

}
