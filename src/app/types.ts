export interface Question {
  q: string;
  r: string[];
  correct: string;
}

export interface User {
  name: string;
  email: string;
  password: string | null;
}

export interface Response {
  [key: number]: string;
}