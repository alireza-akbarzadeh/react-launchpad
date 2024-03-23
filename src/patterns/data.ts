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

export type { Person, Product };
export { peopleList, productList };
