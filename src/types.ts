export interface Task {
  id: string;
  name: string;
  priority: Priority;
  status: Status;
}

export enum Priority {
  Low,
  Normal,
  Important,
}

export enum Status {
  Active = "ACTIVE",
  Completed = "COMPLETED",
}

export enum Filter {
  All = "ALL",
  Active = "ACTIVE",
  Completed = "COMPLETED",
}

export enum Sort {
  New = "new",
  Priority = "priority",
  Name = "name",
}

export type OrderArgs = "asc" | "desc";

export type SelectEvent = React.ChangeEvent<{
  name?: string | undefined;
  value: unknown;
}>;
