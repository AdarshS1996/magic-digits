import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';

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

        if (!this.isInvalidNumber) {
            setTimeout(() => {
                this.confettiCelebration();
            }, 100);
        }
    }

    confettiCelebration(): void {
        const myCanvas = document.getElementById('confetti-canvas') as HTMLCanvasElement;
        const confettiInstance = confetti.create(myCanvas, { resize: true });
        confettiInstance({
            angle: 90,
            spread: 50,
            startVelocity: 75,
            particleCount: 500,
            origin: { y: 1 },
            colors: ['#1C1C1C']
        });
    }

    public goToIntroPage() {
        this.router.navigate(['/intro']);
    }
}
