"use client";
import React, { useState } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { Coordinator, EventBody } from "../../../typings";
import { Loader2, Plus, X } from "lucide-react";
import { updateFile } from "@/lib/server/actions/event";
import { Button } from "../ui/button";
import AlertBox from "../AlertBox";

interface Props {
  event: EventBody;
  id: string;
  typeName: string;
  name?: string;
  initialEvents: EventBody[];
}

const DragAndDrop = ({ event, id, typeName, name, initialEvents }: Props) => {
  const [loading, setLoading] = useState(false);

  const [coords, setCoords] = useState(
    event?.contact[typeName as keyof Coordinator]
  );

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;

    if (!destination) return;

    if (type === "s_coord" || type === "t_coord") {
      if (source.index === destination.index) return;

      const sourceArr = coords;
      const [removed] = sourceArr?.splice(source.index, 1);
      sourceArr.splice(destination.index, 0, removed);

      setCoords([...sourceArr]);
    }
  };

  const handleCreate = (coord_info: { name: string; number?: number }) => {
    const sourceArr = coords;
    sourceArr?.push(coord_info);
    setCoords([...sourceArr]);
  };

  const handleDelete = (c_name: string) => {
    const sourceArr = coords;
    const index = sourceArr.findIndex((coord) => coord.name === c_name);
    sourceArr?.splice(index, 1);
    setCoords([...sourceArr]);
  };

  const onSubmit = async () => {
    setLoading(true);
    // const toChange = initialEvents[event.eventId - 1];
    // toChange.contact[typeName as keyof Coordinator] = coords;
    // initialEvents[event.eventId - 1] = toChange;
    await updateFile(coords, event.eventId, typeName);
    setLoading(false);
  };

  return (
    <>
      <div className="flex-1 flex flex-col w-full">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId={id} type={typeName}>
            {(provided) => (
              <div
                className="bg-white px-7 py-3 rounded-lg h-full"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h1 className="text-2xl">{name}</h1>
                {coords.map((coord, i) => (
                  <Draggable draggableId={i.toString()} key={i} index={i}>
                    {(provided) => (
                      <div
                        className="bg-red-300 my-3 py-3 px-4 rounded-xl shadow-lg"
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <Item
                          handleDelete={handleDelete}
                          name={coord.name}
                          number={coord.number}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <div className="flex flex-col">
                  <AddCoordComponent handleCreate={handleCreate} />
                  <AlertBox handleSubmit={onSubmit} loading={loading} />
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};

const Item = ({
  handleDelete,
  name,
  number,
}: {
  handleDelete: (name: string) => void;
  name?: string;
  number?: number;
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1>{name}</h1>
        <p>{number}</p>
      </div>
      <X
        onClick={() => handleDelete(name!)}
        className="text-red-500 bg-green-300 rounded-full p-1 shadow-md"
      />
    </div>
  );
};

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";

const formSchema = z.object({
  name: z.string(),
  number: z.string(),
});

const AddCoordComponent = ({
  handleCreate,
}: {
  handleCreate: (coord_info: { name: string; number?: number }) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      number: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      if (values.number === "") handleCreate({ name: values.name });
      else handleCreate({ name: values.name, number: parseInt(values.number) });
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="flex justify-end">
        <Plus className="text-red-500 bg-green-300 rounded-full p-1 shadow-md" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add The Details</DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 p-10 rounded-lg w-[87vw] lg:w-[25vw]"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number</FormLabel>
                    <FormControl>
                      <Input placeholder="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogClose asChild>
                <Button disabled={loading} type="submit">
                  {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    ""
                  )}
                  Add
                </Button>
              </DialogClose>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DragAndDrop;
