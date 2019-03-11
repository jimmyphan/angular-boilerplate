import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MenuComponent } from './components/menu/menu.component';

// Containers
import { SidenavComponent } from './containers/sidenav/sidenav.component';

@NgModule({
  declarations: [SidenavComponent, MenuComponent],
  imports: [CommonModule],
  exports: [SidenavComponent]
})
export class SharedModule {}
