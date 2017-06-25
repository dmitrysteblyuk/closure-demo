import {Component, Injectable, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent {
  @Input() data: any;
  @Input() template: TemplateRef<any>;
  @Input() templateContextMode: 'standard' | 'inQuotes' | 'definedInComponent' | 'inComponentInQuotes';

  context = { someVar: 'VALUE' };
  contextInQuotes = { 'someVar': 'VALUE' };
}
