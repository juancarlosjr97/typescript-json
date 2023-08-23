import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TagCustom } from "../../../structures/TagCustom";

export const test_protobuf_encode_TagCustom = _test_protobuf_encode(
    "TagCustom",
)<TagCustom>(TagCustom)({
    encode: (input) =>
        ((input: TagCustom): Uint8Array => {
            const $is_uuid = (typia.protobuf.encode as any).is_uuid;
            const $is_custom = (typia.protobuf.encode as any).is_custom;
            const $Sizer = (typia.protobuf.encode as any).Sizer;
            const $Writer = (typia.protobuf.encode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "id";
                    writer.uint32(10);
                    writer.string(input.id);
                    // property "dollar";
                    writer.uint32(18);
                    writer.string(input.dollar);
                    // property "postfix";
                    writer.uint32(26);
                    writer.string(input.postfix);
                    // property "log";
                    writer.uint32(33);
                    writer.double(input.log);
                };
                //TagCustom;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        })(input),
    message:
        'syntax = "proto3";\n\nmessage TagCustom {\n    required string id = 1;\n    required string dollar = 2;\n    required string postfix = 3;\n    required double log = 4;\n}',
    decode: (input: Uint8Array): TagCustom => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                id: "" as any,
                dollar: "" as any,
                postfix: "" as any,
                log: undefined as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // string;
                        output.id = reader.string();
                        break;
                    case 2:
                        // string;
                        output.dollar = reader.string();
                        break;
                    case 3:
                        // string;
                        output.postfix = reader.string();
                        break;
                    case 4:
                        // number;
                        output.log = reader.double();
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
