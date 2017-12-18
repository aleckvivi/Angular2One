import 'reflect-metadata';
import 'zone.js';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err=>console.error(err));