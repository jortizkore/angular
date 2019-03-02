
import { TrainingService } from './../training.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainingModel } from '../training.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() BeginExercise = new EventEmitter;
  availableTrainings: TrainingModel[] = [];


  constructor(private trainingService: TrainingService ) { }

  ngOnInit() {
    this.trainingService = new TrainingService();
    this.availableTrainings = this.trainingService.getAvailableTrainings();
    console.log(this.availableTrainings);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.BeginExercise.emit();
      console.log(form);
    }
  }


}
