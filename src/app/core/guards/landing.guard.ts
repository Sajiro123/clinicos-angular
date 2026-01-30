import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const landingGuard: CanActivateFn = (route, state) => {
  // Allow access to landing page without authentication for demo purposes
  return true;
};
