import TSON from "../../src";

function normal(): void {
    interface INormal {
        boolean: boolean;
        Boolean: Boolean;
        number: number;
        Number: Number;
        bigint: bigint;
        BigInt: BigInt;
        string: string;
        String: String;
    }
    TSON.createIs<INormal>();
}

function special(): void {
    interface Boolean {
        special: "value";
    }
    type Number = Boolean;
    type BigInt = Boolean;
    type String = Boolean;

    interface ISpecial {
        boolean: boolean;
        Boolean: Boolean;
        number: number;
        Number: Number;
        bigint: bigint;
        BigInt: BigInt;
        string: string;
        String: String;
    }

    TSON.createIs<ISpecial>();
}
normal();
special();
