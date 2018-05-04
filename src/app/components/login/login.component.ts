import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	providers: [UserService]
})

export class LoginComponent implements OnInit
{
	public title: string;
	public user: User;
	public token;
	public identity;

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
				//se obtiene el token
				//console.log(response);

				this.token = response;
				localStorage.setItem('token', this.token);

				//objeto usuario identificado
				this._userService.signup(this.user, true).subscribe(
					response => {
						//se obtiene el token
						//console.log(response);
						this.identity = response;
						localStorage.setItem('identity', JSON.stringify(this.identity));
					},
					error => {
						console.log(<any>error);
					}
				);
			},
			error => {
				console.log(<any>error);
			}
		);
	}
}