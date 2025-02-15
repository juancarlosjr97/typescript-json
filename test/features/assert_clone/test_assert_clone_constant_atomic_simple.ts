import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_constant_atomic = _test_assert_clone(
    "constant atomic",
    ConstantAtomicSimple.generate,
    (input) => TSON.assertClone(input),
    ConstantAtomicSimple.SPOILERS,
);
