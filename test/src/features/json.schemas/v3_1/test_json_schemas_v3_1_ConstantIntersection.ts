import typia from "typia";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ConstantIntersection = 
  _test_json_schemas({
    version: "3.1",
    name: "ConstantIntersection", 
  })(typia.json.schemas<[ConstantIntersection], "3.1">());