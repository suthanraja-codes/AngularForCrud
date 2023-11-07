import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'employee', component:FormComponent},
  {path:'list',component:ListComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'',redirectTo:'employee',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
