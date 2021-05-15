import { Task, Priority, Status } from "types";
import { generateRandomId } from "utils";

export const mockData: Task[] = [
  {
    name: "check out Wes Bos",
    priority: Priority.Important,
    id: generateRandomId(),
    status: Status.Active,
  },
  {
    name: "ace the coding challenge",
    priority: Priority.Low,
    id: generateRandomId(),
    status: Status.Completed,
  },
  {
    name: "eat",
    priority: Priority.Important,
    id: generateRandomId(),
    status: Status.Completed,
  },
];
