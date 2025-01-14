import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-dropdown-sub-menu',
  template: `
    <a nz-dropdown [nzDropdownMenu]="menu" (nzVisibleChange)="change($event)">
      Cascading menu
      <i nz-icon type="down"></i>
    </a>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item>1st menu item</li>
        <li nz-menu-item>2nd menu item</li>
        <li nz-submenu nzTitle="sub menu">
          <ul>
            <li nz-menu-item>3rd menu item</li>
            <li nz-menu-item>4th menu item</li>
          </ul>
        </li>
        <li nz-submenu nzDisabled nzTitle="disabled sub menu">
          <ul>
            <li nz-menu-item>3rd menu item</li>
            <li nz-menu-item>4th menu item</li>
          </ul>
        </li>
      </ul>
    </nz-dropdown-menu>
  `
})
export class NzDemoDropdownSubMenuComponent {
  change(value: boolean): void {
    console.log(value);
  }
}
