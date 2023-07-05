import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, find, from, map, switchMap } from 'rxjs';
import { User } from '../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor( private firestore: Firestore ) { }

  public getUserByEmail(email: string): User {
    debugger
    var user: User = new User()

    this.getUsers()
      .pipe(
        switchMap((db) => from(db)),
        find((dbUser) => dbUser.Email === email)
      ).subscribe(dbUser => {
        user.Email = dbUser.Email,
        user.Name = dbUser.Name,
        user.LastName = dbUser.LastName,
        user.HasManaged = dbUser.HasManaged,
        user.Medals = dbUser.Medals,
        user.Type = dbUser.Type,
        user.id = dbUser.id
      })

      return user
    }

    private getUsers(): Observable<User[]> {
      const userRef = collection(this.firestore, 'User');
      return collectionData(userRef, { idField: 'id' }) as Observable<User[]>;
    }
}
