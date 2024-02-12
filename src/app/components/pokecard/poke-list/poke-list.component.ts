import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'https://cdn.communitydragon.org/',
    'content-type': 'application/json'
  })
};

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokeListComponent {
  apiBaseUrl: string = "https://api.tcgdex.net/v2/fr/cards";
  toto = this.getCards('1');
  


  constructor(public http: HttpClient) {
  }


  public getCards(id: string, optionalParam?: HttpParams) {
    return this.getDataResult(this.apiBaseUrl );
  }

  public getDataResult(apiUrl: string ) {
    let httparams = new HttpParams();
    console.log(apiUrl)
    return this.http.get<any>(apiUrl, {params: httparams})
      .pipe(
        map(data => {
          
          if (data && data.results) {
            return data.results;
          } else {
            return data;
          }
        })
      )
      ;
  }
}
