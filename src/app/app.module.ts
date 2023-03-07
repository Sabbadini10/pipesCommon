import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomPipesModule } from './components/custom-pipes/custom-pipes.module';
import { PipesCommonModule } from './components/pipes-common/pipes-common.module';
import { DarkModePipes } from './shared/pipes/dark-mode.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DarkModePipes
  ],
  imports: [
    BrowserModule,
    PipesCommonModule,
    CustomPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
