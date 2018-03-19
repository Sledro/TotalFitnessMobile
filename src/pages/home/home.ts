import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage{
  constructor(public navCtrl: NavController,private iab: InAppBrowser /* 2 */) {
    this.iab.create('http://totalfitness.host','_self',{location:'no'}); /*3*/
  }
}