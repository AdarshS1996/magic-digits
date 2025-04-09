import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-result',
    imports: [CommonModule, HeaderComponent],
    templateUrl: './result.component.html',
    styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit {

    magicNumber: number = 0;
    isInvalidNumber: boolean = false;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.magicNumber = history?.state?.['magicNumber'];

        if (this.magicNumber === undefined) {
            this.router.navigate(['/']);
        }
        if (this.magicNumber < 1 || this.magicNumber > 100) {
            this.isInvalidNumber = true;
        }
    }

    public goToIntroPage() {
        this.router.navigate(['/intro']);
    }
}
