import { Component} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result-gifs',
  templateUrl: './result-gifs.component.html'
})
export class ResultGifsComponent  {

  constructor(private gifService: GifsService) { }

  get results(){
    return this.gifService.results;
  }
}
