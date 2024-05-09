import * as actions from "@/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";

export default function TopicCreateForm() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form
          action={actions.createTopic}
          className="flex flex-col p-4 gap-4 w-80"
        >
          <h3 className="text-xl">Create a Topic</h3>
          <Input
            name="name"
            labelPlacement="outside"
            label="Name"
            placeholder="Name"
          />
          <Textarea
            name="description"
            labelPlacement="outside"
            label="Description"
            placeholder="Describe your Topic"
          />
          <Button type="submit">Submit</Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
