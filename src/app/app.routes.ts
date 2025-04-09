import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ResultComponent } from './components/result/result.component';
import { IntroComponent } from './components/intro/intro.component';

export const routes: Routes = [
    {
        path: 'intro',
        component: IntroComponent
    },
    {
        path: 'card',
        component: CardComponent
    },
    {
        path: 'result',
        component: ResultComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];
