import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { dummy_data } from '../models/repository_data';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit,AfterViewInit {
 
  constructor(private router: Router,public dialog: MatDialog, public sample_data: dummy_data) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  repo_data:any;
  seperate_data:any;
  data:any;
  
  ngOnInit(): void {
    this.repo_data = this.sample_data.getData()
    
    this.repo_data.forEach((element: any) => {
      this.seperate_data=element.status  

    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['sop_id','sop_name','description','platform','category','status','Action'];
  dataSource = new MatTableDataSource(this.sample_data.getData());
  
  openDialog() {
    this.dialog.open(DialogComponent,{data:{pagevalue:this.data}});  
  }
  
 
  
  open(id:any){
    this.data=id
  }
}
