import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatTabsModule,
  MatSelectModule,
  MatProgressSpinnerModule

} from "@angular/material";

@NgModule({
  imports: [MatProgressSpinnerModule, MatSelectModule, MatTabsModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule,MatSidenavModule,MatToolbarModule,MatListModule,MatCardModule],
  exports: [MatProgressSpinnerModule, MatSelectModule, MatTabsModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule,MatSidenavModule,MatToolbarModule,MatListModule,MatCardModule]
})
export class MaterialModule {}
