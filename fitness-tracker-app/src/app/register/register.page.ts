import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonRouterOutlet, NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { HttpClient } from '@angular/common/http';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone:false
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  showPassword = false;
  agreePolicy = false;

  //sample object
  registerData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(private fb: FormBuilder, private navctrl:NavController, private storageService: StorageService, private routerOutlet:IonRouterOutlet, private http: HttpClient) { 
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      agreePolicy: [false, Validators.requiredTrue]
    });
  }

  ionViewWillLeave() {// to remove that aria error
  // Blur any focused elements before leaving the page
  const activeElement = document.activeElement as HTMLElement;
  if (activeElement) {
    activeElement.blur();
  }
}

   togglePassword() {
    this.showPassword = !this.showPassword;
  }

   async onRegister() {
  //   if (this.registerForm.invalid) {
  //   alert("Please fill in all fields and accept the policy.");
  //   return;
  // }
  // else{
  //   this.registerData.firstName = this.registerForm.value.firstName;
  //   this.registerData.lastName = this.registerForm.value.lastName;
  //   this.registerData.email = this.registerForm.value.email;
  //   this.registerData.password = this.registerForm.value.password;
    

  //  //to take teh 1st name and display it in the welcome page
  //  await this.storageService.set('username', this.registerData.firstName);

  // console.log('Registered:', this.registerForm.value);
  
  // this.navctrl.navigateForward('/moreinfo');
  //  }
  if (this.registerForm.invalid) {
    alert("Please fill in all fields and accept the policy.");
    return;
  }

  const { firstName, lastName, email, password } = this.registerForm.value;

  try {
    // 1. Firebase Register
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;
    const token = await firebaseUser.getIdToken();

    // 2. Save to local storage
    await this.storageService.set('username', firstName);

    // 3. Send to your backend for DB insert
    this.http.post('http://localhost:3000/register', {
      firstName,
      lastName,
      email,
      passwd: password,
    }).subscribe(() => {
      this.navctrl.navigateForward('/moreinfo');
    });

  } catch (error) {
    console.error('Firebase register error:', error);
    alert('Could not register. Try another email or check password policy.');
  }
  }

  
  

  // next(){
  //   this.navctrl.navigateForward('/moreinfo');
  // }
  ngOnInit() {
  }

}











//onRegister

// const payload = {
//   firstName: this.registerForm.value.firstName,
//   lastName: this.registerForm.value.lastName,
//   email: this.registerForm.value.email,
//   passwd: this.registerForm.value.password
// };

// this.http.post<any>('http://localhost:3000/register', payload).subscribe(
//   async (res) => {
//     await this.storageService.set('userId', res.userId);
//     await this.storageService.set('username', payload.firstName);

//     this.navctrl.navigateForward('/moreinfo');
//   },
//   (err) => {
//     alert(err.error?.message || "Registration failed.");
//   }
// );