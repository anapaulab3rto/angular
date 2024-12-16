import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, LoginComponent, CadastroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['/about'])
  }
  navigateToLogin() {
    this.router.navigate(['/login'])
  }
}
