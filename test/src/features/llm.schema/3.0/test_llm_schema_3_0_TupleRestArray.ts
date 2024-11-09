import typia from "typia";
import { TupleRestArray } from "../../../structures/TupleRestArray";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_TupleRestArray = 
  _test_llm_schema({
    model: "3.0",
    name: "TupleRestArray",
  })(typia.llm.schema<TupleRestArray, "3.0">());