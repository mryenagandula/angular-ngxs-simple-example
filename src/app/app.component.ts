import { Component, OnInit } from '@angular/core';
import { Store,Select } from "@ngxs/store";
import { Observable } from 'rxjs';
import { GetAllPokemans } from './store/actions/pokeman.actions';
import { PokemanState } from './store/states/pokeman.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public pokemans$: Observable<any[]>;
  @Select(PokemanState.pokemansCount) 
  public pokemanCount$: Observable<number>;
  public selectedPokeman = -1;

  constructor(private store:Store){}

  public ngOnInit(): void {
      this.store.dispatch(new GetAllPokemans());
      this.pokemans$ = this.store.select(PokemanState.pokemans);
  }

  public selectPokeman(url){
    this.selectPokeman =url;
  }

}
