import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-items',
  templateUrl: './input-add-items.component.html',
  styleUrls: ['./input-add-items.component.scss']
})
export class InputAddItemsComponent implements OnInit {

  @Output() public emmitNewTask = new EventEmitter()

  public addItemTaskList: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  public submitTask() {
    this.addItemTaskList = this.addItemTaskList.trim()
    
    if(this.addItemTaskList) {
      this.emmitNewTask.emit(this.addItemTaskList)
      this.addItemTaskList = ""
    }
  }

}
