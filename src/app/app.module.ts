import { NgModule } from '@angular/core';
import { MatButtonModule, MatTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AchievementsComponent } from './achievements/achievements.component';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { OptionsComponent } from './options/options.component';
import { StatsComponent } from './stats/stats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { path: '', redirectTo: '/button', pathMatch: 'full' },
  { path: 'button', component: ButtonComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'options', component: OptionsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    StatsComponent,
    AchievementsComponent,
    OptionsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
