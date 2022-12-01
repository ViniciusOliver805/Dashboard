import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Card1Component } from './card1/card1.component';
import { BarchartComponent } from './barchart/barchart.component';
import { linechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';
import {MatCardModule} from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Card1Component,
    BarchartComponent,
    linechartComponent,
    PiechartComponent,
    Card2Component,
    Card3Component,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    NgChartsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
