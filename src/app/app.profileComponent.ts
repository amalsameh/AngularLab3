import {Component,OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {db} from './app.dbService'

@Component({
    template:`
        <div>
        Name: {{student.name}} <br/>
        Email: {{student.email}}
        </div>
    `
})
export class profileComponent implements OnInit
{
    id:number;
    student:{ id: number, name: string, email: string };
constructor(private _dbservice:db,private _route:ActivatedRoute)
{
}
ngOnInit()
{
    this._route.params.subscribe(params=>this.id=params['id']);
    this.student=this._dbservice.getUserData(this.id);
}
}