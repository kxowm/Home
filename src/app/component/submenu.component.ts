import { Component,Output,EventEmitter } from '@angular/core';
import {Menu_Data } from '../model/menu_data.model';
import {Http} from '@angular/http';
import {getDataService} from '../service/getData.service'



@Component({
  selector: 'subMenu',
  template:`
            <div class="btn-group" dropdown *ngFor="let s of menus let j=index">
              <button id="single-button" type="button" class="btn btn-primary" dropdownToggle>
                {{s.menuTitle}} <span class="caret"></span>
              </button>
              <ul dropdownMenu role="menu" aria-labelledby="single-button">
                <li  role="menuitem">
                    <a class="dropdown-item" *ngFor="let smenu of s.submenu let i=index" (click)="contentChange($event,j,i)" href="#">
                      {{smenu}}
                    </a>
                </li>
              </ul>
            </div>
           `,

  styles: ['li>a{color:#33877C}','button:hover{background-color:#33877C}',
             'button{margin:10px;}'
           ] 
    
 
})
export class subMenuComponent {
 

    menus : Menu_Data[];  

    @Output() change:EventEmitter<any> = new EventEmitter<any>();  
  
    
    constructor(private getDataService:getDataService){

           console.log("submenu 생성자 호출");

           this.menus = this.getDataService.getMenu();
            
    } 

    contentChange(event,j,i){
   
  
    console.log(i+j);
  
    
      this.change.emit({j,i});    

    }

    ngDoCheck(){
          if(this.menus == null)
             console.log("submenu docheck!!");
           this.menus = this.getDataService.getMenu();

    }

    
   
}