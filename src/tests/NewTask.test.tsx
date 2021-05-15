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
    screen.getByTitle("component-newtask");
  });

  it("textfield", () => {
    screen.getByTitle("newtask-textfield");
  });

  it("selectfield", () => {
    screen.getByTitle("component-priorityselectfield");
  });

  it("submit button", () => {
    screen.getByTitle("newtask-submit-button");
  });

  it("error text does not render on initial", () => {
    expect(() => screen.getByTitle("newtask-error-text")).toThrow();
  });

  it("error text renders after invalid input", () => {
    const button = screen.getByTitle("newtask-submit-button");

    fireEvent.click(button!);
    screen.getByTitle("newtask-error-text");
  });
});
