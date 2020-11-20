import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {MenuPageComponent} from './menu-page/menu-page.component';
import {PaintingPageComponent} from './painting-page/painting-page.component';
import {McqPaperComponent} from './mcq-paper/mcq-paper.component';
import {ScormPanelComponent} from './scorm-panel/scorm-panel.component';


const routes: Routes = [
    {
        path: 'app',
        component: WelcomePageComponent
    },
    {
        path: 'home',
        component: MenuPageComponent
    },
    {
        path: 'drawing',
        component: PaintingPageComponent
    },
    {
        path: 'mcq',
        component: McqPaperComponent
    },
    {
        path: 'scorm',
        component: ScormPanelComponent
    },

    {path: '', pathMatch: 'full', redirectTo: 'app'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
