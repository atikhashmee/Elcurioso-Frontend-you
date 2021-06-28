import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { MenuComponent } from './menu/menu.component'
import { DealEventsComponent } from './deal-events/deal-events.component'
import { ContactUsComponent } from './contact-us/contact-us.component'
import { BookingComponent } from './booking/booking.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'deal-events', component: DealEventsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'booking', component: BookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
