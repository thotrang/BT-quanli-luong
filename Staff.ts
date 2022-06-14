export class Staff<T>{
    private _mouth:string;
    private _money:number;
    next:Staff<T>|null=null;

    constructor(mouth: string, money: number) {
        this._mouth = mouth;
        this._money = money;
    }
    get mouth(): string {
        return this._mouth;
    }
    get money(){
        return this._money;
    }
    set mouth(value: string) {
        this._mouth = value;
    }
    set money(value: number) {
        this._money = value;
    }
}