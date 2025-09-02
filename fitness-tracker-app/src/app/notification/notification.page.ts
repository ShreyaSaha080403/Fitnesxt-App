import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  standalone:false
})
export class NotificationPage implements OnInit {

  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }
  
  notifications = [
    {
      icon: 'assets/images/not1.svg',
      title: "Hey, it’s time for lunch",
      time: "About 1 minutes ago"
    },
    {
      icon: 'assets/images/not2.svg',
      title: "Don’t miss your lowerbody workout",
      time: "About 3 hours ago"
    },
    {
      icon: 'assets/images/not3.svg',
      title: "Hey, let’s add some meals for your b...",
      time: "About 3 hours ago"
    },
    {
      icon: 'assets/images/not4.svg',
      title: "Congratulations, You have finished A...",
      time: "29 May"
    },
    
  ];


  goDash(){
     this.navctrl.navigateRoot('/tabs/dashboard');
  }
}
