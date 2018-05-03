import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html'
	providers: [UserService]
})

export class LoginComponent implements OnInit
{
	public title: string;
	public user: User;

	constructor(
		private _userService: UserService
	){
		this.title = 'Iniciar sesión';
		this.user = new User(1, 'ROLE_USER','','','','');
	}	

	ngOnInit()
	{
		console.log('login.component cargado correctamente');
	}
	onSubmit(form)
	{
		console.log(this.user);

		this._userService.signup(this.user).subscribe(
			response => {

			},
			error => {
				console.log(error<any>);
			}
		);
	}
}