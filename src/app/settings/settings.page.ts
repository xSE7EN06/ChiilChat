import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  options = [
    {
      name: 'Cuenta',
      info: 'Notificaciones de seguridad, cambiar número',
      icon: 'key-outline'
    },
    {
      name: 'Privacidad',
      info: 'Bloquear contactos, mensajes temporales',
      icon: 'lock-closed-outline'
    },
    {
      name: 'Avatar',
      info: 'Crear, editar, administrar foto de perfil',
      icon: 'person-circle-outline'
    },
    {
      name: 'Listas',
      info: 'Administrar personas y grupos',
      icon: 'albums-outline'
    },
    {
      name: 'Chats',
      info: 'Tema, fondos de pantalla, historial de chat',
      icon: 'chatbox-outline'
    },
    {
      name: 'Notificaciones',
      info: 'Tonos de mensajes, grupos y llamadas',
      icon: 'notifications-outline'
    },
    {
      name: 'Almacenamiento y datos',
      info: 'Uso de red, descarga automática',
      icon: 'cloud-outline'
    },
    {
      name: 'Idioma de la aplicación',
      info: 'Español (idioma del dispositivo)',
      icon: 'globe-outline'
    },
    {
      name: 'Ayuda',
      info: 'Centro de ayuda, contáctanos, política de privacidad',
      icon: 'help-circle-outline'
    },
    {
      name: 'Invitar amigos',
      info: '',
      icon: 'people-circle-outline'
    },
    {
      name: 'Actualizaciones de la aplicación',
      info: '',
      icon: 'phone-portrait-outline'
    }
  ];
}
