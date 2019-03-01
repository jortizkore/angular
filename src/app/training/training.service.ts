import { TrainingModel } from './training.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TrainingService {
  public availableTrainings: TrainingModel[] = [
    { trainingName: 'Jumping jacks', duration: 60, calories: 50 },
    { trainingName: 'Planks', duration: 60, calories: 20 },
    { trainingName: 'Push up', duration: 30, calories: 309 },
    { trainingName: 'Squats', duration: 30, calories: 309 },
    { trainingName: 'Crunchs', duration: 30, calories: 309 },
    { trainingName: 'Touch Toes', duration: 30, calories: 309 }
  ];

  constructor() {}

  getAvailableTrainings() {
    return this.availableTrainings;
  }

  addTraining(training: TrainingModel) {
    this.availableTrainings.push(training);
  }

  removeTraining(training: string) {
    this.availableTrainings = this.getAvailableTrainings().filter(
      ex => ex.trainingName !== training
    );
  }

}
