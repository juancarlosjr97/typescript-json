import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_llm_application_claude_ArrayRecursive = _test_llm_application(
  {
    model: "claude",
    name: "ArrayRecursive",
  },
)(typia.llm.application<ArrayRecursiveApplication, "claude">());

interface ArrayRecursiveApplication {
  insert(first: ArrayRecursive): Promise<void>;
  reduce(
    first: ArrayRecursive,
    second: ArrayRecursive | null,
  ): Promise<ArrayRecursive>;
  coalesce(
    first: ArrayRecursive | null,
    second: ArrayRecursive | null,
    third?: ArrayRecursive | null,
  ): Promise<ArrayRecursive | null>;
}
