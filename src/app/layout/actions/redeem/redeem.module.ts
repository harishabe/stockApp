import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material';
import { Icons } from './../../../config/icon.config';
import { Message } from './../../../config/message.en';

import { RedeemComponent } from './redeem.component';

const routes: Routes = [
    {
        path: '',
        component: RedeemComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [RedeemComponent],
    providers: [Icons, Message]
})
export class RedeemModule { }
