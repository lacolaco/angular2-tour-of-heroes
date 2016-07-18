import 'core-js/shim';
import 'zone.js/dist/zone';

import {browserPlatform} from '@angular/platform-browser';
import {bootstrapModuleFactory, enableProdMode} from '@angular/core';
import {MainModuleNgFactory} from './main.module.ngfactory';

enableProdMode();

bootstrapModuleFactory(MainModuleNgFactory, browserPlatform());