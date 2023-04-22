export interface Socials {
  postsCount: string;
  followersCount: string;
  followingCount: string;
}

export interface StreetAddress {
  address: string;
  name: string;
}

export interface Location {
  city: string;
  country: string;
  streetAddress: StreetAddress;
  zipCode: string;
  timeZone: string;
}

export interface Wallet {
  bitcoin: string;
  ethereum: string;
  litecoin: string;
}

export interface Person {
  id: string;
  avatar: string;
  email: string;
  bio: string;
  firstName: string;
  lastName: string;
  location: Location;
  wallets: Wallet[];
  socials: Socials;
}
