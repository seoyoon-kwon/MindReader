import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-test',
  templateUrl: 'test.component.html'
})

export class TestComponent implements OnInit{

  ngOnInit() {
    console.log('this is test page');
  }
}
