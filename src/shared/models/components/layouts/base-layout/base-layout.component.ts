import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  @ViewChild('root', { static: false })
  root!: ElementRef;

  /**
   * 초기화 이벤트
   */
  ngOnInit(): void { }

}
