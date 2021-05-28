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
    expect(screen.getByTitle("component-sortselectinput")).toBeTruthy();
  });
});

describe("SortSelectInput props", () => {
  it("value", () => {
    expect(screen.getByText(sortOptions[1].label)).toBeTruthy();
  });
});
