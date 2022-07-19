import { Component,OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { dummy_data } from '../models/repository_data';
import { RepositoryService } from '../service/repository.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
 
  constructor(public dialog: MatDialog, public sample_data: dummy_data, private service:RepositoryService) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  repo_data:any;
  data:any;
  
  ngOnInit(): void {
    this.service.getdata(this.postdata).subscribe((res:any)=>{
      this.repo_data=res.data
      this.dataSource = new MatTableDataSource<any>(this.repo_data);
      this.dataSource.paginator = this.paginator;   
      console.log(this.repo_data);
    })
  }
  postdata={
    "page_number":1,
    "count_per_page":10,
    "filters":{
            "search_name":"",
            "search_key":"",
            "categories":[],
            "status":[]
        }
 }

  displayedColumns: string[] = ['sop_id','sop_name','description','platform','category','status','Action'];
  public dataSource!: MatTableDataSource<any>;
 
  openDialog() {
    this.dialog.open(DialogComponent,{data:{pagevalue:this.data}});  
  }
  
  open(id:any){
    this.data=id
  }
}
