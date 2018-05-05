import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';


@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.css'],
  providers: [UserService, CarService]
})
export class CarNewComponent implements OnInit {

  public page_title: string;
  public token;
  public identity;
  public car: Car;
  public statusCar: string;
  public sta;

  constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService: UserService,
  		private _carService: CarService
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
  	this._carService.create(this.token, this.car).subscribe(
  			response =>{
  				//
  					this.statusCar = 'success';
  					this.car = response.car;
  					this._router.navigate(['']);
  			},
  			errorsito =>{
  				this.statusCar = 'error';
  				console.log(<any>errorsito);
  				this.sta = errorsito;
  			}
  		);
  }

}
