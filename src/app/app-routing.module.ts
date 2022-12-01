import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonasComponent } from './personas/personas.component';
import { TareasComponent } from './tareas/tareas.component';




const routes: Routes = [
  {path: '', redirectTo: './home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'task', component: TareasComponent},
  {path: 'personas', component: PersonasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
