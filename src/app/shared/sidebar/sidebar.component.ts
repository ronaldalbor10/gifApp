import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent {

  

  
  get records(){
      return this.gifsService.history;
  }

  constructor(private gifsService:GifsService){}

  findItem(item:string){
    console.log(item);
    this.gifsService.historyGifs(item);
  }

}
