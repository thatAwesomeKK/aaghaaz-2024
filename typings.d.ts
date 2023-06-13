export type EventBody = {
  eventName: string;
  eventId: number;
  venue: string;
  date: string;
  superr: string;
  img: string;
  description: string;
  rLink: string;
  contact: {
    s_coord: {
      name: string;
      number: number;
    }[];
    t_coord: string[];
  };
  time: string;
  poster: string;
  rules: string[];
};

type StudentCoordinator = {
  name: string;
  number: number;
};
