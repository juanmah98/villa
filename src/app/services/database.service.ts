import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable, find, from, map, switchMap, tap } from 'rxjs';
import { User } from '../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor( private firestore: Firestore ) { }

  public setUserContextByEmail(email: string): void {
    var user: User

    this.getUsers()
      .pipe(
        switchMap((db) => from(db)),
        find((dbUser) => dbUser.Email === email),
        tap((userContext) => {
            user = new User(
              userContext.Email,
              '',
              userContext.Name,
              userContext.LastName,
              userContext.Type,
              userContext.HasManaged,
              userContext.Medals,
              userContext.id,
              userContext.isAndreu
            )

            user.setPicture(localStorage.getItem("profilePhoto"))
            localStorage.setItem('user', JSON.stringify(user))
        })
      ).subscribe()
    }

    private getUsers(): Observable<User[]> {
      const userRef = collection(this.firestore, 'User');
      return collectionData(userRef, { idField: 'id' }) as Observable<User[]>;
    }

    addUser(clave: any){
      const claveRef = collection(this.firestore, 'User');
      return addDoc(claveRef, clave);
    }
}
