export class User {
    username!: string;
    password!: string;
}

export class Teacher {
    teacherId!: number;
    fullName!: string;
    education!: string;
    courseCount!: number;
    user= new User();
}
