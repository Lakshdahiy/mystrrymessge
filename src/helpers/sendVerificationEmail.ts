import { resend } from "../lib/resend"
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { log } from "console";


 export async function sendVerificationEmail(
    email: string,
    username : string,
    verifyCode : string
 ):Promise<ApiResponse>{

    try{
        await resend.emails.send({
            from: '<onboarding@resend.dev',
            to: 'email',
            subject: 'Mystry Message | Verification Code',
            react: VerificationEmail({username,otp:verifyCode})
          });
        return{
            success:true , message:"verification email send successfully"
        }

    }catch(emailError){
        console.log("error sending verification email");
        return{success:false, message:"failed to send verification email"}
    }
 }