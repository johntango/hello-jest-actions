const hello = require("./hello");

it("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World");
  });
});
