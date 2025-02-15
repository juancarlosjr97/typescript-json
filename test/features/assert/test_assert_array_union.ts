import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_array_union = _test_assert(
    "union array",
    ArrayUnion.generate,
    (input) => TSON.assert(input),
    ArrayUnion.SPOILERS,
);
