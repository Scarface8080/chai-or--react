import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

// this can be used in feuture projects for auts service future proof code
export class AuthService {
    Client = new Client();
    account;

    constructor() {
        this.Client
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectId);

        this.account = new Account(this.Client) 
    }

    async createAccount({email, password, name}) {
        try {
           const userAccount =  await this.account.create(ID.unique, email, password, name)
            if(userAccount){
                //call another method
                return this.login({email, password});  

            } else {

                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(
                email, 
                password
            );
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUSer() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }

        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSession();
        } catch (error) {
            throw error;
        }
    }
}


const authService = new AuthService();

export default authService


