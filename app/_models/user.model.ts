export interface User {
  userName: string;
  token: string;
  role: string | null; //  role can be either a string or null -> in this case NO admin
  lastName: string;
  firstName: string;
  _id: string;
}
