import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { dummy_data } from '../models/repository_data';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
 
  constructor(private router: Router,public dialog: MatDialog, public sample_data: dummy_data) {}

  repo_data:any;
  seperate_data:any;
  data:any;
  
  ngOnInit(): void {
    this.repo_data = this.sample_data.getData()
    
    this.repo_data.forEach((element: any) => {
      this.seperate_data=element.status
      console.log(this.seperate_data);    
    })
  }

  displayedColumns: string[] = ['id','sop_name','description','platform','category','status','Action'];
  dataSource = this.sample_data.getData();
  
  openDialog() {
    this.dialog.open(DialogComponent,{data:{pagevalue:this.data}});  
  }
  
 
  
  open(id:any){
    this.data=id
  }
}
