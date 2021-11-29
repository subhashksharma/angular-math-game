import { AbstractControl } from '@angular/forms'

export class MathValidator {

    static validateAddition( form : AbstractControl) {

        const {a,b,result} = form.value;
        if((a+b)=== parseInt(result)) {
                    return null;
        }
        return { addition : true};
    }

}