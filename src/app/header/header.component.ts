import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() tabSelected = new EventEmitter<string>();
    handleSelect(selectedTab: string){
        this.tabSelected.emit(selectedTab);
    }
}