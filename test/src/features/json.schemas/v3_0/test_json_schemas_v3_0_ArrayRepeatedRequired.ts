import typia from "typia";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ArrayRepeatedRequired = 
  _test_json_schemas({
    version: "3.0",
    name: "ArrayRepeatedRequired", 
  })(typia.json.schemas<[ArrayRepeatedRequired], "3.0">());