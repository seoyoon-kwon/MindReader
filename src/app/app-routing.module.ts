import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {BaseLayoutComponent} from "../shared/models/components/layouts/base-layout/base-layout.component";

const routes: Routes = [

  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'test',
        loadChildren: () => import('./test/test.module').then(i => i.TestModule),
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true}),

  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {
}
