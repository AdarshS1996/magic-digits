import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-intro',
  imports: [HeaderComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

  constructor(private router: Router) { }

  public goToCardsPage() {
    this.router.navigate(['/card']);
  }
}
