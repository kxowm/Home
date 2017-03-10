import { Component,Output,EventEmitter } from '@angular/core';
import {Menu_Data } from '../model/menu_data.model';
import {Http} from '@angular/http';
import {getDataService} from '../service/getData.service'



@Component({
  selector: 'sub',
  template:`
           
            <div class="col-lg-3 text-center left">
             
            <ul>
                <li *ngFor="let one of menus let i=index" >
                      <ng-container *ngIf="true">                    
                        <strong *ngFor="let eachmenu of one.submenu let sindex=index" (click)="fade(sindex)">{{eachmenu}} </strong> 
                      </ng-container>                     
                </li>
            </ul> 
            
	        </div>
           `,

  styles: ['li{margin:20px;}','button:hover{background-color:#33877C}',
             'button{margin:10px;}','div{border-right:solid}'
           ] 
    
 
})
export class subComponent {
 

    menus : Menu_Data[];  

    @Output() change:EventEmitter<any> = new EventEmitter<any>();  
  
    
    constructor(private getDataService:getDataService){

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









