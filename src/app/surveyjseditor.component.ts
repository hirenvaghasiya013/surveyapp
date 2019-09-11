import { Component, OnInit } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';

@Component({
  selector: 'app-surveyjseditor',
  templateUrl: './surveyjseditor.component.html',
  styleUrls: ['./surveyjseditor.component.css']
})
export class SurveyjseditorComponent implements OnInit {
  editor: SurveyEditor.SurveyEditor;

  constructor() { }

  ngOnInit() {
    let editorOptions = {showEmbededSurveyTab: true, generateValidJSON : true};
    this.editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', editorOptions);
  }
}
