import typia from "../../../../src";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { TupleUnion } from "../../../structures/TupleUnion";

export const test_reflect_metadata_TupleUnion = _test_reflect_metadata(
    "TupleUnion",
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
                arrays: [
                    {
                        name: "TupleUnion",
                        tags: [],
                    },
                ],
                tuples: [],
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
            arrays: [
                {
                    name: "TupleUnion",
                    value: {
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
                                name: "[number, string, boolean]",
                                tags: [],
                            },
                            {
                                name: "[boolean, number]",
                                tags: [],
                            },
                            {
                                name: "[]",
                                tags: [],
                            },
                        ],
                        objects: [],
                        aliases: [],
                        natives: [],
                        sets: [],
                        maps: [],
                    },
                    nullables: [false],
                    recursive: false,
                    index: null,
                },
            ],
            tuples: [
                {
                    name: "[]",
                    index: null,
                    elements: [],
                    recursive: false,
                    nullables: [false],
                },
                {
                    name: "[boolean, number]",
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
                    ],
                    recursive: false,
                    nullables: [false],
                },
                {
                    name: "[number, string, boolean]",
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
                    ],
                    recursive: false,
                    nullables: [false],
                },
            ],
        },
    }),
);
