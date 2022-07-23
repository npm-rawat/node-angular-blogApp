import { Component, OnInit, ViewChild } from '@angular/core';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';


@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  @ViewChild('alertMsg') rteObj: RichTextEditorComponent | undefined;

  public model: any = {
    alertMsg: "<p>Sample content</p>"
  };

  printRTE(): void {
    (document.getElementById('outputElement') as any).value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
