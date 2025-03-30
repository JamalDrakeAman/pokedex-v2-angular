import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarStateService {

  readonly isSidebarOpen = signal(false);

  constructor() { }

  toggleSidebar() {
    this.isSidebarOpen.update(state => !state);

    console.log(this.isSidebarOpen());
    
  }
}
