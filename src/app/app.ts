import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

type Theme = 'auto' | 'light' | 'dark';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly theme = signal<Theme>('auto');

  constructor() {
    this.setTheme((localStorage.getItem('theme') as Theme | null) ?? 'auto');
  }

  protected setTheme(theme: Theme): void {
    this.theme.set(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle(
      'app-dark',
      theme === 'dark' || (theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches),
    );
  }
}
