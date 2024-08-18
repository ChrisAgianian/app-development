//this file is used to save each user's info in an array

import { User} from "./user.model";

export class Datasource{
    private users:User[]

    //construct an array with different users
    constructor(){
        this.users = new Array<User>(
            new User(1,'Chris','chris123@gmail.com'),
            new User(2, 'John', 'johndoe@gmail.com')
        )
    }

    //define a getuser() method to return the aray 'users'
    getuser():User[]{
        return this.users
    }
}







