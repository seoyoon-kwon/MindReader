import {NgModule} from "@angular/core";
import {TestComponent} from "./test.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
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
