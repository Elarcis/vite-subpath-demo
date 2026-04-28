import { symbol as fromSrc, testFromWithin } from "vite-subpath-demo-lib";
import { symbol as fromSymbol } from "vite-subpath-demo-lib/symbol";

const result = fromSrc === fromSymbol;

console.log(
  "Symbol is " +
    (result ? "" : "*not* ") +
    "equal to itself when compared outside the lib code",
);

testFromWithin(fromSrc);
