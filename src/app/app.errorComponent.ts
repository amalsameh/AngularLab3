import {Component} from '@angular/core'

@Component({
    template:`
    {{errorMessage}}
    `
})
export class errorComponent
{
errorMessage:string="Sorry you entered incorrect URL or incorrect Parameters, Review your data!";
}