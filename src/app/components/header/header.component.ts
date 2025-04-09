import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() leftIcon!: string;
  @Input() isLeftHidden!: boolean;
  @Input() rightIcon!: string;
  @Input() isRightHidden!: boolean;
  @Input() isInfoIcon!: boolean;
  @Input() showCenterLogo!: boolean;

  constructor(private router: Router) { }

  public onLeftButtonClick() {
    if (!this.isLeftHidden) {
      if (this.leftIcon === 'home')
        this.router.navigate(['/']);
    }
  }

  public onCenterButtonClick() {
    this.router.navigate(['/']);
  }

  public onRightButtonClick() {
    if (!this.isRightHidden && !this.isInfoIcon) {
      if (this.rightIcon === 'replay')
        this.router.navigate(['/intro']);
    }
  }
}
