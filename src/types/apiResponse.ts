import {Message} from "@/models/Users" 
export interface apiResponse {
    success:boolean;
    message:string;
    isAcceptingMessages?:boolean;
    messages?:Array<Message>

}