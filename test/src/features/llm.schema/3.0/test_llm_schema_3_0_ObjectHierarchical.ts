import typia from "typia";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ObjectHierarchical = 
  _test_llm_schema({
    model: "3.0",
    name: "ObjectHierarchical",
  })(typia.llm.schema<ObjectHierarchical, "3.0">());