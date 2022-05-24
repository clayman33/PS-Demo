import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { UserData } from '../data/user-data';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
    
    originalUserData : UserData = {
      name: null,
      emailOffers: null,
      interfaceStyle: null,
      subscriptionType: null, 
      notes: null
  };

    userData : UserData = { ...this.originalUserData };
    postError = false;
    postErrorMessage = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onBlur(field : NgModel){
    console.log('in onBlur: ', field.valid)
  }

  onHttpError(errorResponse : any){
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit: ', form.valid)

    if(form.valid){
    this.dataService.postUserSettingsForm(this.userData).subscribe(
      result => console.log('results: ', result),
      error => this.onHttpError(error)
    )
    }
    else{
      this.postError = true;
      this.postErrorMessage = 'Please fix the errors above';
    }
  }

}
