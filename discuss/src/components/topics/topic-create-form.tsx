"use client";

import * as actions from "@/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import FormButton from "../common/form-button";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action} className="flex flex-col p-4 gap-4 w-80">
          <h3 className="text-xl">Create a Topic</h3>
          <Input
            name="name"
            labelPlacement="outside"
            label="Name"
            placeholder="Name"
            isInvalid={!!formState.errors.name}
            errorMessage={formState.errors.name?.join(", ")}
          />
          <Textarea
            name="description"
            labelPlacement="outside"
            label="Description"
            placeholder="Describe your Topic"
            isInvalid={!!formState.errors.description}
            errorMessage={formState.errors.description?.join(", ")}
          />

          {formState.errors._form ? (
            <div className="p-2 bg-red-200 border border-red-400 rounded-md">
              {formState.errors._form?.join(", ")}
            </div>
          ) : null}

          <FormButton>Save</FormButton>
        </form>
      </PopoverContent>
    </Popover>
  );
}
