import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './data';
import { PokeDescription } from './models';

@Injectable({
    providedIn: 'root'
})
export class PokeApiService {

    private baseUrl: string = "https://pokeapi.co/api/v2/"

    http: HttpClient

    constructor(client: HttpClient) {
        this.http = client
    }

    getData(url: string) {
        console.log('getting data for', url);
        return this.http.get<Data>(this.baseUrl + url)
    }

    getPokeInfo(name: string) {
        return this.http.get<PokeDescription>(this.baseUrl + "pokemon/" + name)
    }
}
