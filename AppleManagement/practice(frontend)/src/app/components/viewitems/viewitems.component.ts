import { Component, OnInit } from '@angular/core';
import { Iitem } from '../item';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {
  pageTitle : string = 'List of Items';
  imageWidth : number = 50;
  imageMargin : number = 2;
  showImage : boolean = false;
  errorMessage = '';
  _listFilter : string;

        get listFilter() : string {
              return this._listFilter;
        }
        set listFilter(value : string) {
              this._listFilter = value;
              this.filteredItems = this.listFilter ? this.performFilter(this.listFilter) : this.items;
        }

  filteredItems : Iitem[];
  items : Iitem[];

  item : any;
  
 
  constructor(private itemService : ItemService,private router : Router ) {
    
   }

   ngOnInit(): void {
    console.log("in OnInIt");
    this.itemService.getItems().subscribe({
      next: items => {
        this.items = items;
        this.filteredItems = this.items;
      },
      error: err => this.errorMessage = err
    });
   

 }

   onRatingClicked(message: string): void {
    this.pageTitle = 'Items List: ' + message;
  }

  

  imageToggle() : void{
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): Iitem[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.items.filter((item: Iitem) =>
      item.owner.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  deleteItem(id : number){
    this.itemService.deleteItem(id).subscribe(res => {
      
      window.location.reload(); 
      console.log('Deleted successfully');     
    });
  }
 
 

}
