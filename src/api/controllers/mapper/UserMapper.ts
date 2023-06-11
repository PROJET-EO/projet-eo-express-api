import { UserDocument } from "../../models";

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