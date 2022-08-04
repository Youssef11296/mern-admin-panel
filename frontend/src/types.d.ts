interface Action {
  type: string;
  payload?: any;
}

interface Movie {
  _id?: number | string;
  name: string;
  describtion: string;
  rate: number;
}

interface Category {
  _id?: number | string;
  name: string;
  describtion: string;
  movies?: Movie[];
}
