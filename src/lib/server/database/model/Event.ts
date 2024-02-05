import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventId: {
    type: Number,
    required: true,
  },
  venue: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  contact: {
    s_coord: [
      {
        name: String,
        number: Number,
      },
    ],
    t_coord: [
      {
        name: String,
        number: Number,
      },
    ],
  },
  time: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  rules: Array<String>,
  cashPrize: Array<String>,
});

export const Event =
  mongoose.models.event || mongoose.model("event", eventSchema);
