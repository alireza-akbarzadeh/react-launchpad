import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "components";
import { InputController } from "components/ui/form/input-controller";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Form } from "components/ui/form/form";
import { CheckboxController } from "components/ui/form/checkbox-controller";
import { useToast } from "components/ui/toast";

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
    confirmPassword: z
      .string()
      .min(8, { message: "The passwords did not match" }),
    agreement: z.boolean().default(false).optional(),
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

export const SignUp = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreement: false,
      isShowPass: false,
      isShowConfrimPass: false,
    },
  });
  const { toast } = useToast();
  function onSubmit(values: FormValues) {
    toast({
      title: "Scheduled: Catch up",

      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
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
                inputControll={{
                  control: form.control,
                  name: "username",
                  defaultValue: "adasdadasdas",
                }}
              />
              <InputController
                label="Email"
                description="you should enter your email here"
                inputControll={{
                  control: form.control,
                  name: "email",
                }}
              />

              <InputController
                label="Password"
                description="you should enter your password here"
                inputControll={{
                  control: form.control,
                  name: "password",
                }}
                inputProps={{
                  type: isShowPass ? "type" : "password",
                  placeholder: "Enter your password",
                  icon: {
                    name: isShowPass ? "EyeOff" : "Eye",
                    position: "end",
                    className: "cursor-pointer",
                    onIconCLick: () => {
                      form.setValue(
                        "isShowPass",
                        !form.getValues("isShowPass")
                      );
                    },
                  },
                }}
              />
              <InputController
                label="Confirm Password"
                description="you should enter your confirm password here"
                inputControll={{
                  control: form.control,
                  name: "confirmPassword",
                }}
                inputProps={{
                  type: isShowConfrimPass ? "type" : "password",
                  placeholder: "Enter your Confirm password",
                  icon: {
                    name: isShowConfrimPass ? "EyeOff" : "Eye",
                    position: "end",
                    className: "cursor-pointer",
                    onIconCLick: () => {
                      form.setValue(
                        "isShowConfrimPass",
                        !form.getValues("isShowConfrimPass")
                      );
                    },
                  },
                }}
              />
              <CheckboxController
                label="Agreement"
                itemClassName="rounded-md border p-4"
                checkboxControll={{
                  control: form.control,
                  name: "agreement",
                }}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
