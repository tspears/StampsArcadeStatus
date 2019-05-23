import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  @Input() name: string;
  status : String = 'Available';

  constructor() { }

  ngOnInit() {
  }

}
