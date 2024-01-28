export interface UserLoginPayload {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  address: {
    zipcode: number;
    detail: string;
    county: string;
    city: string;
  };
  _id: string;
  name: string;
  email: string;
  phone: string;
  birthday: Date;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}
