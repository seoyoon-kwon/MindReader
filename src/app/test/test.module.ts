import {NgModule} from "@angular/core";
import {AppComponent} from "../app.component";
import {TestComponent} from "./test.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: 'test-page',
        component: TestComponent,
      },
    ]),
  ],
  providers: []
})

export class TestModule {}
