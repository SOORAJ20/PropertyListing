import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../user/guard/auth.guard';
import { AddListingComponent } from './add-listing/add-listing.component';
import { ListingDeatilComponent } from './listing-deatil/listing-deatil.component';
import { ListingsComponent } from './listings/listings.component';

const routes: Routes = [
  {
    path:"",component:ListingsComponent
  },
  {
    path:"add-listing", component:AddListingComponent,
    canActivate:[AuthGuard]
  },
  {
    path:":id",component:ListingDeatilComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
