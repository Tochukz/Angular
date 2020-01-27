export enum Gender {
    Male = 'male',
    Female = 'female'
}

export class User {
    constructor(
        public id?: number,
        public firstname?: string,
        public lastname?: string,
        public email?: string,
        public gender?: Gender,
        public city?: string
    ){}
}