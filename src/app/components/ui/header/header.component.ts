import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {

  reservationForm: FormGroup;
    
  
  constructor() {
    this.reservationForm = new FormGroup({});
   }

  ngOnInit(): void {
    this.reservationForm = new FormGroup({
      nom: new FormControl(''),
      email: new FormControl(''),
      dateArrivee: new FormControl(''),
      dateDepart: new FormControl(''),
      nombrePersonnes: new FormControl(''),
    });
  
  }

  onSubmit(): void {
    // Envoyer les données du formulaire à votre API ou service de traitement
    console.log(this.reservationForm.value);
  }
}