import { Component,ViewChild } from '@angular/core';
import { contentComponent} from './component/content.component';
import {Menu_Data} from './model/menu_data.model';



@Component({
  selector: 'my-app',
  template: `
             <nav class="navbar navbar-inverse">
                  <mainMenu (change)="myDetect($event)"></mainMenu>   
             </nav>  
             <grid>
                 <sub></sub>
                 <mainView></mainView>             
             </grid>  

          
            
            `,
  styles:['nav{padding-left:20px;}']
  

})
export class AppComponent {
     
   sendMchoice:number; 
   sendSchoice:number;

 @ViewChild(contentComponent) maincontent:contentComponent;    


  myDetect(data){

    this.sendMchoice = data.j;
    this.sendSchoice = data.i;
     
     // data == $event?
      this.maincontent.showContent(data); 

  }
  constructor(){    
  }
    
}
