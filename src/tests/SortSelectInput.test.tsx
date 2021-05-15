import { render, screen } from "@testing-library/react";
import { sortOptions, SortSelectInput } from "components/SortSelectInput";
import { noOp } from "./utils";

const mockProps = {
  value: sortOptions[1].value,
  onChange: noOp,
};

beforeEach(() => {
  render(<SortSelectInput {...mockProps} />);
});

describe("SortSelectInput render", () => {
  it("component", () => {
    screen.getByTitle("component-sortselectinput");
  });
});

describe("SortSelectInput props", () => {
  it("value", () => {
    screen.getByText(sortOptions[1].label);
  });
});
