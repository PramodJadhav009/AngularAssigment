import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSalary'
})
export class FormatSalaryPipe implements PipeTransform {

  transform(value: number, locale: string = 'en-US', currencyCode: string = 'USD'): string {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode }).format(value);
  }

}
