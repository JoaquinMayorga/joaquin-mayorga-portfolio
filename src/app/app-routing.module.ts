import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // This is important for fragment scrolling to work reliably
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'})],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
