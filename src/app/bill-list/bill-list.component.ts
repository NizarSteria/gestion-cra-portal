import { Component, OnInit } from '@angular/core';
import { BillService } from '../shared/bill/bill.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
bills : Array<any>;

  constructor(private billService: BillService, private giphyService: GiphyService) { }

  ngOnInit() {
  this.billService.getAll().subscribe(data => {
      this.bills = data;
       for (const bill of this.bills) {
        this.giphyService.get(bill.id).subscribe(url => bill.giphyUrl = url);
      }
    });
  }

}
