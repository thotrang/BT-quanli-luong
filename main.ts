import { ListStaff } from "./ListStaff";

let listStaff = new ListStaff();

listStaff.addStaff('thang 1', 100000000000);
listStaff.addStaff('thang 2', 8000000000);
listStaff.addStaff('thang 3', 1000000);
listStaff.addStaff('thang 4', 700000000);
listStaff.addStaff('thang 5', 9000000000);

console.log(listStaff.showStaff());

console.log("tong so tien " + listStaff.sumMoney());

console.log("luong thang cao nhat " + listStaff.findMoneyMax());


