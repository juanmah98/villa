import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../components/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  constructor(private firestore: Firestore) { }

  getUsers(): Observable<User[]>{
    const userRef = collection(this.firestore, 'User');
    return collectionData(userRef, {idField: 'id'}) as Observable<User[]>;
  }

  getUser(id:string): Observable<any>{
    const userRef = collection(this.firestore, `User/${id}/datos`);
    return collectionData(userRef, {idField: 'id'}) as Observable<any>;
  }
}
