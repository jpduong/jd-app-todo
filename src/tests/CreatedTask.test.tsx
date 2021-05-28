import { render, screen } from "@testing-library/react";
import { CreatedTask } from "components/CreatedTask";
import { Priority, Status } from "types";
import { generateUniqueId } from "utils";
import { noOp } from "./utils";

const mockProps = {
  onDeleteTask: noOp,
  onToggleStatus: noOp,
  onUpdateTaskProperty: noOp,
  name: "mock_name",
  id: generateUniqueId(),
  priority: Priority.Important,
  status: Status.Completed,
};

beforeEach(() => {
  render(<CreatedTask {...mockProps} />);
});

describe("CreatedTask render", () => {
  it("component", () => {
    expect(screen.getByTitle("component-createdtask")).toBeTruthy();
  });

  it("toggle button", () => {
    expect(screen.getByTitle("createdtask-toggle-button")).toBeTruthy();
  });

  it("textfield", () => {
    expect(screen.getByTitle("createdtask-textfield")).toBeTruthy();
  });

  it("selectfield", () => {
    expect(screen.getByTitle("component-priorityselectfield")).toBeTruthy();
  });

  it("submit button", () => {
    expect(screen.getByTitle("createdtask-submit-button")).toBeTruthy();
  });
});

describe("CreatedTask props", () => {
  it("name", () => {
    expect(screen.getByText(mockProps.name)).toBeTruthy();
  });

  it("priority", () => {
    expect(screen.getByText("Important")).toBeTruthy();
  });

  it("status", () => {
    expect(screen.getByTitle("created-task-active-icon")).toBeTruthy();
  });
});
