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
    expect(screen.getByTitle("component-filterbar")).toBeTruthy();
  });

  it("total text", () => {
    expect(screen.getByTitle("filterbar-total-text")).toBeTruthy();
  });

  it("filter texts", () => {
    const res = screen.getAllByTitle("filterbar-option");

    expect(res.length).toBe(3);
  });
});

describe("FilterBar props", () => {
  it("total", () => {
    expect(screen.getByText("Total: 1")).toBeTruthy();
  });
});
