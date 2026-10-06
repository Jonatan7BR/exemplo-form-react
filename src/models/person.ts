export interface Person {
  id: number;
  name: string;
  cpf: string;
  birthday: string;
  email: string;
  phone: string;
  city: string;
  state: string;
}

export type PersonBody = Omit<Person, "id">;
