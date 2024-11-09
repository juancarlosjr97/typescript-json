import typia from "typia";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ArrayAtomicSimple = 
  _test_json_schemas({
    version: "3.1",
    name: "ArrayAtomicSimple", 
  })(typia.json.schemas<[ArrayAtomicSimple], "3.1">());