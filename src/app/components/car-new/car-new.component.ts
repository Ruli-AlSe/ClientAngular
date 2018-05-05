import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Car } from '../../models/car';


@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.css'],
  providers: [UserService]
})
export class CarNewComponent implements OnInit {

  public page_title: string;
  public token;
  public identity;
  public car: Car;

  constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService: UserService
  	) { 
  		this.page_title = 'Crear nuevo coche';
  		this.token = this._userService.getToken();
  		this.identity = this._userService.getIdentity();

  	  }

  ngOnInit() 
  {
  	if (this.identity == null) 
  	{
  		this._router.navigate(['login']);
  	}
  	else
  	{
  		this.car = new Car(1, '', '', 1, '', null, null);
  	}
  }

  onSubmit(form)
  {
  	console.log(this.car);
  }

}
