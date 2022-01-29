import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective{
    constructor(){
      this.isOpen = false;
    }

    @HostBinding('class.open') isOpen: boolean;

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}
