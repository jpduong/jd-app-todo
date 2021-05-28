import { fireEvent, render, screen } from "@testing-library/react";
import { NewTask } from "components/NewTask";
import { noOp } from "./utils";

const mockProps = {
  onAddTask: noOp,
};

beforeEach(() => {
  render(<NewTask {...mockProps} />);
});

describe("NewTask render", () => {
  it("component", () => {
    expect(screen.getByTitle("component-newtask")).toBeTruthy();
  });

  it("textfield", () => {
    expect(screen.getByTitle("newtask-textfield")).toBeTruthy();
  });

  it("selectfield", () => {
    expect(screen.getByTitle("component-priorityselectfield")).toBeTruthy();
  });

  it("submit button", () => {
    expect(screen.getByTitle("newtask-submit-button")).toBeTruthy();
  });

  it("error text does not render on initial", () => {
    expect(() => screen.getByTitle("newtask-error-text")).toThrow();
  });

  it("error text renders after invalid input", () => {
    const button = screen.getByTitle("newtask-submit-button");

    fireEvent.click(button!);
    expect(screen.getByTitle("newtask-error-text")).toBeTruthy();
  });
});
