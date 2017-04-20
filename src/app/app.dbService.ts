
export class db {
    getData(): { id: number, name: string, email: string }[] {
        return [{ id: 1, name: "Asaad Saad", email: "asaad@mum.edu" }];
    }
    getUserData(id: number): { id: number, name: string, email: string } {
        let students: { id: number, name: string, email: string }[] = this.getData();
        for (let student of students) {
            if (student.id == id)
                return student;
        }
        return null;
    }
    checkUserExist(id: number) {
        let students: { id: number, name: string, email: string }[] = this.getData();
        for (let student of students) {
            if (student.id == id)
                return true;
        }
        return false;
    }
}