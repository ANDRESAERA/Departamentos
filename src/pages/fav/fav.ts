import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DepasPage } from '../depas/depas';

/**
 * Generated class for the FavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html',
})
export class FavPage {
  favoritos;
  depa=DepasPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.favoritos = this.navParams.get('fav');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavPage');
  }

  clickdepas(p)
  {
    this.navCtrl.push(this.depa,{depa:p,fav:this.favoritos});
  }

}
