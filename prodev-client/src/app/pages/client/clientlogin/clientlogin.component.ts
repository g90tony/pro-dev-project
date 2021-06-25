import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientlogin',
  templateUrl: './clientlogin.component.html',
  styleUrls: ['./clientlogin.component.css'],
})
export class ClientloginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  client_sign_in = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {}
}
