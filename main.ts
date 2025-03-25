
// ** Annotations **
// let id: number = 5;
// let company: string = "Acme corp";
// let isPublished: boolean = true;
// let ids: number[] = [1, 2, 3, 4, 5];
// let x: any = "pedro"
// let xArr: any[] = ["predro", 0, true]

// const concatenateValue = (a: string, b: string): string => a + b;

// console.log(concatenateValue("Hello ", " World"));
// console.log(concatenateValue("5", "10"));

// ** Interface **
// interface UserInterface {
//     id: number,
//     name: string,
//     age?: number,
//     greet(msg: string): void;
// }

// const User: UserInterface = {
//     id: 2,
//     name: "Murali",
//     age: 23,
//     greet: (msg: string): void => {
//         console.log(msg)
//     }
// }

// User.greet("Hello");

// if (!User.age) {
//     console.log("No age");
// } else {
//     console.log(User.age)
// }

// ** Types **
// type IDFieldType = string | number

// ** Or / Intersection **
// const printId = (id: IDFieldType) => {
//     console.log("ID:" + id);
// }

// printId("123")
// printId(123)

// ** Union / And **
// interface BusinessPartner {
//     name: string;
//     creditScore: number;
// }

// interface UserIdentity {
//     id: number;
//     email: string;
// }

// type Employee = BusinessPartner & UserIdentity

// const Contract = (employee: Employee): void => {
//     console.log("Contract signed by: " + employee.name + " with email: " + employee.email);
// }

// Contract({
//     name: "Murali", creditScore: 1, id: 1, email: "murali@murali.com"
// })


// **Enum**
// Error can be anything ex: unauthorized etc

// enum LoginError {
//     Unauthorized = "unauthorized",
//     NoUser = "User doesn't exist",
//     WrongCredentials = "Wrong credentials",
//     InternalError = "Internal Error"
// }

// const printError = (error: LoginError) => {
//     if (error == LoginError.Unauthorized) {
//         console.log(error);
//     } else if (error == LoginError.NoUser) {
//         console.log(error);
//     } else if (error == LoginError.WrongCredentials) {
//         console.log(error);
//     } else {
//         console.log(error);
//     }
// }

// printError(LoginError.NoUser);

// ** Generics **

// class StorageContainer<T> {
//     private contents: T[];

//     constructor() {
//         this.contents = [];
//     }

//     addItem = (item: T): void => {
//         this.contents.push(item)
//     }

//     getItem = (idx: number): T | undefined => {
//         return this.contents[idx];
//     }
// }

// const userNames = new StorageContainer<string>();
// userNames.addItem("Pedro")
// userNames.addItem("Murali")
// console.log(userNames.getItem(0));

// const userId = new StorageContainer<number>();
// userId.addItem(123)
// userId.addItem(456)
// console.log(userId.getItem(0));

// ** Read-Only**
interface Employee {
    readonly empId: number;
    readonly startDate: Date;

    name: string,
    dept: string,
}

const employee: Employee = {
    empId: 123,
    startDate: new Date(),
    name: "Murali",
    dept: "dev"
}

employee.name = "Pavan";
employee.empId = 1;