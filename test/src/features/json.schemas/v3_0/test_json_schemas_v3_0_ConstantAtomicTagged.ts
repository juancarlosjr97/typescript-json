import typia from "typia";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ConstantAtomicTagged = 
  _test_json_schemas({
    version: "3.0",
    name: "ConstantAtomicTagged", 
  })(typia.json.schemas<[ConstantAtomicTagged], "3.0">());