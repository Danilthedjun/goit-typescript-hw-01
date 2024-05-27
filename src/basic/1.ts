const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback: (a: unknown) => number = (a) => {
  if (typeof a === "number") {
    return 100 + a;
  } else {
    throw new Error("bruh");
  }
};
