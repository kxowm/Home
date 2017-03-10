import { Component,Input,animate, style, state, transition, trigger } from '@angular/core';
import {Http} from '@angular/http';
import {Content_Data} from '../model/content_data.model';
import {Menu_Data } from '../model/menu_data.model';
import { getDataService} from '../service/getData.service';






@Component({
  selector: 'mainView',
  template:`
      		<div class="col-lg-9 text-justify" (@fadeInOut.start)="fadeStart($event)"   [@fadeInOut]="state"> 
           
                    
              
                        <div>
                              <div ><grape></grape></div>
                              
                        </div>
                             

         
          </div>     
  
           `  ,
    styles:['div{border-left:solid}'
              
             
    ],

    animations: [
    trigger("fadeInOut", [
      state("open", style({opacity: 1})),
      state("closed", style({opacity: 0})),
      transition("open <=> closed", animate( "2000ms" )),
    ])
  ] ,




   
 
 
})
export class contentComponent {
 state = 'closed';
 @Input()
  mchoice:number;
 @Input()
  schoice:number;

  contsArray:Content_Data[];
  menus:Menu_Data[];

  constructor(private getDataService:getDataService){
    
       console.log("content 생성자 호출");   
            
  } 

  showContent(select){
       console.log(select.mid);
       console.log(select.sid);
        

        switch(select.mid){
          case "menu_0" :          
            this.mchoice=0;       
            break;


          case "menu_1" :
            this.mchoice=1;
            break;
          case "menu_2" :
            this.mchoice=2;

          default:
            break;

        }

         switch(select.sid){
          case "sub_0" :
            this.schoice=0;          
            break;

          case "sub_1" :
            this.schoice=1;        
            break;
          case "sub_2" :
            this.schoice=2;
          case "sub_3" :
            this.schoice=3;
          case "sub_4" :
            this.schoice=4;
          

          default:

            break;
        }     

  }

  fade(i:number){
    console.log("fade 호출"); 
    this.state = this.state === 'open' ? 'closed' : 'open';
    console.log("선택:"+i);
    this.schoice=i;

  }  

  fadeStart(event){
      console.log("fadeStart : state Open")
      this.state = "open";
  }

  ngDoCheck(){
      //  console.log("contents dOcheck!!!!!!!!!!");
         this.menus = this.getDataService.getMenu();
         this.contsArray = this.getDataService.getContent();
  } 
}