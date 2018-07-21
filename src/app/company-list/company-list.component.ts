import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../shared/company/company.service';
import { GiphyService } from '../shared/giphy/giphy.service';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
compnies : Array<any>;

  constructor(private companyService: CompanyService, private giphyService: GiphyService) { }

  ngOnInit() {
  this.companyService.getAll().subscribe(data => {
      this.compnies = data;
       for (const company of this.compnies) {
        this.giphyService.get(company.name).subscribe(url => company.giphyUrl = url);
      }
    });
  }

}
