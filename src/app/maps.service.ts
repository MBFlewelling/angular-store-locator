import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MapsService {

  public lat: number = 51.678418;
  public lng: number = 7.809007;
  public zoom: number = 8;

  public newCoordinators = new Subject();

  constructor() { }

}
