import {Component, Injectable, QueryList} from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';


@Component({
  selector: 'basic',
  templateUrl: './basic.ng.html',
})
@Injectable()
export class Basic {
  ctxProp: string;
  constructor() {
    this.ctxProp = `Hello World`;

    console.log(new FocusKeyManager(new QueryList()).withWrap().withTypeAhead());
  }
}
