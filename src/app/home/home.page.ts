import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  chats = [
    {
      name: 'Angel Alvarez',
      message: 'No soy vago, estoy en modo ahorro de energía.',
      time: '09:30 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      color: 'danger',
      dateTime: '12 de enero, 09:45 AM',
      icon: 'arrow-down-outline',
      statusColor: 'danger'
    },
    {
      name: 'Maria Lopez',
      message: 'Mi dieta empieza mañana... o el lunes, ya veremos.',
      time: '10:15 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      dateTime: '8 de enero, 03:12 PM',
      icon: 'arrow-up-outline',
      statusColor: 'success'
    },
    {
      name: 'Carlos Jimenez',
      message: 'El café me entiende más que las personas.',
      time: '11:45 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      color: 'danger',
      dateTime: '20 de enero, 01:30 PM',
      icon: 'arrow-down-outline',
      statusColor: 'danger'
    },
    {
      name: 'Luisa Fernandez',
      message: 'No soy perezosa, estoy en modo de ahorro de batería.',
      time: '12:30 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      dateTime: '17 de enero, 10:05 AM',
      icon: 'arrow-up-outline',
       statusColor: 'success'
    },
    {
      name: 'Pedro Gonzalez',
      message: 'Si estudiar fuera fácil, se llamaría Netflix.',
      time: '01:20 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      color: 'danger',
      dateTime: '15 de enero, 06:20 PM',
      icon: 'arrow-down-outline',
       statusColor: 'danger'
    },
    {
      name: 'Ana Martinez',
      message: 'Mi plan de vida: ser millonario sin esfuerzo.',
      time: '02:00 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      color: 'danger',
      dateTime: '9 de enero, 11:10 AM',
      icon: 'arrow-down-outline',
       statusColor: 'danger'
    },
    {
      name: 'Javier Ruiz',
      message: 'Mi wifi va tan lento que hasta mi sombra me adelanta.',
      time: '03:15 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      dateTime: '11 de enero, 02:40 PM',
      icon: 'arrow-up-outline',
       statusColor: 'success'
    },
    {
      name: 'Sofia Herrera',
      message: 'Trabajo duro para que mi perro tenga una mejor vida.',
      time: '04:40 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      dateTime: '14 de enero, 07:15 PM',
      icon: 'arrow-up-outline',
       statusColor: 'success'
    },
    {
      name: 'Andres Castro',
      message: 'Mi cama y yo tenemos una relación seria.',
      time: '05:50 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      color: 'danger',
      dateTime: '5 de enero, 09:50 PM',
      icon: 'arrow-down-outline',
      statusColor: 'danger'
    },
    {
      name: 'Valentina Perez',
      message: 'Vamos a peñuela, tu invita las guamas y yo las hermanas.',
      time: '06:30 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      dateTime: '16 de enero, 01:30 PM',
      icon: 'arrow-up-outline',
       statusColor: 'success'
    },
    {
      name: 'Ricardo Torres',
      message: '¿Dormir? Eso es para los débiles.',
      time: '07:45 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      dateTime: '17 de enero, 11:50 AM',
      icon: 'arrow-up-outline',
      statusColor: 'success'
    },
    {
      name: 'Fernanda Rios',
      message: 'Bro, antes las ballenas habitaban en el mar, ahora se creen inalcanzables en IG.',
      time: '08:15 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      color: 'danger',
      dateTime: '24 de enero, 01:12 PM',
      icon: 'arrow-down-outline',
      statusColor: 'danger'
    }
  ];

  states = [
    {
      name: "Barbebola8",
      time: "09:44 a.m"
    },
    {
      name: "Cañafresca2",
      time: "10:15 a.m"
    },
    {
      name: "Lunarcito5",
      time: "11:30 a.m"
    },
    {
      name: "Manchamiel9",
      time: "12:45 p.m"
    },
    {
      name: "BigoteRojo3",
      time: "01:20 p.m"
    },
    {
      name: "Dienteflor7",
      time: "02:10 p.m"
    }
  ];


  constructor(private navController:NavController) {}

  goSettings(){
    this.navController.navigateRoot('/settings')
  }

}
