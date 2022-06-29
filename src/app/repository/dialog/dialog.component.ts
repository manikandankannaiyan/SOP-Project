import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RepositoryComponent } from '../repository.component';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor( 
    public dialogRef: MatDialogRef<RepositoryComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    )
    {
      this.single_data=data.pagevalue;
    }

  single_data: any;
  
  ngOnInit(): void {

    this.Sop_repo.patchValue({
      sop_name: this.single_data.sop_name,
      alert_msg: this.single_data.description,
      device_name: this.single_data.device
    })
    
    
 }

 Sop_repo = new FormGroup({
  sop_name: new FormControl(
    { value: null ,disabled:false},
    Validators.required
  ),
  alert_msg: new FormControl(
    { value: null ,disabled:false},
    Validators.required
  ),
  device_name: new FormControl(
    { value: null ,disabled:false},
    Validators.required
  ),
 })
}
