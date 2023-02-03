import { Injectable } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client";

@Injectable({})
export class AuthService{
    login(){
        return({status:"success", msg:"Ready to login"})
    }

    register(){
        return({status:"success", msg:"Ready to Register"})
    }
}