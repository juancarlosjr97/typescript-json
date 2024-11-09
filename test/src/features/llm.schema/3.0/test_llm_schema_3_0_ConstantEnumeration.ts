import typia from "typia";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ConstantEnumeration = 
  _test_llm_schema({
    model: "3.0",
    name: "ConstantEnumeration",
  })(typia.llm.schema<ConstantEnumeration, "3.0">());