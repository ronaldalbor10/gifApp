import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { FindGifsComponent } from './find-gifs/find-gifs.component';
import { ResultGifsComponent } from './result-gifs/result-gifs.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    FindGifsComponent,
    ResultGifsComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
