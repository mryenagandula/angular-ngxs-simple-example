import {State,Action,Selector,StateContext} from '@ngxs/store';
import { Injectable } from '@angular/core';
import { PokemanService } from 'src/app/apis/pokeman.service';
import { GetAllPokemans } from '../actions/pokeman.actions';
import { tap } from "rxjs/operators";
export interface POKEMAN_STATE_MODEL{
    pokemans: any[],
    tatalCount: number
}

@State<any>({
    name : 'pokemans',
    defaults: {
        pokemans: [],
        tatalCount: 0
    }
})
@Injectable()
export class PokemanState{
    constructor(private pokemanService:PokemanService){}

    @Selector() 
    public static pokemans(state: POKEMAN_STATE_MODEL) {
        return state.pokemans;
    }

    @Selector() 
    public static pokemansCount(state: POKEMAN_STATE_MODEL) {
        return state.tatalCount;
    }

    @Action(GetAllPokemans)
    public getPokemans({getState, setState}: StateContext<POKEMAN_STATE_MODEL>){
        return this.pokemanService.getAllPokemans().pipe(tap((data) => {
            const state = getState();
            setState({
                ...state,
                pokemans: data.results,
                tatalCount: data.count
            });
        }));
    }

}