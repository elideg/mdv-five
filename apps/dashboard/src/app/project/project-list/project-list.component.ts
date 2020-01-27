import { Project } from '@mdv-five/core-data';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'mdv-five-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: Project
  @Output() selected = new EventEmitter
  @Output() deleted = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

}
