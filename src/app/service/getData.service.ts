import { Component,Injectable} from '@angular/core';
import {Menu_Data } from '../model/menu_data.model';
import {Content_Data} from '../model/content_data.model';
import {Http} from '@angular/http';



@Injectable()
export class getDataService {
    menus : Menu_Data[] ;
    conts : Content_Data[];
    
    constructor(private _http:Http){
        console.log("getDataService 생성자 호출");
        console.log("json 불러오기 시작");
      _http.get('./app/json/menu_data.json').subscribe(result=>{
                     this.menus = result.json();
                     console.log(" menu json 불러오기 성공");
      },
      err=>{console.log("실패")});
       _http.get('./app/json/content_data.json').subscribe(result=>{
                     this.conts = result.json();
                     console.log(" content json 불러오기 성공");
      },
      err=>{console.log("실패")});
            
    } 

    getMenu(){
        //console.log("메뉴 데이터 가져오기");
        return this.menus;  
                    
    }   

    getContent(){
        //console.log("컨텐츠 데이터 가져오기");
        return this.conts;  

    }    
}