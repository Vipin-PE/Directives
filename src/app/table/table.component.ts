import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  showTable: boolean = false;
  columns: string[] = ['Column 1', 'Column 2', 'Column 3']; 
  columnColors: { [key: string]: string } = {};

  toggleTable() {
    this.showTable = !this.showTable;
  }

  changeColor(column: string) {
    this.columnColors[column] = this.getRandomColor();
  }

  getRandomColor(): string {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  }
}
