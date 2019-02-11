import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() BeginExercise = new EventEmitter;


  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      this.BeginExercise.emit();
      console.log(form);
    }
  }


}
