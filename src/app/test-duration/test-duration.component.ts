import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-duration',
  templateUrl: './test-duration.component.html',
  styleUrls: ['./test-duration.component.css']
})
export class TestDurationComponent implements OnInit {
  @Output() durationChanged = new EventEmitter<number>();
  durationOptions: any[];

  constructor() {
    this.durationOptions = [
      {
        label: '1 Min',
        value: '1',
        name: 'test-duration',
        checked: 'checked',
        id: 'one',
      },
      {
        label: '2 Min',
        value: '2',
        name: 'test-duration',
        checked: 'checked',
        id: 'two',
      },
      {
        label: '3 Min',
        value: '3',
        name: 'test-duration',
        checked: 'checked',
        id: 'three',
      },
      {
        label: '4 Min',
        value: '4',
        name: 'test-duration',
        checked: 'checked',
        id: 'four',
      },
      {
        label: '5 Min',
        value: '5',
        name: 'test-duration',
        checked: 'checked',
        id: 'five',
      },
    ]
   }

  ngOnInit(): void {
  }

  emitNewDuration(event: any) {
    let value = event.value;
    this.durationChanged.emit(value);
  }

}
