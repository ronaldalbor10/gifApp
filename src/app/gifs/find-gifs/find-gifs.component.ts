import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-find-gifs',
  templateUrl: './find-gifs.component.html'
})
export class FindGifsComponent {
  //El @iewChild hace referencia a un elemento del html
  //El caracter ! garantiza que el objeto referenciado no es nulo 
  @ViewChild('txtFind') txtFind!: ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService){}

  findGifs(){
    const valueFind = this.txtFind.nativeElement.value;

    //validar espacios en blanco
    if(valueFind.trim().length===0){
      return;
    }
    console.log(valueFind);
    //Consumir servicio web
    this.gifsService.historyGifs(valueFind);

    

    this.txtFind.nativeElement.value='';
  }

}
