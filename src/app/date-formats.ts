import {MatDateFormats} from "@angular/material/core";

export const MY_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD.MM.YYYY'
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearLabel: 'MMMM YYYY'
  }
};
