import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  exports: [ MatToolbarModule, MatCardModule ],
  imports: [ MatToolbarModule, MatCardModule ]
})
export class MaterialModule { }
