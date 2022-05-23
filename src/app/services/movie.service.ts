import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Movie } from '../movie.model';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  data!: Movie[];

  constructor(private httpClient: HttpClient) {
    // var object;
    // this.getAllMovies().subscribe(data => this.data =data)

    // this.httpClient.get("assets/testdata.json").subscribe(data =>{
    //     this.data = data;
    //     console.log(data);
     
    //})
   }
    getAllMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>("assets/datamin.json").pipe(

      map( data => data)
      
      );
  

}
   // getMoviesByTitle(title : String): Observable<Movie[]>  {
     

      // return this.httpClient.get<Movie[]>("assets/datamin.json").pipe(

      //   filter()
      //   );
    
  
//}
}