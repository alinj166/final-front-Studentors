import { CrudService } from '../../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-service-off',
  templateUrl: './post-service-off.component.html',
  styleUrls: ['./post-service-off.component.css']
})
export class PostServiceOffComponent implements OnInit {

  constructor( private crud:CrudService ,private formBuilder:FormBuilder,private router: Router ) { }


  serviceoffForm=new FormGroup(
    { 
    description:new FormControl(''),
    titre:new FormControl(''),
    prix:new FormControl(''),
    domaine:new FormControl(''),
    tempsService:new FormControl(''),
    });
  
  onAjouter(){
    this.crud.addServiceOffert(this.serviceoffForm.value)
    .subscribe();
    this.router.navigate(["servicesOff"])

    }

  ngOnInit(): void {
    this.serviceoffForm = this.formBuilder.group(
      {description:[''],
      titre:[''],
      prix:[],
      domaine:[''],
      tempsService:[''],
      }
      )
  }

}
