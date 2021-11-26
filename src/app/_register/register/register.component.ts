import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/interfaces/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register!: Register;
  constructor() { }

  ngOnInit(): void {
  }

}
