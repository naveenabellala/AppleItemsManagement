import { Component, OnInit } from '@angular/core';
import { Iitem } from '../item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {
pageTitle : string = 'Item Name';
item : Iitem;
errorMessage = '';
  constructor(private itemService : ItemService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getItem(id);
    }
  }
  getItem(id: number){
      this.itemService.getItem(id).subscribe({
        next : item => this.item = item,
        error : err => this.errorMessage = err
      })
  }

  onBack() : void {
    this.router.navigate(['/items']);
  }
}
