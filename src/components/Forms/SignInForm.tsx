"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { Card } from "../ui/card";
import { Loader2 } from "lucide-react";
import { signIn } from "@/lib/server/actions/auth";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  authKey: z.string(),
});

const SignInForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      authKey: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      await signIn(values.authKey);
      router.push("/admin");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <Card>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 p-10 rounded-lg w-[87vw] lg:w-[25vw]"
        >
          <FormField
            control={form.control}
            name="authKey"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Auth Key</FormLabel>
                <FormControl>
                  <Input placeholder="Key" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} type="submit">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""}
            SignIn
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default SignInForm;
