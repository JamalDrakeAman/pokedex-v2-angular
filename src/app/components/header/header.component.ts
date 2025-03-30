import { CommonModule } from '@angular/common';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarStateService } from '../../shared/sidebar-state.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @ViewChild('myCheckbox') myCheckbox!: ElementRef<HTMLInputElement>;

  isChecked: boolean = false;

  constructor(public sidebarState: SidebarStateService) { }

  checkStatus() {
    const isChecked = this.myCheckbox.nativeElement.checked;
    console.log('Checkbox ist:', isChecked);
  }

  toggle() {
    this.sidebarState.toggleSidebar();
  }

}
