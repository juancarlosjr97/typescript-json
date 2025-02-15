import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assert } from "./_test_assert";

export const test_assert_object_generic_alias = _test_assert(
    "generic aliased object",
    ObjectGenericAlias.generate,
    (input) => TSON.assert(input),
    ObjectGenericAlias.SPOILERS,
);
