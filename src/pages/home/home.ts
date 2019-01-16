import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DepasPage } from '../depas/depas';
import { FavPage } from '../fav/fav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  depa=DepasPage;
  fav=FavPage;
  favoritos=[];
  depas=[
    {
      imagen:'../assets/imgs/depa1.jpg',
      tipo:'venta',
      precio:'$ 6,150,000',
      cuartos:'3',
      colonia:'Colomos Providencia Condominio (Colomos Providencia)',
    },

    {
      imagen:'../assets/imgs/depa2.jpg',
      tipo:'venta',
      precio:'$ 1,735,000',
      cuartos:'2',
      colonia:'Tabachines',
    },

    {
      imagen:'../assets/imgs/depa3.jpg',
      tipo:'Renta',
      precio:'$ 10,000 mensuales',
      cuartos:'3',
      colonia:'Acueducto/Plaza del sol',
    },

    {
      imagen:'../assets/imgs/depa4.jpeg',
      tipo:'Renta',
      precio:'$ 17,000 mensuales',
      cuartos:'2',
      colonia:'Jardines del country',
    },

    {
      imagen:'../assets/imgs/depa5.jpg',
      tipo:'venta',
      precio:'$ 1,335,000',
      cuartos:'4',
      colonia:'Casa bugambilias',
    },
    {
      imagen:'../assets/imgs/depa6.jpg',
      tipo:'venta',
      precio:'$ 2,500,000',
      cuartos:'2',
      colonia:'Colonia industrial',
    },
    {
      imagen:'../assets/imgs/depa7.jpg',
      tipo:'venta',
      precio:'$ 1,300,000',
      cuartos:'4',
      colonia:'Loma bonita',
    },
    {
      imagen:'../assets/imgs/depa8.jpg',
      tipo:'Renta',
      precio:'$ 7,100 mensuales',
      cuartos:'1',
      colonia:'Jardines de San ignacio',
    },
    {
      imagen:'../assets/imgs/depa9.jpg',
      tipo:'Renta',
      precio:'$ 6,000 mensuales',
      cuartos:'2',
      colonia:'villa universitaria',
    },
    {
      imagen:'../assets/imgs/depa10.jpg',
      tipo:'venta',
      precio:'$ 1,600,000',
      cuartos:'4',
      colonia:'Santa Teresita',
    },

  
  ]

  constructor(public navCtrl: NavController) {

  }
  clickdepas(p)
  {
    this.navCtrl.push(this.depa,{depa:p,fav:this.favoritos});
  }
  clickfavoritos()
  {
    this.navCtrl.push(this.fav,{fav:this.favoritos})
  }

}
