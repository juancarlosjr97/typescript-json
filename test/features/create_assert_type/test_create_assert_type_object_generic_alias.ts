import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_object_generic_alias = _test_assert_type(
    "generic aliased object",
    ObjectGenericAlias.generate,
    TSON.createAssertType<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
