import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { CraService } from '../shared/cra/cra.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cra-edit',
  templateUrl: './cra-edit.component.html',
  styleUrls: ['./cra-edit.component.css']
})
export class CraEditComponent implements OnInit {

cra : any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private craService: CraService,
              private giphyService: GiphyService) { }

  ngOnInit() {

 this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.craService.get(id).subscribe((cra: any) => {
          if (cra) {
            this.cra = cra;
            this.giphyService.get(cra.id).subscribe(url => cra.giphyUrl = url);
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
    this.router.navigate(['/cra-list']);
  }

  save(form: NgForm) {
    this.craService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(id) {
    this.craService.remove(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  }
