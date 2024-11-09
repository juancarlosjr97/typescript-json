import typia from "typia";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ClassMethod = 
  _test_json_schemas({
    version: "3.1",
    name: "ClassMethod", 
  })(typia.json.schemas<[ClassMethod], "3.1">());