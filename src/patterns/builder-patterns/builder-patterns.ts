// builder class
class User {
  username: string;
  email: string;
  password: string;
  age?: number;

  constructor(builder: UserBuilder) {
    this.username = builder.username;
    this.email = builder.email;
    this.password = builder.password;
    this.age = builder.age;
  }
}

// Builder class
class UserBuilder {
  username: string = "";
  email: string = "";
  password: string = "";
  age?: number;

  setUsername(username: string): UserBuilder {
    this.username = username;
    return this;
  }

  setEmail(email: string): UserBuilder {
    this.email = email;
    return this;
  }

  setPassword(password: string): UserBuilder {
    this.password = password;
    return this;
  }

  setAge(age: number): UserBuilder {
    this.age = age;
    return this;
  }

  build(): User {
    return new User(this);
  }
}

// Validation utility class
class ValidationUtils {
  static validateUsername(username: string): boolean {
    // Add your validation logic here
    return username.length >= 3;
  }

  static validateEmail(email: string): boolean {
    // Add your validation logic here
    return /\S+@\S+\.\S+/.test(email);
  }

  static validatePassword(password: string): boolean {
    // Add your validation logic here
    return password.length >= 8;
  }

  static validateAge(age: number): boolean {
    // Add your validation logic here
    return age >= 18;
  }
}

// Example usage
const newUser = new UserBuilder()
  .setUsername("john_doe")
  .setEmail("john@example.com")
  .setPassword("password123")
  .setAge(25)
  .build();

// Validate user data
const isUsernameValid = ValidationUtils.validateUsername(newUser.username);
const isEmailValid = ValidationUtils.validateEmail(newUser.email);
const isPasswordValid = ValidationUtils.validatePassword(newUser.password);
const isAgeValid = newUser.age
  ? ValidationUtils.validateAge(newUser.age)
  : true;

// Display validation results
console.log("Username validation:", isUsernameValid);
console.log("Email validation:", isEmailValid);
console.log("Password validation:", isPasswordValid);
console.log("Age validation:", isAgeValid);

type TPizza = {
  size: string;
  cheese?: boolean;
  pepperoni?: boolean;
  bacon?: boolean;
  mushrooms?: boolean;
};

// Builder function
function createPizza(builder: (newPizza: TPizza) => void): TPizza {
  const newPizza: TPizza = { size: "medium" }; // default size
  builder(newPizza);
  return newPizza;
}

const pizzafb = createPizza((pizza) => {
  pizza.bacon = true;
  pizza.cheese = true;
  pizza.pepperoni = true;
  pizza.size = "large";
});
