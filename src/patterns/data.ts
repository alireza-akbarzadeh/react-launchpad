interface Person {
  id: number;
  name: string;
  age: number;
  hairColor: string;
  hobbies: string[];
}

const peopleList: Person[] = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    hairColor: "Blonde",
    hobbies: ["Reading", "Painting", "Hiking"],
  },
  {
    id: 2,
    name: "Bob",
    age: 25,
    hairColor: "Brown",
    hobbies: ["Cooking", "Gaming", "Photography"],
  },
  {
    id: 3,
    name: "Charlie",
    age: 35,
    hairColor: "Black",
    hobbies: ["Traveling", "Playing Guitar", "Fishing"],
  },
];

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
}

const productList: Product[] = [
  {
    id: 1,
    name: "Smartphone",
    price: 599,
    description: "A powerful smartphone with advanced features.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Laptop",
    price: 999,
    description: "A high-performance laptop for work and entertainment.",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Headphones",
    price: 149,
    description: "Wireless headphones with noise-canceling technology.",
    rating: 4.3,
  },
];

interface NestedObject {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    array: { items: number }[];
  };
  interests: string[];
}

const deepObject: NestedObject = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Exampleville",
    postalCode: "12345",
    country: "Exampleland",
    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    },
    array: [{ items: 1 }],
  },
  interests: ["coding", "reading", "traveling"],
};

export type { Person, Product, NestedObject };
export { peopleList, productList, deepObject };
