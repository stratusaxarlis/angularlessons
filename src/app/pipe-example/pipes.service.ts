import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PipesService {

  constructor() { }

  getDateAmount(){
    return {date:new Date(),Ammount : 1.5};
  }
}
