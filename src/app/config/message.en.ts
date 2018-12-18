import { Injectable } from '@angular/core';

@Injectable()
export class Message {
    //LOGIN PAGE  
    OCR_TITLE: string = 'Login to OCR Scanner';
    OCR_LOGIN: string = 'LOG IN';
    OCR_FORGET_PASSWORD_LINK: string = 'Forget Password?';
    OCR_SIGN_UP_LINK: string = 'Sign Up Here?';

    //SIGNUP PAGE
    OCR_SIGNUP_TITLE:string = 'SIGNUP TO OCR SCANNER';
    OCR_SIGN_UP_BUTTON:string = 'SIGN UP';
    OCR_LOGIN_LINK:string = 'Login Here?';

    //FORGET PAGE
    OCR_FORGET_PASSWORD_TITLE:string = 'Forget Password';
    OCR_FORGET_PASSWORD_BUTTON:string = 'Forget Password';
    OCR_FORGET_PWD_LOGIN_LINK:string = 'Login Here?';

    //LANDING PAGE
    FINBRIDGE_SECTION_ONE_TITLE:string = 'Make the most of your money';
    FINBRIDGE_SECTION_THIRD_TITLE:string = 'Why Finbridge';
    FINBRIDGE_SECTION_FIFTH_TITLE:string = 'Buy Insurances';

}