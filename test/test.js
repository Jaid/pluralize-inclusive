import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: pluralizeInclusive} = indexModule

it("should run", () => {
  expect(pluralizeInclusive("Banana", 3)).toBe("3 Bananas")
  expect(pluralizeInclusive("Bananas", 1)).toBe("1 Banana")
  expect(pluralizeInclusive("Bananas")).toBe("undefined Bananas")
})