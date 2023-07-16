import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-mat-card-grid',
  templateUrl: './mat-card-grid.component.html',
  styleUrls: ['./mat-card-grid.component.scss']
})
export class MatCardGridComponent {
  @Input() title: string = '';
  @Input() excelExportEnabled: boolean = true;
  @Output() excelReportExportEvent: EventEmitter<boolean> = new EventEmitter();

  exportExcel() {
    this.excelReportExportEvent.emit(true);
  }

}
