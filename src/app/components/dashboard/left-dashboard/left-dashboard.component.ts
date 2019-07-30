import { Component, OnInit, Output, EventEmitter } from '@angular/core';
export enum EuListType {
  OPEN_FOLDER = 'openFile',
  OPEN_FILE = 'multiSelections',
  DRAG_AND_DROP = 'dragDrop'
}

@Component({
  selector: 'app-left-dashboard',
  templateUrl: './left-dashboard.component.html',
  styleUrls: ['./left-dashboard.component.scss']
})
export class LeftDashboardComponent implements OnInit {
  @Output() ListItemClicked: EventEmitter<EuListType> = new EventEmitter();
  eListType = EuListType;

  constructor() {}

  ngOnInit() {}

  itemClickedHandler = (eve: EuListType) => {
    this.ListItemClicked.emit(eve);
  }
}
