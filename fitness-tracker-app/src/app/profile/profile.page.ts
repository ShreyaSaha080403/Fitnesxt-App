import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config'; 
import { StorageService } from '../services/storage.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone:false
})

export class ProfilePage implements OnInit {

   name: string = 'Shreya Saha';
  height: number = 180; // in cm
  weight: number = 75;  // in kg
  age: number = 22;
  popupNotification: boolean = true;

  constructor(private navctrl:NavController, private storageService: StorageService, private alertController: AlertController) { }
   //popupNotification: boolean = true;
  ngOnInit() {
  }
  accountItems = [
  { icon: 'assets/images/Icon-Profile.svg', label: 'Personal Data' },
  { icon: 'assets/images/Icon-Achievement.svg', label: 'Achievement' },
  { icon: 'assets/images/Icon-Activity.svg', label: 'Activity History' },
  { icon: 'assets/images/Icon-Workout.svg', label: 'Workout Progress' },
];

async logout(){
   const alert = await this.alertController.create({
    header: 'Logout',
    message: 'Are you sure you want to log out?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Logout',
        handler: async () => {
          try {
            await signOut(auth); // Firebase logout
            await this.storageService.clear(); // Clear storage
            this.navctrl.navigateRoot('login'); // Redirect to login
          } catch (error) {
            console.error('Logout error:', error);
          }
        }
      }
    ]
  });

  await alert.present();
}

}
