import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_tag_tuple = _test_stringify(
    "tuple tag",
    TagTuple.generate,
    TSON.createStringify<TagTuple>(),
);
