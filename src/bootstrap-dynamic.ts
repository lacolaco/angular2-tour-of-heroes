import 'core-js/shim';
import 'zone.js/dist/zone';

import {browserDynamicPlatform} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {MainModule} from './main.module';

enableProdMode();

browserDynamicPlatform().bootstrapModule(MainModule);