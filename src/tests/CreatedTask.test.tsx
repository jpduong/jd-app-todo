import { render, screen } from "@testing-library/react";
import { CreatedTask } from "components/CreatedTask";
import { Priority, Status } from "types";
import { noOp } from "./utils";

const mockProps = {
  onDeleteTask: noOp,
  onToggleStatus: noOp,
  onUpdateTaskProperty: noOp,
  name: "mock_name",
  id: "iajrthdiltuarbrearara",
  priority: Priority.Important,
  status: Status.Completed,
};

beforeEach(() => {
  render(<CreatedTask {...mockProps} />);
});

describe("CreatedTask render", () => {
  it("component", () => {
    screen.getByTitle("component-createdtask");
  });

  it("toggle button", () => {
    screen.getByTitle("createdtask-toggle-button");
  });

  it("textfield", () => {
    screen.getByTitle("createdtask-textfield");
  });

  it("selectfield", () => {
    screen.getByTitle("component-priorityselectfield");
  });

  it("submit button", () => {
    screen.getByTitle("createdtask-submit-button");
  });
});

describe("CreatedTask props", () => {
  it("name", () => {
    screen.getByText(mockProps.name);
  });

  it("priority", () => {
    screen.getByText("Important");
  });

  it("status", () => {
    screen.getByTitle("created-task-active-icon");
  });
});
