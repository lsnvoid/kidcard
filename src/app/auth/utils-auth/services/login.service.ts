import { Injectable } from '@angular/core';
import { AuthModule } from '../../auth.module';
import { Observable, of, delay, tap } from 'rxjs';
import { StateService } from '../../../utils/services/state.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: AuthModule
})
export class LoginService {

  constructor(private stateService: StateService, private router: Router) { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.stateService.loggedIn = true;
        this.router.navigateByUrl(this.stateService.redirectUrl || 'dashboard')
      })
    );
  }

  logout(): void {
    this.stateService.loggedIn = false;
  }
}
