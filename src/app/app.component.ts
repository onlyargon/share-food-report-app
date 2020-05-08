import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Share food report app';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  salesRecord = [];
  displayedColumns: string[] = ['displayName', 'foodType', 'foodName', 'quantity', 'description', 'unitPrice', 'preparedOn', 'expiryDate', 'userLocation'];
  dataSource = new MatTableDataSource<any>(this.salesRecord);

  constructor(private _service:ApiService){}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

    this._service.getSalesReport().subscribe((resp:any)=>{
      this.dataSource.data = resp.Data;
    });
  }



}
