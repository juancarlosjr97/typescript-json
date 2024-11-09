import typia from "typia";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ObjectUnionImplicit = 
  _test_llm_schema({
    model: "3.0",
    name: "ObjectUnionImplicit",
  })(typia.llm.schema<ObjectUnionImplicit, "3.0">());