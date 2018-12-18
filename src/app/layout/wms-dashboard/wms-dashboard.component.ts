import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-wms-dashboard',
  templateUrl: './wms-dashboard.component.html',
  styleUrls: ['./wms-dashboard.component.scss']
})
export class WmsDashboardComponent implements OnInit {
  expandToggle: Boolean = true;
  ocrFile: string[] = [];
  constructor(private http: Http) { }

  ngOnInit() {
  }

  expand() {
    this.expandToggle = !this.expandToggle;
  }

  getFileDetails(e) {
    for (var i = 0; i < e.target.files.length; i++) {
      this.ocrFile.push(e.target.files);
      console.log('this.ocrFile', this.ocrFile);
    }
  }

  uploadFiles() {
    alert('hi');
  }

}
