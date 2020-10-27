import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ListingsComponent } from './listings/listings.component';
import { ListingDeatilComponent } from './listing-deatil/listing-deatil.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListingsComponent, ListingDeatilComponent, AddListingComponent],
  imports: [
    CommonModule,
    ListingRoutingModule,
    ReactiveFormsModule
  ]
})
export class ListingModule { }
