import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  
import { TeamSampleComponent } from './ipl/components/teamsample/teamsample.component';
import { CricketerSampleComponent } from './ipl/components/cricketersample/cricketersample.component';
import { NavBarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    // TeamSampleComponent,
    // CricketerSampleComponent
   // NavBarComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
