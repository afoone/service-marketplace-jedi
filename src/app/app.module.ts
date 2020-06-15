import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ServicesListComponent } from './components/services-list/services-list.component';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ContextMenuModule} from 'primeng/contextmenu';
import {TabMenuModule} from 'primeng/tabmenu';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {GalleriaModule} from 'primeng/galleria';
import {ListboxModule} from 'primeng/listbox';
import { NgbdCarouselPauseComponent } from './components/ngbd-carousel-pause/ngbd-carousel-pause.component';
import {CarouselModule} from 'primeng/carousel';
import {DropdownModule} from 'primeng/dropdown';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    ServicesListComponent,
    SuppliersListComponent,
    SearchComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponentComponent,
    NgbdCarouselPauseComponent,
    LoginComponent,
    RegisterComponent
   
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CardModule,
    ButtonModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    ContextMenuModule,
    TabMenuModule,
    SidebarModule,
    PanelMenuModule,
    NgbModule,
    ListboxModule,
    CarouselModule,
    GalleriaModule,
    DropdownModule,

  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
