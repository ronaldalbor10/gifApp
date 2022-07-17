import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'oCJ3IAHq6TiIBFPCc01BjulVJjXxT3Ch';
  private serviceGifUrl:string = 'https://api.giphy.com/v1/gifs';

  private _history:string[] =[];

  public results: Gif[] = [];

  get history(){
    return [...this._history];
  }

  constructor( private http: HttpClient){
    
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('lastSearch')!) || [];
    /*if(localStorage.getItem('history')){
      this._history = JSON.parse(localStorage.getItem('history')!);
    }*/
    
  }
  
  historyGifs(query:string){

    query = query.trim().toLocaleLowerCase();

    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history = this._history.splice(0,10); // .splice Corta el array desde una opcicion a otra
      localStorage.setItem('history',JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','10')
      .set('q',query);

    this.http.get<SearchGIFResponse>(`${this.serviceGifUrl}/search`,{params})
        .subscribe( ( resp ) =>{
          console.log(resp.data);
          localStorage.setItem('lastSearch',JSON.stringify(resp.data));
          this.results = resp.data;
          
        });
    
    
  }
 
}
