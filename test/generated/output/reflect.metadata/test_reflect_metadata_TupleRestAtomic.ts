import typia from "../../../../src";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_reflect_metadata_TupleRestAtomic = _test_reflect_metadata(
    "TupleRestAtomic",
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
                tuples: [
                    {
                        name: "TupleRestAtomic",
                        tags: [],
                    },
                ],
                objects: [],
                aliases: [],
                natives: [],
                sets: [],
                maps: [],
            },
        ],
        components: {
            objects: [],
            aliases: [],
            arrays: [],
            tuples: [
                {
                    name: "TupleRestAtomic",
                    index: null,
                    elements: [
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "boolean",
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
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "number",
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
                            rest: {
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
                            arrays: [],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                    ],
                    recursive: false,
                    nullables: [false],
                },
            ],
        },
    }),
);
