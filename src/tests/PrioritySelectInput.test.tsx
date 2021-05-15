import { render, screen } from "@testing-library/react";
import { PrioritySelectInput } from "components/PrioritySelectInput";
import { Priority } from "types";
import { noOp } from "./utils";

const mockProps = {
  value: Priority.Important,
  onChange: noOp,
};

beforeEach(() => {
  render(<PrioritySelectInput {...mockProps} />);
});

describe("PrioritySelectInput render", () => {
  it("component", () => {
    screen.getByTitle("component-priorityselectfield");
  });
});

describe("PrioritySelectInput props", () => {
  it("value", () => {
    screen.getByText("Important");
  });
});
