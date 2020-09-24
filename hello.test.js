const hello = require("./hello");

describe("My hello", () => {
  expect(hello.hello()).toEqual("Hello World");
});
