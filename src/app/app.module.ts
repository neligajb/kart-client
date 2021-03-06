import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlayerDetailComponent} from './components/player-detail/player-detail.component';
import { BigboardComponent} from './components/bigboard/bigboard.component';

import { PlayerService } from './services/player.service';
import { PlayerNameService } from './services/player-name.service';
import { AppRoutingModule } from './app-routing.module';

import { PlayerScorePipe } from './pipes/player-score.pipe';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayerDetailComponent,
    BigboardComponent,
    PlayerScorePipe
  ],
  providers: [
    PlayerService,
    PlayerNameService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
