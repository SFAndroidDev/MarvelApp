import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  MY_API_KEY = 'a68ea8430bdcbfdb2da5b923f0f21bed';
  API_URL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.MY_API_KEY}`;
  constructor(private httpClient: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.httpClient.get<any>(this.API_URL)
      .pipe(map((data: any) => data.data.results))
  }
}
