import { Component, OnDestroy, OnInit, resolveForwardRef } from '@angular/core';
import { FormArray, FormControl, FormControlStatus, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myLoginForm: FormGroup | any;
  constructor() { }

  ngOnInit(): void {
    this.myLoginForm = new FormGroup({
      'username' : new FormControl(null),
      'password' : new FormControl(null),
    });
  }
}
