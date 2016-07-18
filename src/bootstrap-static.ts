import 'core-js/shim';
import 'zone.js/dist/zone';

import {browserPlatform} from '@angular/platform-browser';
import {bootstrapModuleFactory} from '@angular/core';
import {MainModuleNgFactory} from './main.module.ngfactory';

bootstrapModuleFactory(MainModuleNgFactory, browserPlatform());