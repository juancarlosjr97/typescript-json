import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_dynamic_tree = _test_assert_type(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.assertType(input),
    DynamicTree.SPOILERS,
);
