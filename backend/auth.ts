import { Request, Response } from "express";
import {User, users} from './users'

export const handleAuthentication = (req: Request, resp: Response) => {

    if (req === null) {
        
        console.log("request null")
    }

    const user: User = req.body

console.log("log body req.body " +req.query)
console.log("log body user" + user)


    if(isValid(user)){

        const dbUser: User = users[user.email]
        resp.json({name: dbUser.name, email: dbUser.email})

    } else {

        resp.status(403).json({message: 'Dados inválidos.'})
    }
}

function isValid(user: User) : boolean {
    console.log("teste user " + user)
    if(!user){

        return false
    }
    const dbUser = user[user.email]
    return dbUser !== undefined && dbUser.matches(user)

}