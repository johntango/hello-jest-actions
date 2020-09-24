const hello = require("./hello");

it("My hello", () => {
  expect(hello.hello()).toEqual("Hello World");
});
