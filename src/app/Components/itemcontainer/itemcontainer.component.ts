import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-itemcontainer',
  templateUrl: './itemcontainer.component.html',
  styleUrls: ['./itemcontainer.component.css']
})

export class ItemcontainerComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
