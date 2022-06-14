import {Staff} from "./Staff";

export class ListStaff<T>{
    head:Staff<T>|null;
    tail:Staff<T>|null;
    size:number;
    constructor() {
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    addStaff(name:string,salary:number){
        let staff=new Staff(name,salary);
        staff.next=this.head;
        this.head= staff;
        if(!this.tail){
            this.tail=staff;
        }
    }
    showStaff():Staff<T>[]{
        let listStaff:Staff<T>[]=[];
        let flag=this.head;
        while(flag!==null){
            listStaff.push(flag);
            flag=flag.next;
        }
        return listStaff;
    }
    sumMoney():number{
        let sum=0;
        let flag=this.head;
        while(flag!==null){
            sum+=flag.money;
            flag=flag.next;
        }return sum;
    }
    findMoneyMax():number{
        let flag=this.head;
        let max=0;
        while(flag!==null){    
            if(max<flag.money){
                max=flag.money;
            }
            flag=flag.next;
        }return max;
    }
    
}