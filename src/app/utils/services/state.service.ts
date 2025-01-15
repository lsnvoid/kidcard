import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  // get set login state
  private loggedInBS: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  set loggedIn(value: boolean) { this.loggedInBS.next(value); }
  get loggedIn(): boolean { return this.loggedInBS.value }
  loggedInObs(): Observable<boolean> { return this.loggedInBS.asObservable() }

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;
}
