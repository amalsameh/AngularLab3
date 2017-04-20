import {Component} from '@angular/core'
@Component({
    template:`<div>
    {{welcomeMessage}}
    </div>`
})
export class homeComponent
{
welcomeMessage:string="Welcome at MUM";
}