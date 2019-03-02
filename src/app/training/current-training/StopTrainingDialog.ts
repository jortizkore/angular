import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from './current-training.component';
@Component({
  selector: 'app-stop-training-dialog',
  templateUrl: 'stop-training-dialog.html'
})
// tslint:disable-next-line:component-class-suffix
export class StopTrainingDialog {
  progress: number;
  constructor(dialogref: MatDialogRef<StopTrainingDialog>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData) {
    this.progress = data.progress;
  }
}
