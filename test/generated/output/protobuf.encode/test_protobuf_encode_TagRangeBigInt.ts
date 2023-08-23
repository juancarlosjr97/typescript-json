import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TagRangeBigInt } from "../../../structures/TagRangeBigInt";

export const test_protobuf_encode_TagRangeBigInt = _test_protobuf_encode(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)({
    encode: (input) =>
        ((input: TagRangeBigInt): Uint8Array => {
            const $Sizer = (typia.protobuf.encode as any).Sizer;
            const $Writer = (typia.protobuf.encode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "value";
                    if (0 !== input.value.length) {
                        for (const elem of input.value) {
                            // 1 -> TagRangeBigInt.Type;
                            writer.uint32(10);
                            writer.fork();
                            $peo1(elem);
                            writer.ldelim();
                        }
                    }
                };
                const $peo1 = (input: any): any => {
                    // property "greater";
                    writer.uint32(8);
                    writer.int64(input.greater);
                    // property "greater_equal";
                    writer.uint32(16);
                    writer.int64(input.greater_equal);
                    // property "less";
                    writer.uint32(24);
                    writer.int64(input.less);
                    // property "less_equal";
                    writer.uint32(32);
                    writer.int64(input.less_equal);
                    // property "greater_less";
                    writer.uint32(40);
                    writer.int64(input.greater_less);
                    // property "greater_equal_less";
                    writer.uint32(48);
                    writer.int64(input.greater_equal_less);
                    // property "greater_less_equal";
                    writer.uint32(56);
                    writer.int64(input.greater_less_equal);
                    // property "greater_equal_less_equal";
                    writer.uint32(64);
                    writer.int64(input.greater_equal_less_equal);
                    // property "equal";
                    writer.uint32(72);
                    writer.int64(input.equal);
                };
                const $io1 = (input: any): boolean =>
                    "bigint" === typeof input.greater &&
                    BigInt(3) < input.greater &&
                    "bigint" === typeof input.greater_equal &&
                    BigInt(3) <= input.greater_equal &&
                    "bigint" === typeof input.less &&
                    BigInt(7) > input.less &&
                    "bigint" === typeof input.less_equal &&
                    BigInt(7) >= input.less_equal &&
                    "bigint" === typeof input.greater_less &&
                    BigInt(3) < input.greater_less &&
                    BigInt(7) > input.greater_less &&
                    "bigint" === typeof input.greater_equal_less &&
                    BigInt(3) <= input.greater_equal_less &&
                    BigInt(7) > input.greater_equal_less &&
                    "bigint" === typeof input.greater_less_equal &&
                    BigInt(3) < input.greater_less_equal &&
                    BigInt(7) >= input.greater_less_equal &&
                    "bigint" === typeof input.greater_equal_less_equal &&
                    BigInt(3) <= input.greater_equal_less_equal &&
                    BigInt(7) >= input.greater_equal_less_equal &&
                    "bigint" === typeof input.equal &&
                    BigInt(10) <= input.equal &&
                    BigInt(10) >= input.equal;
                //TagRangeBigInt;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        })(input),
    message:
        'syntax = "proto3";\n\nmessage TagRangeBigInt {\n    repeated TagRangeBigInt.Type value = 1;\n    message Type {\n        required int64 greater = 1;\n        required int64 greater_equal = 2;\n        required int64 less = 3;\n        required int64 less_equal = 4;\n        required int64 greater_less = 5;\n        required int64 greater_equal_less = 6;\n        required int64 greater_less_equal = 7;\n        required int64 greater_equal_less_equal = 8;\n        required int64 equal = 9;\n    }\n}',
    decode: (input: Uint8Array): TagRangeBigInt => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                value: [] as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // type: Array<TagRangeBigInt.Type>;
                        output.value.push($pdo1(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return output;
        };
        const $pdo1 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                greater: undefined as any,
                greater_equal: undefined as any,
                less: undefined as any,
                less_equal: undefined as any,
                greater_less: undefined as any,
                greater_equal_less: undefined as any,
                greater_less_equal: undefined as any,
                greater_equal_less_equal: undefined as any,
                equal: undefined as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // bigint;
                        output.greater = reader.int64();
                        break;
                    case 2:
                        // bigint;
                        output.greater_equal = reader.int64();
                        break;
                    case 3:
                        // bigint;
                        output.less = reader.int64();
                        break;
                    case 4:
                        // bigint;
                        output.less_equal = reader.int64();
                        break;
                    case 5:
                        // bigint;
                        output.greater_less = reader.int64();
                        break;
                    case 6:
                        // bigint;
                        output.greater_equal_less = reader.int64();
                        break;
                    case 7:
                        // bigint;
                        output.greater_less_equal = reader.int64();
                        break;
                    case 8:
                        // bigint;
                        output.greater_equal_less_equal = reader.int64();
                        break;
                    case 9:
                        // bigint;
                        output.equal = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return output;
        };
        const reader = new $Reader(input);
        return $pdo0(reader);
    },
});
