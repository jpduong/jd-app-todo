export const generateUniqueId = () => Math.random().toString(36).substr(2, 5);

export const validateTextInput = (input: string) => !!input.trim();
