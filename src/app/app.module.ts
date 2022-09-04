import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from 'src/environments/environment';
import { PokemanState } from './store/states/pokeman.state';
import { PokemanService} from'./apis/pokeman.service'
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([PokemanState]),
    !environment.production ? NgxsReduxDevtoolsPluginModule.forRoot() : null,
    !environment.production ? NgxsLoggerPluginModule : null,
    HttpClientModule
  ],
  providers: [PokemanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
