import { render, screen } from "@testing-library/react";
import { TaskList } from "components/TaskList";
import { noOp } from "./utils";

const mockProps = {
  tasks: [],
  onDeleteTask: noOp,
  onToggleStatus: noOp,
  onUpdateTaskProperty: noOp,
  children: <div></div>,
};

beforeEach(() => {
  render(<TaskList {...mockProps} />);
});

describe("TaskList render", () => {
  it("component", () => {
    screen.getByTitle("component-tasklist");
  });
});
