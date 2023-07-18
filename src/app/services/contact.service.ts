import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContacts } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getContact(): Observable<IContacts> {
    return this.http.get<IContacts>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
