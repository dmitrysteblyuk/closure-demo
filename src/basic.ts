import {Component, Injectable} from '@angular/core';

@Component({
  selector: 'basic',
  templateUrl: './basic.ng.html',
})
export class Basic {
    data = { 'someProp': 'defined in quotes', anotherProp: 'normal syntax' };
}
