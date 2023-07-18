import { Component, OnInit } from '@angular/core';
import { IContacts } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css'],
})
export class ContactTableComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.onGetContacts();
  }
  myContacts!: IContacts;

  onGetContacts() {
    this.contactService
      .getContact()
      .subscribe((contacts: any) => (this.myContacts = contacts));
  }

  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'address',
    'phone',
    'website',
    'company',
  ];
  dataSource = this.myContacts;
}
