import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';
import { Icons } from './../../config/icon.config';
import { Message } from './../../config/message.en';

import { MyPortfolioComponent } from './my-portfolio.component';

const routes: Routes = [
    {
        path: '',
        component: MyPortfolioComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [MyPortfolioComponent],
    providers: [Icons, Message]
})
export class MyportfolioModule { }
