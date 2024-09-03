

export type Question = {
    q: string;
    r: string[];
    correct: string;
  };

  export type User = {
    name: string;
    email: string;
    password: string | null;
  }