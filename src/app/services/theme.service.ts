import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _isDarkTheme = new BehaviorSubject<boolean>(true);

  readonly isDarkTheme$ = this._isDarkTheme.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('dark-theme');
    if (savedTheme !== null) {
      this._isDarkTheme.next(savedTheme === 'true');
      this.applyTheme(savedTheme === 'true');
    } else {
      this.applyTheme(true);
    }
  }

  toggleTheme() {
    const newTheme = !this._isDarkTheme.value;
    this._isDarkTheme.next(newTheme);
    this.applyTheme(newTheme);
    localStorage.setItem('dark-theme', newTheme.toString());
  }

  setDarkTheme(isDark: boolean) {
    this._isDarkTheme.next(isDark);
    this.applyTheme(isDark);
    localStorage.setItem('dark-theme', isDark.toString());
  }

  private applyTheme(isDark: boolean) {
    const body = document.body;
    if (isDark) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
}