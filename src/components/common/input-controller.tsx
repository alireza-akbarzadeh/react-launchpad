import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import { Input } from "components/ui/input";
import { ReactNode } from "react";
import {
  Control,
  ControllerProps,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

interface InputControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  label: string;
  description?: string;
  formControll: Omit<ControllerProps<TFieldValues, TName>, "render">;
  //   render?: (field: ControllerRenderProps<FieldValues, TName>) => ReactNode;
}

export const InputController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: InputControllerProps<TFieldValues, TName>
) => {
  const { formControll, label, description, ...rest } = props;

  return (
    <FormField
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input placeholder="user name" {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
      {...formControll}
      {...rest}
    />
  );
};
