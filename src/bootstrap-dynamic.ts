import 'core-js/shim';
import 'zone.js/dist/zone';

import {browserDynamicPlatform} from '@angular/platform-browser-dynamic';
import {bootstrapModule} from '@angular/core';
import {MainModule} from './main.module';

bootstrapModule(MainModule, browserDynamicPlatform());