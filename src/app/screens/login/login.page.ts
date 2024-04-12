import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  private navCtrl: NavController;
 
  constructor(navCtrl: NavController) {
 
   
    this.navCtrl = navCtrl;
   
  }
 
  showRegister() {
    this.navCtrl.navigateForward('register');
  }
 
 
 
}
 

  


