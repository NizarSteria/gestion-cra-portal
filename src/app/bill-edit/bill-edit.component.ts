import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from '../shared/bill/bill.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.css']
})
export class BillEditComponent implements OnInit {
bill : any = {};

  sub: Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private billService: BillService,
              private giphyService: GiphyService) { }

  ngOnInit() {

this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.billService.get(id).subscribe((bill: any) => {
          if (bill) {
            this.bill = bill;
            this.giphyService.get(bill.id).subscribe(url => bill.giphyUrl = url);
          } else {
            console.log(`bill with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/bill-list']);
  }

  save(form: NgForm) {
    this.billService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(id) {
    this.billService.remove(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }


}
