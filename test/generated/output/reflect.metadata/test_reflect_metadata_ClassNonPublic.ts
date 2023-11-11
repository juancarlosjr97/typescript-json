import typia from "../../../../src";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_reflect_metadata_ClassNonPublic = _test_reflect_metadata(
    "ClassNonPublic",
)(
    (typia.reflect.metadata as any).from({
        metadatas: [
            {
                any: false,
                required: true,
                optional: false,
                nullable: false,
                functional: false,
                atomics: [],
                constants: [],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [],
                tuples: [],
                objects: ["ClassNonPublic.Accessor"],
                aliases: [],
                natives: [],
                sets: [],
                maps: [],
            },
        ],
        components: {
            objects: [
                {
                    name: "ClassNonPublic.Accessor",
                    properties: [
                        {
                            key: {
                                any: false,
                                required: true,
                                optional: false,
                                nullable: false,
                                functional: false,
                                atomics: [],
                                constants: [
                                    {
                                        type: "string",
                                        values: ["implicit"],
                                    },
                                ],
                                templates: [],
                                escaped: null,
                                rest: null,
                                arrays: [],
                                tuples: [],
                                objects: [],
                                aliases: [],
                                natives: [],
                                sets: [],
                                maps: [],
                            },
                            value: {
                                any: false,
                                required: true,
                                optional: false,
                                nullable: false,
                                functional: false,
                                atomics: [
                                    {
                                        type: "string",
                                        tags: [],
                                    },
                                ],
                                constants: [],
                                templates: [],
                                escaped: null,
                                rest: null,
                                arrays: [],
                                tuples: [],
                                objects: [],
                                aliases: [],
                                natives: [],
                                sets: [],
                                maps: [],
                            },
                            description: null,
                            jsDocTags: [],
                        },
                        {
                            key: {
                                any: false,
                                required: true,
                                optional: false,
                                nullable: false,
                                functional: false,
                                atomics: [],
                                constants: [
                                    {
                                        type: "string",
                                        values: ["shown"],
                                    },
                                ],
                                templates: [],
                                escaped: null,
                                rest: null,
                                arrays: [],
                                tuples: [],
                                objects: [],
                                aliases: [],
                                natives: [],
                                sets: [],
                                maps: [],
                            },
                            value: {
                                any: false,
                                required: true,
                                optional: false,
                                nullable: false,
                                functional: false,
                                atomics: [
                                    {
                                        type: "string",
                                        tags: [],
                                    },
                                ],
                                constants: [],
                                templates: [],
                                escaped: null,
                                rest: null,
                                arrays: [],
                                tuples: [],
                                objects: [],
                                aliases: [],
                                natives: [],
                                sets: [],
                                maps: [],
                            },
                            description: null,
                            jsDocTags: [],
                        },
                    ],
                    jsDocTags: [],
                    index: 0,
                    validated: false,
                    recursive: false,
                    nullables: [false],
                },
            ],
            aliases: [],
            arrays: [],
            tuples: [],
        },
    }),
);
