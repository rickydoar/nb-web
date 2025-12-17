export interface Property {
  id: string;
  address: string;
  image: string;
  price?: string;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
  status: 'active' | 'sold';
  transactionType?: 'buyer' | 'seller';
  soldDate?: string;
}

export const properties: Property[] = [
  {
    id: '1',
    address: '112 Edgewood',
    image: '/images/112 Edgewood.jpg',
    status: 'sold',
    transactionType: 'seller',
  },
  {
    id: '2',
    address: '12 Oak Knoll',
    image: '/images/12 Oak Knoll.jpg',
    status: 'sold',
    transactionType: 'buyer',
  },
  {
    id: '3',
    address: '128 Walnut',
    image: '/images/128 Walnut.jpg',
    status: 'sold',
    transactionType: 'seller',
  },
  {
    id: '4',
    address: '2201 Lucas Valley',
    image: '/images/2201 Lucas valley.jpg',
    status: 'sold',
    transactionType: 'buyer',
  },
  {
    id: '5',
    address: '25 Wiltshire',
    image: '/images/25 Wiltshire.jpeg',
    status: 'sold',
    transactionType: 'seller',
  },
  {
    id: '6',
    address: '51 Walnut',
    image: '/images/51 Walnut.jpg',
    status: 'sold',
    transactionType: 'buyer',
  },
];

export const activeListings = properties.filter((p) => p.status === 'active');
export const pastTransactions = properties.filter((p) => p.status === 'sold');
