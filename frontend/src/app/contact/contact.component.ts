import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  displayedColumns  :  string[] = ['id', 'name', 'title', 'email', 'phone', 'address', 'city', 'actions'];
  dataSource  = [];
  contact = {};
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readContacts().subscribe((result)=>{   
      console.log(result); 
      this.dataSource  =  result;
    })
  }

  selectContact(contact){
    this.contact = contact;
    console.log("selected: ", this.contact);
  }

  newContact(){
    this.contact = {};
  }

  createContact(f){

    console.log("form value: ", f.value);

    this.apiService.createContact(f.value).subscribe((result)=>{
      console.log(result);
    });
    
  }

  deleteContact(id){
    this.apiService.deleteContact(id).subscribe((result)=>{
      console.log(result);
    });
  }

  updateContact(f){
    console.log("Update", f.value)
    f.value.id = this.contact['id'];
    this.apiService.updateContact(f.value).subscribe((result)=>{
      console.log(result);
    });
  }

}
