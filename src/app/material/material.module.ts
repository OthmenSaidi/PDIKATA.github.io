import {  NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {  MatToolbarModule  } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

const Materials: any[]  =[
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatRadioModule,
  MatCheckboxModule

];

@NgModule({

  imports: [Materials
   
  ],
  exports:[Materials ]
})
export class MaterialModule { }
