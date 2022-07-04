import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.data = sessionStorage.getItem('sdata');
    this.data = JSON.parse(this.data);
    console.log(this.data);
  }
data:any =
[{
  id:1,email:'mehul@gmail.com',password:'mehul'
}];
edit(json:any){
  this.router.navigate(['/edit',json.id])
}
}
