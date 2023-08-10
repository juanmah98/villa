import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  private familyFriendlyStatus: boolean = false;
  private familySubject = new Subject<boolean>()

  getStatus(): boolean {
    return this.familyFriendlyStatus
  }

  setStatus(newState: boolean) {
    this.familyFriendlyStatus = newState;
    this.familySubject.next(newState);
  }

  get statusObservable() {
    return this.familySubject.asObservable()
  }
}
