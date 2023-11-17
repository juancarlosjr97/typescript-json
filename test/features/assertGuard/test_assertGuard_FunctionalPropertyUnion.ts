import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_assertGuard_FunctionalPropertyUnion = _test_assertGuard(
    "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(FunctionalPropertyUnion)((input) =>
    typia.assertGuard<FunctionalPropertyUnion>(input),
);
