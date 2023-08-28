import { NgModule } from '@angular/core';

// Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from "@angular/material/select";
// Import more modules as needed

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule
  ],
})
export class MaterialModule {}
