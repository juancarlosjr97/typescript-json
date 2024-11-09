import typia from "typia";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ConstantAtomicUnion = 
  _test_json_schemas({
    version: "3.0",
    name: "ConstantAtomicUnion", 
  })(typia.json.schemas<[ConstantAtomicUnion], "3.0">());