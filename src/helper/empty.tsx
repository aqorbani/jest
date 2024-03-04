export const utils = {
  isEmpty(value: string | undefined | null) {
    return typeof value === "string" && !value.trim().length;
  },
};
