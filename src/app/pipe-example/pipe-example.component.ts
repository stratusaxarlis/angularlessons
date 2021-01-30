import { Component, OnInit } from '@angular/core';
import { PipesService } from './pipes.service';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.sass']
})
export class PipeExampleComponent implements OnInit {
  
  public ammount! :number;
  public date!: Date;

  constructor(private pipe : PipesService) { }

  ngOnInit(): void {
    this.ammount= this.pipe.getDateAmount().Ammount;
    this.date= this.pipe.getDateAmount().date;
  }
}
