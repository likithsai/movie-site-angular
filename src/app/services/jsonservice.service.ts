import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JSONService {
    public baseUrl = "assets/data.json";

    constructor(private httpClient: HttpClient) { }

    public getData(): Observable<any> {
        return this.httpClient.get<any>(this.baseUrl);
    }
}
