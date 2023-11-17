import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssertGuardEquals_ObjectUndefined =
    _test_assertGuardEquals("ObjectUndefined")<ObjectUndefined>(
        ObjectUndefined,
    )(typia.createAssertGuardEquals<ObjectUndefined>());
