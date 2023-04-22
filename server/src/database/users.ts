import { faker } from '@faker-js/faker'

export interface Socials {
  postsCount: string
  followersCount: string
  followingCount: string
}

export interface StreetAddress {
  address: string
  name: string
}

export interface Location {
  city: string
  country: string
  streetAddress: StreetAddress
  zipCode: string
  timeZone: string
}

export interface Wallet {
  bitcoin: string
  ethereum: string
  litecoin: string
}

export interface Person {
  id: string
  avatar: string
  email: string
  bio: string
  firstName: string
  lastName: string
  location: Location
  wallets: Wallet[]
  socials: Socials
}

export function generatePeople(n = 50) {
  function generateWallet(): Wallet {
    return {
      bitcoin: faker.finance.bitcoinAddress(),
      litecoin: faker.finance.litecoinAddress(),
      ethereum: faker.finance.ethereumAddress(),
    }
  }

  function generateStreetAddress(): StreetAddress {
    return {
      address: faker.address.streetAddress(true),
      name: faker.address.street(),
    }
  }

  function generateSocials(): Socials {
    return {
      postsCount: faker.random.numeric(5),
      followersCount: faker.random.numeric(5),
      followingCount: faker.random.numeric(5),
    }
  }

  function generateLocation(): Location {
    return {
      city: faker.address.city(),
      country: faker.address.country(),
      streetAddress: generateStreetAddress(),
      zipCode: faker.address.zipCode(),
      timeZone: faker.address.timeZone(),
    }
  }

  function generatePerson(): Person {
    return {
      id: faker.database.mongodbObjectId(),
      email: faker.internet.email(),
      bio: faker.lorem.sentence(5),
      avatar: faker.image.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      location: generateLocation(),
      socials: generateSocials(),
      // eslint-disable-next-line
      wallets: Array.from(Array(3).keys()).map(_ => generateWallet()),
    }
  }

  // eslint-disable-next-line
  return Array.from(Array(n).keys()).map(_ => generatePerson())
}
