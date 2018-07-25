import { Component, OnInit } from '@angular/core';
import { CraService } from '../shared/cra/cra.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-cra-list',
  templateUrl: './cra-list.component.html',
  styleUrls: ['./cra-list.component.css']
})
export class CraListComponent implements OnInit {
cras : Array<any>;

  constructor(private craService : CraService, private giphyService: GiphyService) { }

  ngOnInit() {
  this.craService.getAll().subscribe(data => {
      this.cras = data;
       for (const car of this.cras) {
        this.giphyService.get(car.id).subscribe(url => car.giphyUrl = url);
      }
    });
  }

}



