import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Core
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';

// App
import { AgencyModule } from './agency/agency.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,

    // Core
    CoreModule,
    SharedModule,
    MaterialModule,

    // App
    AgencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
