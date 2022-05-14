import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrozComponent } from './Components/arroz/arroz.component';
import { AlimentosComponent } from './Components/alimentos/alimentos.component';
import { AseoComponent } from './Components/aseo/aseo.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { HeaderComponent } from './Components/header/header.component';
import { SobrenosotrosComponent } from './Components/sobrenosotros/sobrenosotros.component';

const routes: Routes = [
  {path: 'sobrenosotros', component: SobrenosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'alimentos', component: AlimentosComponent},
  {path: 'aseo', component: AseoComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'arroz', component: ArrozComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
