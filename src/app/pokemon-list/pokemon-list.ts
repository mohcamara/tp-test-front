import { Component, signal } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeApiService } from '../poke-api.service';
import { PokeDescription } from '../models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokeInfo } from '../poke-info/poke-info';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
  imports: [FormsModule, CommonModule, PokeInfo]
})
export class PokemonList {
  id: string = ''

  showInfo = signal(false)



  dataFromServer: Pokemon[] = []

  dataToShow: PokeDescription | undefined

  choix: Pokemon | undefined;

  constructor(private apiService: PokeApiService) {
    console.log('PokemonList initialized');
    this.apiService.getData("pokemon").subscribe(data => {
      console.log('Data received:', data);
      // @ts-ignore
      this.dataFromServer = data.results;
      if (this.dataFromServer.length > 0) {
        this.choix = this.dataFromServer[0];
      }
    })
  }


  onClick() {
    this.apiService.getPokeInfo(this.id).subscribe(data => {
      this.dataToShow = data
      console.log(this.dataToShow)
      this.showInfo.set(true)
    })
  }

  onChange(e: any) {
    // Check if e is string (from manually typing or simple select) or object
    // The original code passed 'choix' to onChange.
    // In original HTML: (change)="onChange(choix)"
    // And input ID is bound to ngModel id.

    // If e is the Pokemon object
    if (e && e.name) {
      this.id = e.name;
    } else {
      this.id = e;
    }
  }
}
