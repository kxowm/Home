import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HttpModule} from '@angular/http'

import { contentComponent } from './component/content.component';
import { mainmenuComponent } from './component/mainmenu.component';
import { gridlayoutComponent } from './component/gridlayout.component';
import { subComponent } from './component/sub.component';
import {GrapeComponent} from './component/grape.component'
import {getDataService} from './service/getData.service'





@NgModule({
  imports: [BrowserModule,HttpModule,],
  declarations: [AppComponent,contentComponent,gridlayoutComponent,mainmenuComponent,subComponent,GrapeComponent],
  bootstrap: [AppComponent],
   providers: [getDataService]

 
})
export class AppModule {
  
}

/*
Copyright 2016 thoughtram GmbH. All Rights Reserved.
Use of this source code is governed by an TTML-style license that
can be found in the license.txt file at http://thoughtram.io/license.txt
*/