export type IContacts = IContact[];

export interface IContact {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface IGeo {
  lat: number;
  lng: number;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
