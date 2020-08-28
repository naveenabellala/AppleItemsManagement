import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Iitem } from '../item';
import { Item } from 'src/app/ItemClass';


@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent implements OnInit {
  pageTitle : string = `Edit Item `;
  item: any = {};
  
  
  myForm : FormGroup;
  
 
  

  constructor(private itemService : ItemService,
    private route : ActivatedRoute,
    private router : Router,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.myForm = this.fb.group({
        name: ['', Validators.required ],
        code: ['', Validators.required ],
        owner: ['', Validators.required ],
        price : ['', Validators.required ],
        imageUrl: ['', Validators.required ],
        rating : ['', Validators.required ],
        availability : ['', Validators.required ],
        feedback : ['', Validators.required ]
      });           
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemService.editItem(params['id']).subscribe(res => {
        this.item = res;
      });
    });
  }
  saveEditedItem(name,code,owner,price,imageUrl,rating,availability,feedback) : void {
    
    this.route.params.subscribe(params => {
      this.itemService.updateItem(name,code,owner,price,imageUrl,rating,availability,feedback, params['id']);
      alert("Updated Succesfully");
      this.router.navigate(['/items']);
      
   }); 
}
  onBack() : void {
  this.router.navigate(['/items']);
  }
}
