import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


const fade=trigger('loadFade',[
  state('in',style({opacity:1})),
  transition('out => in',[style({opacity:0}),animate('2000ms ease-in')]),
  transition('in => out',[style({opacity:1}),animate('2000ms ease-out')])
])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('rotatedState', [
     state('default', style({ transform: 'rotate(0)' })),
     state('rotated', style({ transform: 'rotate(-360deg)' })),
     transition('rotated => default', animate('1500ms ease-out')),
     transition('default => rotated', animate('1000ms ease-in'))
   ]),
   [fade]
 ]
})
export class HomeComponent implements OnInit{
state:string='default'
visible='out';
rotate(){
  this.state = (this.state === 'default' ? 'rotated' : 'default');
}

ngOnInit(): void {
 if(this.visible=='out'){
  setTimeout(() => {
    this.visible='in'
  });
 }

}
  
}
