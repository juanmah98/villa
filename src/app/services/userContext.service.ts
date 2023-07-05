import { Injectable } from '@angular/core';
import { User } from '../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserContextService {
  userContext: User = new User()

  setUserContextEmail(nuevoEmail: string) {
    this.userContext.Email = nuevoEmail
  }

}
