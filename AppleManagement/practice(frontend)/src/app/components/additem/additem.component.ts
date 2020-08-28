import { Component, OnInit } from '@angular/core';
import { Iitem } from '../item';
import { ItemService } from 'src/app/services/item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  pageTitle : string = 'Add Item';
  myForm : FormGroup;
  item : Iitem;
 
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


saveItem() : void {
  const p = { ...this.item, ...this.myForm.value };
  this.itemService.createItem(p).subscribe( res => {
    
    console.log("added");
    alert("added successfully");
    this.router.navigate(['/items']);
  });
}

  ngOnInit(): void {
  }

}
