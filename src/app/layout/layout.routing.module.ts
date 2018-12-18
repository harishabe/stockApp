import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'briefing', pathMatch: 'prefix' },          
            { path: 'statements', loadChildren: './statements/statements.module#StatementsModule' },
            { path: 'briefing', loadChildren: './briefing/briefing.module#BriefingModule' },
            { path: 'myPortfolio', loadChildren: './my-portfolio/my-portfolio.module#MyportfolioModule' },
            { path: 'myWatchList', loadChildren: './my-watch-list/my-watch-list.module#MywatchModule' },
            { path: 'switch', loadChildren: './switch/switch.module#SwitchModule' },
            { path: 'addExisting', loadChildren: './add-existing/add-existing.module#AddexistingModule' }          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
