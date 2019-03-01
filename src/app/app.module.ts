import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRouterModule } from './app-router.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { TrainingComponent } from './training/training.component';
import { StopTrainingDialog } from './training/current-training/StopTrainingDialog';
import { TrainingService } from './training/training.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CurrentTrainingComponent,
    StopTrainingDialog,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRouterModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [TrainingService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingDialog]
})
export class AppModule { }
