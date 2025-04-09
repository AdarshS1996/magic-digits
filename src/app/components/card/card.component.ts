import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-card',
    imports: [CommonModule, HeaderComponent],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

    currentCard: number[] = [];
    currentCardIndex: number = 0;
    selectedCards: boolean[] = [];
    cards: number[][] = [];
    readonly totalCards: number = 7;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.cards = this.generateCards();
        this.selectedCards = [];
        this.currentCardIndex = 0;
        this.currentCard = this.cards[0];
    }

    private generateCards() {
        const cards = [];
        for (let i = 0; i < this.totalCards; i++) {
            const card = [];
            for (let num = 1; num <= 100; num++) {
                if ((num & (1 << i)) !== 0) {
                    card.push(num);
                }
            }
            cards.push(card);
        }
        return cards;
    }

    public cardSelected(isYes: boolean) {
        this.selectedCards[this.currentCardIndex] = isYes;
        this.currentCardIndex++;

        if (this.currentCardIndex < this.totalCards) {
            this.currentCard = this.cards[this.currentCardIndex];
        } else {
            const magicNumber = this.calculateNumber(this.selectedCards);
            this.router.navigate(['/result'], {
                state: { magicNumber }
            });
        }
    }

    private calculateNumber(selections: boolean[]) {
        let result = 0;
        for (let i = 0; i < selections.length; i++) {
            if (selections[i]) {
                result += (1 << i);
            }
        }
        return result;
    }
}
