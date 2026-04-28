import { symbol } from "#src/symbol.js";
import { symbol as relative } from "./symbol.js";
export function testFromWithin() {
    const result = relative === symbol;
    console.log("Symbol is " +
        (result ? "" : "*not* ") +
        "equal to itself when compared within the lib code");
}
export { symbol };
//# sourceMappingURL=index.js.map