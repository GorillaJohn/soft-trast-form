import { Data } from './data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  elements: Data[] = [];



  constructor(private http: HttpClient) { }
}

