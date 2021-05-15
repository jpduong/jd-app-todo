import { render, screen } from "@testing-library/react";
import { FilterBar } from "components/FilterBar";
import { Filter } from "types";
import { noOp } from "./utils";

const mockProps = {
  total: 1,
  filter: Filter.All,
  onFilter: noOp,
};

beforeEach(() => {
  render(<FilterBar {...mockProps} />);
});

describe("FilterBar render", () => {
  it("component", () => {
    screen.getByTitle("component-filterbar");
  });

  it("total text", () => {
    screen.getByTitle("filterbar-total-text");
  });

  it("filter texts", () => {
    const res = screen.getAllByTitle("filterbar-option");

    expect(res.length).toBe(3);
  });
});

describe("FilterBar props", () => {
  it("total", () => {
    screen.getByText("Total: 1");
  });
});
