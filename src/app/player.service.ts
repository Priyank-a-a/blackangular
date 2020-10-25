import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Player} from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {



 private baseURL = 'http://localhost:8080/api/v1/players';
  constructor(private httpClient: HttpClient) { }

  getPlayersList(): Observable<Player[]>{
   return this.httpClient.get<Player[]>(`${this.baseURL}`);

  }

  createPlayer(player: Player):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`, player);

  }
}
