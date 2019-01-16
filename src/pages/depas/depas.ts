import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DepasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-depas',
  templateUrl: 'depas.html',
})
export class DepasPage {
  depa;
  favoritos;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.depa = this.navParams.get('depa');
    this.favoritos = this.navParams.get('fav');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepasPage');
  }

 clickagregar(){
   this.favoritos.push(this.depa);
   this.navCtrl.pop();
 }
}
