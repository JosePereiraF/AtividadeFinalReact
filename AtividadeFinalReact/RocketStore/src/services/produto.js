import {Api} from './api'

export const GetAllPokemon = ()=>{
    const url = '/pokemon'
    return Api.get(url);
}
