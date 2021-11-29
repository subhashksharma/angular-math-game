import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {delay} from 'rxjs/operators';

import { MathValidator} from './math.validator'
@Component({
  selector: 'app-mathgame',
  templateUrl: './mathgame.component.html',
  styleUrls: ['./mathgame.component.css']
})
export class MathgameComponent implements OnInit {

  mathGameForm = new FormGroup({

    a : new FormControl(this.generateRandomNumber()),
    b : new FormControl(this.generateRandomNumber()),
    result : new FormControl(''),
    
  },
  [MathValidator.validateAddition])
  constructor() { }

  ngOnInit(): void {

    this.mathGameForm.statusChanges.pipe(delay(100)).subscribe(value => {
      console.log(value);

      if(value==='INVALID'){
        return;
      }
      
      this.mathGameForm.setValue({
        a: this.generateRandomNumber(),
        b: this.generateRandomNumber(),
        result : ''
      });

    })
  }

  private generateRandomNumber() {
    return (Math.floor(Math.random()*10));
  }

}
