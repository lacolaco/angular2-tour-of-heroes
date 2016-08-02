import {NgModule, ApplicationRef, ANALYZE_FOR_ENTRY_COMPONENTS} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {appRoutes} from './app.routes';
import {HeroService} from './hero.service';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, {
            useHash: false
        })
    ],
    providers: [
        HeroService
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        // ...COMMON_DIRECTIVES,
    ],
    entryComponents: [
        AppComponent
    ]
})
export class MainModule {
    constructor(public appRef: ApplicationRef) {
        appRef.bootstrap(AppComponent)
    }
}
