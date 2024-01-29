"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import ImageUploader from "../ImageUploader";
import { Textarea } from "../ui/textarea";
import { EventBody } from "../../../typings";
import { updateFile } from "@/lib/server/actions/event";

const formSchema = z.object({
  eventName: z.string(),
  venue: z.string(),
  description: z.string(),
  time: z.string(),
});

interface Props {
  event?: EventBody;
  initialEvents: EventBody[];
}
const UpdateEventInfo = ({ event, initialEvents }: Props) => {
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState(event?.img);
  const [posterURL, setPosterURL] = useState(event?.poster);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: event?.eventName,
      venue: event?.venue,
      description: event?.description,
      time: event?.time,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      if (!event?.eventId) return;

      let flag = 0;

      const toChange = initialEvents[event?.eventId - 1];

      if (toChange.eventName !== values.eventName) {
        toChange.eventName = values.eventName;
        flag = 1;
      }

      if (toChange.venue !== values.venue) {
        toChange.venue = values.venue;
        flag = 1;
      }
      if (toChange.description !== values.description) {
        toChange.description = values.description;
        flag = 1;
      }
      if (toChange.time !== values.time) {
        toChange.time = values.time;
        flag = 1;
      }
      if (toChange.img !== imageURL) {
        toChange.img = imageURL || "";
        flag = 1;
      }
      
      if (toChange.poster !== posterURL) {
        toChange.poster = posterURL || "";
        flag = 1;
      }

      if (flag === 0) {
        setLoading(false);
        return;
      }
      initialEvents[event.eventId - 1] = toChange;
      await updateFile(initialEvents);
      //   await signIn(values.authKey);
      // alertCall("success", "Signed in successfully!");
      setLoading(false);
    } catch (error) {
      // alertCall("error", "Some error occurred!");
      setLoading(true);
    }
  }
  return (
    <Card className="max-w-fit mx-auto mb-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 p-10 rounded-lg w-[87vw] lg:w-[25vw]"
        >
          <FormField
            control={form.control}
            name="eventName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input placeholder="event name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="venue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Venue</FormLabel>
                <FormControl>
                  <Input placeholder="venue" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ImageUploader imageURL={imageURL} setImageURL={setImageURL} />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Input placeholder="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ImageUploader imageURL={posterURL} setImageURL={setPosterURL} />
          <Button disabled={loading} type="submit">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""}
            Update
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default UpdateEventInfo;
