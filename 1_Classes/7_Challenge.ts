// *** MY SOLUTION *** //
class MyUser {
    firstName:string; lastName:string; email:string;
    get fullName() { return `${this.firstName} ${this.lastName}`; }
    hasEmailOf(email:string):boolean { return this.email === email; }
}

// *** TUTOR'S SOLUTION *** //
class TutorsUser {
    firstName:string;
    lastName:string;
    email:string;

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    doesEmailMatch(email:string):boolean {
        return this.email === email;
    }
}