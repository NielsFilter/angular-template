import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HelloService {
    constructor(private httpClient: HttpClient) { }

    getWorld() {
        return this.httpClient.get('api/world');
    }
    
}