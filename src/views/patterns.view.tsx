import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "components";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import { Input } from "components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { InputController } from "components/common/input-controller";
import { render } from "react-dom";

type FormValues = z.infer<typeof formSchema>;

const formSchema = z
  .object({
    username: z.string().min(4, {
      message: "Username must be at least 4 characters.",
    }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string().min(8),
    isShowPass: z.boolean().optional(),
    isShowConfrimPass: z.boolean().optional(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });

function Pattern() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   username: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    //   isShowPass: false,
    //   isShowConfrimPass: false,
    // },
  });
  function onSubmit(values: FormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const isShowPass = form.watch("isShowPass");
  const isShowConfrimPass = form.watch("isShowConfrimPass");

  return (
    <div className="container mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <InputController
                label="Username"
                description="you should enter your username here"
                formControll={{
                  control: form.control,
                  name: "username",
                  defaultValue: "adasdadasdas",
                }}
              />
              <InputController
                label="Email"
                description="you should enter your email here"
                formControll={{
                  control: form.control,
                  name: "email",
                }}
              />
              <FormField
                control={form.control}
                name="password"
                defaultValue="313123123"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        icon={{
                          name: isShowPass ? "EyeOff" : "Eye",
                          position: "end",
                          className: "cursor-pointer",
                          onIconCLick: () => {
                            form.setValue(
                              "isShowPass",
                              !form.getValues("isShowPass")
                            );
                          },
                        }}
                        type={isShowPass ? "type" : "password"}
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      you should enter your password here
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        icon={{
                          name: isShowConfrimPass ? "EyeOff" : "Eye",
                          position: "end",
                          className: "cursor-pointer",
                          onIconCLick: () => {
                            form.setValue(
                              "isShowConfrimPass",
                              !form.getValues("isShowConfrimPass")
                            );
                          },
                        }}
                        type={isShowConfrimPass ? "type" : "password"}
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      you should enter your Confirm here
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Pattern;
