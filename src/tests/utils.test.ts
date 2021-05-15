import { generateUniqueId, validateTextInput } from "utils";

const generateTwentyIds = () => [...Array(20)].map(() => generateUniqueId());

describe("generateUniqueId", () => {
  let uniqueIds: string[];

  beforeEach(() => {
    uniqueIds = generateTwentyIds();
  });
  test("ids are unique", () => {
    const hasDuplicates = new Set(uniqueIds).size !== uniqueIds.length;
    expect(hasDuplicates).toBe(false);
  });

  test("id is of string type", () => {
    uniqueIds.forEach((id) => expect(typeof id === "string").toBe(true));
  });

  test("id to be defined", () => {
    uniqueIds.forEach((id) => expect(id).toBeDefined());
  });
});

describe("validateTextInput", () => {
  test("returns false for empty string", () => {
    expect(validateTextInput("")).toBe(false);
  });

  test("returns false for string with white space", () => {
    expect(validateTextInput("         ")).toBe(false);
  });
});
