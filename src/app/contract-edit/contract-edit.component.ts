import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from '../shared/contract/contract.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {
contract : any = {};

  sub: Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private contractService: ContractService,
              private giphyService: GiphyService) { }

  ngOnInit() {
   this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.contractService.get(id).subscribe((contract: any) => {
          if (contract) {
            this.contract = contract;
            this.giphyService.get(contract.id).subscribe(url => contract.giphyUrl = url);
          } else {
            console.log(`contract with id '${id}' not found, returning to list`);
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
    this.router.navigate(['/contract-list']);
  }

  save(form: NgForm) {
    this.contractService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(id) {
    this.contractService.remove(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }


}
