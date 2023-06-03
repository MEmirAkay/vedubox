export class User {
    username!: string;
    password!: string;
}

export class Student {
    studentId!: number;
    fullName!: string;
    education!: string;
    fees!:number | 0;
    user= new User();
}

