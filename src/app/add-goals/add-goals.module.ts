import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../material';
import { Icons } from './../config/icon.config';
import { Message } from './../config/message.en';

import { AddGoalsComponent } from './add-goals.component'

const routes: Routes = [
    {
        path: '',
        component: AddGoalsComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [AddGoalsComponent],
    providers: [Icons, Message]
})
export class AddGoalsModule { }
