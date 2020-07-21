import { StringSanitizer } from "../../common";

test("StringSanitizer", () => {
  // Test trimSpaces() function
  const testStrTrim1 = new StringSanitizer("  must be trimmed   ");
  expect(testStrTrim1.trimSpaces()).toBe("must be trimmed");
  const testStrTrim2 = new StringSanitizer("must not be trimmed");
  expect(testStrTrim2.trimSpaces()).toBe("must not be trimmed");

  // Test isEmptyOrSpaces() function
  const testStrEmpty = new StringSanitizer("");
  expect(testStrEmpty.isEmptyOrSpaces()).toBeTruthy();
  const testStrSpaces = new StringSanitizer("    ");
  expect(testStrSpaces.isEmptyOrSpaces()).toBeTruthy();
  const testStrNotEmptyOrSpaces = new StringSanitizer("EC433");
  expect(testStrNotEmptyOrSpaces.isEmptyOrSpaces()).toBeFalsy();

  // Test hasSpecialChars() function
  const testStrHasChars = new StringSanitizer("ed@assf$");
  expect(testStrHasChars.hasSpecialChars()).toBeTruthy();
  const testStrNotHasChars = new StringSanitizer("edassf");
  expect(testStrNotHasChars.hasSpecialChars()).toBeFalsy();
});
