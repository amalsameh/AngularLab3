import { Component } from '@angular/core'
import { db } from './app.dbService'
@Component({
    template: `<div>
    <ul *ngIf='students'>
    <li *ngFor='let student of students'>
    <a [routerLink]="['/profile',student.id]">{{student.name}}</a>
    </ul>
    </div>`
})
export class studentsComponent {
    students: { id: number, name: string, email: string }[];
    constructor(private _students: db) {
        this.students = _students.getData();
    }
}