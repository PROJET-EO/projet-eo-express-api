import { UserDocument } from "../../models";

export interface RestUser {
    firstName : string,
    lastName : string,
    email :string
}
export const userMapper= async (user : Promise<UserDocument | null> ) => {
    const userMapped : UserDocument = {
        id :'',
        birthdate: new Date(),
        email : '' ,
        firstName : '',
        lastName :  '',
        password : ''
    }
  await  user.then((x )=>{
        if(x){
            userMapped.id = x.id;
            userMapped.firstName =x.firstName;
            userMapped.birthdate = x.birthdate;
            userMapped.email = x.email;
            userMapped.lastName = x.lastName;
            userMapped.password = x.password
        }   
     
    })
    return userMapped;
}

export const userDomain = (user : UserDocument) =>{
    const userDomain : RestUser  = {
            firstName : user.firstName,
            lastName : user.lastName,
            email : user.email
        }

        return userDomain;
}