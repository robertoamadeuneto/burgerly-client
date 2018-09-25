import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Ingredient } from "./ingredient";

const API_INGREDIENT = 'http://localhost:8080/api/ingredients/';

@Injectable({ providedIn: 'root' })
export class IngredientService {

    constructor(private httpClient: HttpClient) { }

    findAll(): Observable<Ingredient[]> {
        return this.httpClient.get<Ingredient[]>(API_INGREDIENT);
    }
}
