import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { MymoviesComponent } from './mymovies/mymovies.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    AllmoviesComponent,
    MymoviesComponent,
    HeaderComponent,
    FilterComponent,
    FilterPipe
  ],
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }