import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'addressBook';
  constructor (private fb: FormBuilder,
               private bookService: BookService) {}

bookForm = this.fb.group({
      name: ['',  Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required]
      }),
      education: this.fb.group({
        qualification: ['', Validators.required],
        university: ['', Validators.required],
        college: ['', Validators.required],
        mark: ['', Validators.required]
      })
    });


    onSubmit() {
      this.bookService.addUser(this.bookForm.value).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    }
}
