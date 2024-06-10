import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);
  // in der app.config.ts http-cliente hinzugefügt
  sendWasTouched = false;
  privacyPolicyChecked = false;

  inputData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = true;

  post = {
    endPoint: 'https://sophia-brouwers.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.inputData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  togglePrivacyPolicy() {
    if (this.privacyPolicyChecked) {
      this.privacyPolicyChecked = false;
    } else {
      this.privacyPolicyChecked = true;
    }
  }

  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.valid && ngForm.submitted) {
  //     console.log(this.inputData);
  //   }
  // }
}

// if (!message.valid && message.touched) {
//   <span>Please enter a message</span>
//   }

// @if (!message.valid && ) {
//   <!-- @if (!message.valid && message.touched && !message.disabled) { -->
//   <span>Please enter a message</span>
//   }
