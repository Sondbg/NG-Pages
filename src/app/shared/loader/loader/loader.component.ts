import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit{
  state: string='default';
  @Input() message = 'Моля изчакайте';

  constructor(){}
  ngOnInit(): void {
    this.state = (this.state === 'default' ? 'rotated' : 'default');

  }
}
