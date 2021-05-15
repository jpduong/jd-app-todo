import { render, screen } from "@testing-library/react";
import { App } from "components/App";

beforeEach(() => {
  render(<App />);
});

describe("App render", () => {
  it("component", () => {
    screen.getByTitle("component-app");
  });

  it("NewTask component", () => {
    screen.getByTitle("component-newtask");
  });

  it("TaskList component", () => {
    screen.getByTitle("component-tasklist");
  });

  it("FilterBar component", () => {
    screen.getByTitle("component-filterbar");
  });

  it("SortSelectInput components", () => {
    const res = screen.getAllByTitle("component-sortselectinput");

    expect(res.length).toBe(2);
  });
});
