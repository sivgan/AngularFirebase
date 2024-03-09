import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  bookForm: FormGroup;
  myBooks = [];


  constructor() {}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      'bookid': new FormControl(null),
      'bookname': new FormControl(null),
      'author': new FormControl(null)
    });
  }

   onPushBook() {
    const bid = this.bookForm.get('bookid').value;
    const bname = this.bookForm.get('bookname').value;
    const auth = this.bookForm.get('author').value;

    this.myBooks.push({
      bookid: bid,
      bookname: bname,
      author: auth
    })
    // console.log("mybooks = ", this.myBooks)
   }

}

      