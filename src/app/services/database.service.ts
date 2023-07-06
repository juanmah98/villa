import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
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
              userContext.HasManaged,
              userContext.LastName,
              userContext.Medals,
              userContext.Name,
              userContext.Type,
              userContext.id
            )

            localStorage.setItem('user', JSON.stringify(user))
        })
      ).subscribe()
    }

    private getUsers(): Observable<User[]> {
      const userRef = collection(this.firestore, 'User');
      return collectionData(userRef, { idField: 'id' }) as Observable<User[]>;
    }
}
