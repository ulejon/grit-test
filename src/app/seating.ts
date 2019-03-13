export class Seating {
  empNo: string;
  empName: string;
  projNo: string;
  projName: string;
  seat: string;


  constructor(empNo: string, empName: string, projNo: string, projName: string, seat: string) {
    this.empNo = empNo;
    this.empName = empName;
    this.projNo = projNo;
    this.projName = projName;
    this.seat = seat;
  }
}
