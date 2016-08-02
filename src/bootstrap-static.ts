import 'core-js/shim';
import 'zone.js/dist/zone';

import {browserPlatform} from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
import {MainModuleNgFactory} from './main.module.ngfactory';

enableProdMode();

browserPlatform().bootstrapModuleFactory(MainModuleNgFactory);