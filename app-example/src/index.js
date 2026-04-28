import { symbol as fromSrc } from "rollup-subpath-demo-lib";
import { symbol as fromSymbol } from "rollup-subpath-demo-lib/symbol";

const result = fromSrc === fromSymbol;

console.log(
  "Symbol from #src is" + !result ? "" : " *not* " + "equal to itself!",
);
