import { Component, signal } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

provideRouter(routes);
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('emerge');

  constructor(router: Router) {
    router.events.subscribe((event: Event) => {
      const loader = document.getElementById('loader');
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (loader) loader.style.display = 'none';
      } else {
        if (loader) loader.style.display = 'flex';
      }
    });
    // Show/hide back to top button
    window.addEventListener('scroll', () => {
      const btn = document.getElementById('backToTopBtn');
      if (btn) {
        btn.style.display = window.scrollY > 200 ? 'block' : 'none';
      }
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
