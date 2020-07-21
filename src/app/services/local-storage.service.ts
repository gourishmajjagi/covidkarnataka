import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLocation(location: string) {
    localStorage.setItem('district', location);
  }

  getLocation(): string {
    return localStorage.getItem('district');
  }
}
