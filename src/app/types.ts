

// export type Question = {
//   q: string;
//   r: string[];
//   correct: string;
// };

export interface Question {
  q: string;
  r: string[];
  correct: string;
}

// export type User = {
//   name: string;
//   email: string;
//   password: string | null;
// }

export interface User {
  name: string;
  email: string;
  password: string | null;
}

// export type Response = {
//   [key: number]: string;
// }

export interface Response {
  [key: number]: string;
}