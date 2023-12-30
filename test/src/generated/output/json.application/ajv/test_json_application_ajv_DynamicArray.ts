import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicArray } from "../../../../structures/DynamicArray";

export const test_json_application_ajv_DynamicArray = _test_json_application(
  "ajv",
)("DynamicArray")({
  schemas: [
    {
      $ref: "#/components/schemas/DynamicArray",
    },
  ],
  components: {
    schemas: {
      DynamicArray: {
        $id: "#/components/schemas/DynamicArray",
        type: "object",
        properties: {
          value: {
            type: "object",
            properties: {},
            "x-typia-jsDocTags": [],
            additionalProperties: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "string",
              },
            },
          },
        },
        required: ["value"],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "ajv",
});
