import TSON from "../../../../src";
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_template_union = _test_application_ajv(
    "pattern tag",
    TSON.application<[TemplateUnion], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "components#/schemas/TemplateUnion.Type",
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "TemplateUnion.Type": {
                    $id: "components#/schemas/TemplateUnion.Type",
                    type: "object",
                    properties: {
                        prefix: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                            pattern:
                                "^((prefix_(.*))|(prefix_-?\\d+\\.?\\d*))$",
                        },
                        postfix: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                            pattern:
                                "(((.*)_postfix)|(-?\\d+\\.?\\d*_postfix))$",
                        },
                        middle: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                            pattern:
                                "^(the_false_value|the_true_value|(the_-?\\d+\\.?\\d*_value))$",
                        },
                        mixed: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-required": true,
                                    pattern:
                                        "^(the_A_value|the_B_value|-?\\d+\\.?\\d*|true|false|(the_-?\\d+\\.?\\d*_value))$",
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-tson-required": true,
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-required": true,
                                },
                                {
                                    $ref: "components#/schemas/__type",
                                    "x-tson-required": true,
                                },
                            ],
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["prefix", "postfix", "middle", "mixed"],
                    "x-tson_jsDocTags": [],
                },
                __type: {
                    $id: "components#/schemas/__type",
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["name"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
