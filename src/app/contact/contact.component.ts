import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  isSubmitted = false;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  onSubmit() {
    this.isSubmitting = true;
    
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Here you would typically send the data to your backend
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        
        // Reset form after successful submission
        setTimeout(() => {
          this.isSubmitted = false;
          this.contactForm.reset();
        }, 5000);
      }, 1500);
    } else {
      this.isSubmitting = false;
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
  
  get formControls() {
    return this.contactForm.controls;
  }
}
