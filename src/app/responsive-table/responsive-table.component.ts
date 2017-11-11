import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.css']
})
export class ResponsiveTableComponent implements OnInit {

  tableData: object[] = [
  {Name: 'Hani', Address: 'Somewhere special on earth which must be hidden from evey person',
    Telephone: '+92-3142258756', CNIC_No: '42201-16315215-7'},
    {Name: 'Hasnain', Address: 'Somewhere special on earth which must be hidden from evey person',
      Telephone: '+92-3142258756', CNIC_No: '42201-16315215-7'},
    {Name: 'Ayan', Address: 'Somewhere special on earth which must be hidden from evey person',
      Telephone: '+92-3142258756', CNIC_No: '42201-16315215-7'},
    {Name: 'Ali', Address: 'Somewhere special on earth which must be hidden from evey person',
      Telephone: '+92-3142258756', CNIC_No: '42201-16315215-7'}
  ];

  /**
   * class constructor
   */
  constructor() { }

  /**
   * View Initializer
   */
  ngOnInit() {
  }
}
