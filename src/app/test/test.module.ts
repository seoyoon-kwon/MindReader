import {NgModule} from "@angular/core";
import {AppComponent} from "../app.component";
import {TestComponent} from "./test.component";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
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
