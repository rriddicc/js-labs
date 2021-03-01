import { Pipe, PipeTransform } from '@angular/core';
import { isArray, isNullOrUndefined } from 'util';

interface Worker {
	id: number;
	name: string;
	surname: string;
	number: string;
	status: boolean;
}
@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {
	public arrSearch;
	transform(workers: Worker[], search: string): any {
		if (search.includes(' ')) {
			this.arrSearch = search.split(' ');
		} else {
			this.arrSearch = '';
		}
		if (!isNullOrUndefined(workers) && search.trim().length > 0) {
			if (isArray(this.arrSearch)) {
				return workers.filter(worker => (worker.surname.toLocaleLowerCase().includes(this.arrSearch[0].toLowerCase()) && worker.name.toLocaleLowerCase().includes(this.arrSearch[1].toLowerCase())));
			} else {
				return workers.filter(worker => (worker.surname.toLocaleLowerCase().includes(search.toLowerCase()) || worker.name.toLocaleLowerCase().includes(search.toLowerCase())));
			}
		} else {
			return workers;
		}
	}
}
