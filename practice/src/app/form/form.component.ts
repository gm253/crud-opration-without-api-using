import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myform: FormGroup;
  table: any = [];
  constructor(private router: Router, private route: ActivatedRoute) {
    this.myform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.minLength(3),
        Validators.required,
      ]),
    });
  }
  ngOnInit(): void {
    this.table = sessionStorage.getItem('sdata');
    this.table = JSON.parse(this.table); //this is convert the array string format json to and load the data page refresh
    let paramid = this.route.snapshot.paramMap.get('id'); //get or fetch paramiter id
    // console.log(paramid);
    let record = this.table.filter((tbl: any) => {
      //this is filter the table record and find the match record tbl.id through
      return tbl.id == paramid;
    });
    // console.log('record:',record);
this.myform.patchValue({
  email:record[0].email,
  password:record[0].password
})
  }
  issubmit = false;
  formsubmit() {
    console.log('hello');
    console.log(this.myform.value);
    let obj = {
      id: Math.random(),
      email: this.email?.value,
      password: this.password?.value,
    };
    // console.log(obj)
    this.table.push(obj); //this.table is stored the obj data
    //console.log(this.table)
    sessionStorage.setItem('sdata', JSON.stringify(this.table)); //json.stringify is convert the json string format and set thae session data
    this.router.navigate(['/']); //navigate the page or redirect page
  }
  get email() {
    return this.myform.get('email');
  }
  get password() {
    return this.myform.get('password');
  }
}
