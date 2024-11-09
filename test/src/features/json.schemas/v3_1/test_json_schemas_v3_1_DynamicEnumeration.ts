import typia from "typia";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_DynamicEnumeration = 
  _test_json_schemas({
    version: "3.1",
    name: "DynamicEnumeration", 
  })(typia.json.schemas<[DynamicEnumeration], "3.1">());