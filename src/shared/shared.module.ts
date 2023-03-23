import {NgModule} from "@angular/core";
import {HeaderComponent} from "./models/components/layouts/header/header.component";
import {BaseLayoutComponent} from "./models/components/layouts/base-layout/base-layout.component";
import {RouterOutlet} from "@angular/router";
import {SideMenuComponent} from "./models/components/layouts/side-menu/side-menu.component";

@NgModule({
  declarations : [
    BaseLayoutComponent,
    HeaderComponent,
    SideMenuComponent,
  ],
  imports: [
    RouterOutlet
  ],
  exports: [
  ],
  providers: []
})

export class SharedModule {}
