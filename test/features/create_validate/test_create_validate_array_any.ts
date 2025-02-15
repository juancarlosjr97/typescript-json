import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_validate } from "../validate/_test_validate";

export const test_create_validate_array_any = _test_validate(
    "any array",
    ArrayAny.generate,
    TSON.createValidate<ArrayAny>(),
    ArrayAny.SPOILERS,
);
