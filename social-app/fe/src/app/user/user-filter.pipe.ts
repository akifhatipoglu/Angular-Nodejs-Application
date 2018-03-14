import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "userFilter"
})
export class UserFilterPipe implements PipeTransform {
  //value manupule edilecek data
  transform(value: any[], filterText?: string): any {
    filterText = filterText ? filterText.toLocaleLowerCase() : null;

    return filterText
      ? value.filter(u => u.name.toLocaleLowerCase().indexOf(filterText) !== -1)
      : value;
  }
}
