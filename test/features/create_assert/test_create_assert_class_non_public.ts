import TSON from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_class_non_public = _test_assert(
    "non-public class member",
    ClassNonPublic.generate,
    TSON.createAssert<ClassNonPublic>(),
    ClassNonPublic.SPOILERS,
);
