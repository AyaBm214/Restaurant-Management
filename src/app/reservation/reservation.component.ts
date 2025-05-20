import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  reservationForm!: FormGroup;
  isSubmitted = false;
  timeSlots = [
    '11:30', '12:00', '12:30', '13:00', '13:30', 
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];
  guestNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      guests: ['2', Validators.required],
      occasion: [''],
      specialRequests: ['']
    });
    
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.reservationForm.patchValue({
      date: this.formatDate(tomorrow)
    });
  }
  
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  onSubmit() {
    this.isSubmitted = true;
    
    if (this.reservationForm.valid) {
      console.log('Form submitted:', this.reservationForm.value);
      // Here you would typically send the data to your backend
      
      // Reset form after successful submission
      setTimeout(() => {
        this.isSubmitted = false;
        this.reservationForm.reset();
        
        // Reset default values
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.reservationForm.patchValue({
          date: this.formatDate(tomorrow),
          guests: '2'
        });
      }, 3000);
    }
  }
  
  get formControls() {
    return this.reservationForm.controls;
  }
}
