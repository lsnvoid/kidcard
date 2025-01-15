import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StateService } from '../services/state.service';

export const routeGuard: CanActivateFn = (route, state) => {
  const stateService = inject(StateService);
  const router = inject(Router);

  stateService.redirectUrl = state.url;

  if (stateService.loggedIn) {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl('/auth');
};
