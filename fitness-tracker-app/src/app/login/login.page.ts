import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavController,AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service';

import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage implements OnInit {

  showPassword = false;
  loginForm: FormGroup ;

  //sample object
  loginData = {
    email: '',
    password: ''
  };

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  constructor(private fb: FormBuilder,private navctrl:NavController, private alertctrl:AlertController,private http: HttpClient,
  private storageService: StorageService) { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  
  async onLogin(){
   const { email, password } = this.loginForm.value;

  try {
    // Try Firebase Login
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const idToken = await user.getIdToken();

    // Send token to backend
    this.http.post<any>('http://localhost:3000/login', {
      email,
      idToken
    }).subscribe(async (response) => {
      await this.storageService.set('userId', response.userId);
      await this.storageService.set('username', response.firstName);
      this.navctrl.navigateForward('/welcome');
    });

  } catch (firebaseError) {
    console.warn("Firebase login failed, falling back to manual:", firebaseError);

    // Fall back to manual login (for MySQL-only users)
    this.http.post<any>('http://localhost:3000/login', {
      email,
      passwd: password
    }).subscribe(async (response) => {
      await this.storageService.set('userId', response.userId);
      await this.storageService.set('username', response.firstName);
      this.navctrl.navigateForward('/welcome');
    }, (err) => {
      console.error("Manual login failed:", err);
      alert(err.error?.message || "Login failed.");
    });
  }
  }

  async loginWithGoogle(){

    try {
      provider.setCustomParameters({
      prompt: 'select_account'  // 👈 Forces account chooser
    });
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const email = user.email;
    const name = user.displayName || '';
    const firstName = name.split(' ')[0];
    const lastName = name.split(' ')[1] || '';

    this.http.post<any>('http://localhost:3000/google-login', {
      email,
      firstName,
      lastName
    }).subscribe(async (response) => {
      await this.storageService.set('userId', response.userId);
      await this.storageService.set('username', response.firstName);
      this.navctrl.navigateForward('/welcome');
    });

  } catch (error) {
    console.error("Google login error:", error);
  }

  }
}
