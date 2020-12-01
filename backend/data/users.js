import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Cena",
    email: "JohnCena@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Tripple H",
    email: "trippleH@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
