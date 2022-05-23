import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { DisplayMoviesComponent } from './components/display-movies/display-movies.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayMoviesComponent,
    CardMovieComponent,
    EditMovieComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
