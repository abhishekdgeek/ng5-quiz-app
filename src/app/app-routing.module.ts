import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// User defined components
import { QuizManageComponent } from './quiz/manage/manage.component';

const appRoutes: Routes = [
    {
        path: '',
        component: QuizManageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
