describe("Sandbox", () => {
  beforeAll(() => {
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on the sandbox", async () => {
    const title = await browser.getTitle();
    expect(title).toEqual("Sandbox");

    const header = await element(by.css("h1")).getText();
    expect(header).toEqual("Sandbox");
  });
});
