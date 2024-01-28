"use client";
import React, { useState } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { Loader2, Plus, X } from "lucide-react";
import { EventBody } from "../../../typings";
import { Button } from "../ui/button";
import eventData from "@/utility/data.json";
import { updateFile } from "@/lib/server/actions/event";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import AlertBox from "../AlertBox";
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

interface Props {
  event: EventBody;
  id: string;
}

const DragAndDropRules = ({ event, id }: Props) => {
  const [rules, setRules] = useState(event.rules);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;

    if (!destination) return;

    if (type === "rules") {
      if (source.index === destination.index) return;

      const sourceArr = rules;
      const [removed] = sourceArr.splice(source.index, 1);
      sourceArr.splice(destination.index, 0, removed);

      setRules([...sourceArr]);
    }
  };

  const handleDelete = (index: number) => {
    const sourceArr = rules;
    sourceArr?.splice(index, 1);
    setRules([...sourceArr]);
  };

  const handleCreate = (rule: string) => {
    const sourceArr = rules;
    sourceArr?.push(rule);
    setRules([...sourceArr]);
  };

  const onSubmit = async () => {
    const toChange = eventData[event.eventId - 1];
    toChange.rules = rules;
    eventData[event.eventId - 1] = toChange;
    await updateFile(eventData);
  };

  if (!rules) return <div></div>;
  return (
    <div className="flex-1 flex flex-col w-full">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={id} type="rules">
          {(provided) => (
            <div
              className="bg-white px-7 py-3 rounded-lg"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <h1 className="text-2xl">Rules</h1>
              {rules?.map((rule, i) => (
                <Draggable draggableId={rule} key={rule} index={i}>
                  {(provided) => (
                    <div
                      className="bg-red-300 my-3 py-3 px-4 rounded-xl shadow-lg"
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <Item handleDelete={handleDelete} rule={rule} index={i} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <div className="flex flex-col">
                <AddRuleComponent handleCreate={handleCreate} />
                <AlertBox handleSubmit={onSubmit} />
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

const Item = ({
  handleDelete,
  rule,
  index,
}: {
  handleDelete: (index: number) => void;
  rule?: string;
  index?: number;
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p>{rule}</p>
      </div>
      <X
        onClick={() => handleDelete(index!)}
        className="text-red-500 bg-green-300 rounded-full p-1 shadow-md"
      />
    </div>
  );
};

const formSchema = z.object({
  rule: z.string(),
});

const AddRuleComponent = ({
  handleCreate,
}: {
  handleCreate: (rule: string) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rule: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      handleCreate(values.rule);
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
                name="rule"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rule</FormLabel>
                    <FormControl>
                      <Textarea placeholder="rule" {...field} />
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

export default DragAndDropRules;
