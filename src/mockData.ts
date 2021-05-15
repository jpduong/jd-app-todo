import { Task, Priority, Status } from "types";
import { generateUniqueId } from "utils";

export const mockData: Task[] = [
  {
    name: "check out Wes Bos",
    priority: Priority.Low,
    id: generateUniqueId(),
    status: Status.Active,
  },
  {
    name: "ace the coding challenge",
    priority: Priority.Important,
    id: generateUniqueId(),
    status: Status.Completed,
  },
  {
    name: "eat",
    priority: Priority.Normal,
    id: generateUniqueId(),
    status: Status.Completed,
  },
];
