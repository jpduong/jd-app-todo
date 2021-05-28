import { render, screen } from "@testing-library/react";
import { App } from "components/App";

beforeEach(() => {
  render(<App />);
});

describe("App render", () => {
  it("component", () => {
    expect(screen.getByTitle("component-app")).toBeTruthy();
  });

  it("NewTask component", () => {
    expect(screen.getByTitle("component-newtask")).toBeTruthy();
  });

  it("TaskList component", () => {
    expect(screen.getByTitle("component-tasklist")).toBeTruthy();
  });

  it("FilterBar component", () => {
    expect(screen.getByTitle("component-filterbar")).toBeTruthy();
  });

  it("SortSelectInput components", () => {
    const res = screen.getAllByTitle("component-sortselectinput");

    expect(res.length).toBe(2);
  });
});
