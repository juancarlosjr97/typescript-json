import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_dynamic_array = _test_assert_type(
    "dynamic array",
    DynamicArray.generate,
    TSON.createAssertType<DynamicArray>(),
    DynamicArray.SPOILERS,
);
