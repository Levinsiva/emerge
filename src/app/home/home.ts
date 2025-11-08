import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
