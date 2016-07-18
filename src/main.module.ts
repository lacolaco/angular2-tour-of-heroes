import {AppModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {COMMON_DIRECTIVES} from '@angular/common';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';

@AppModule({
    modules: [BrowserModule, FormsModule],
    providers: [
    ],
    directives: [
        ...COMMON_DIRECTIVES,
    ],
    precompile: [AppComponent, HeroesComponent, HeroDetailComponent]
})
export class MainModule {
    constructor(public appRef: ApplicationRef) {
        appRef.bootstrap(AppComponent)
    }
}
