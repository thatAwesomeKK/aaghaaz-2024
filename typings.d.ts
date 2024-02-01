export type EventBody = {
  eventName: string;
  eventId: number;
  venue: string;
  date: string;
  cashPrize?: string[];
  img: string;
  description: string;
  rLink: string;
  contact: {
    s_coord: {
      name: string;
      number?: number;
    }[];
    t_coord: {
      name: string;
      number?: number;
    }[];
  };
  time: string;
  poster: string;
  rules: string[];
};

type Coordinator = {
  s_coord: {
    name: string;
    number?: number;
  }[];
  t_coord: {
    name: string;
    number?: number;
  }[];
};
