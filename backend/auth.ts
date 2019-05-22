import { apiConfig } from './api-config';
import { Request, Response } from "express";
import { User, users } from './users'
import * as jwt from 'jsonwebtoken'

export const handleAuthentication = (req: Request, resp: Response) => {

    const user: User = req.body

    /*/new User(req.body['email'], "", req.body['password'])
    
        console.log("log body req.body ")
        console.log("log body user" + user.email)
    */

    if (isValid(user)) {

        const dbUser = users[user.email]
        const token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, apiConfig.secret)
        resp.json({ name: dbUser.name, email: dbUser.email, accessToken: token })

    } else {

        resp.status(403).json({ message: 'Dados inválidos.' })
    }


    function isValid(user: User): boolean {

        if (!user) {
            console.log("deu ruim " + user)
            return false
        }
        const dbUser = users[user.email]
        return dbUser !== undefined && dbUser.matches(user)
    }
}