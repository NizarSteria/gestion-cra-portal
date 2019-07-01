import { Component, OnInit } from '@angular/core';
import { ContractService } from '../shared/contract/contract.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
contracts : Array<any>;

  constructor(private contractService: ContractService, private giphyService: GiphyService) { }

  ngOnInit() {
 this.contractService.getAll().subscribe(data => {
      this.contracts = data;
       for (const contract of this.contracts) {
        this.giphyService.get(contract.id).subscribe(url => contract.giphyUrl = url);
      }
    });

  }

}
