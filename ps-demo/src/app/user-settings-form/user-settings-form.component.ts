import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
