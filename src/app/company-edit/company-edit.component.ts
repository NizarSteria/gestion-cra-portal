import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../shared/company/company.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit, OnDestroy {
company : any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private companyService: CompanyService,
              private giphyService: GiphyService) { }

  ngOnInit() {

 this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.companyService.get(id).subscribe((company: any) => {
          if (company) {
            this.company = company;
            this.giphyService.get(company.name).subscribe(url => company.giphyUrl = url);
          } else {
            console.log(`Company with id '${id}' not found, returning to list`);
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
    this.router.navigate(['/company-list']);
  }

  save(form: NgForm) {
    this.companyService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.companyService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
