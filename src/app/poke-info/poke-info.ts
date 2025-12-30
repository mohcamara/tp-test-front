import { Component, Input, OnInit } from '@angular/core';
import { PokeDescription } from '../models';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.html',
  styleUrl: './poke-info.css'
})
export class PokeInfo implements OnInit {
  @Input() info: PokeDescription | undefined

  ngOnInit(): void {
    console.error(this.info?.name)
  }

  constructor() {
  }
}
