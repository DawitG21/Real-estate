import { Component, OnInit } from '@angular/core';
import { Home } from '../../models/IHome.model';
import { Options } from 'ng5-slider';
import * as $ from 'jquery';
import { Router } from '@angular/router';
/* import { HomeService } from '../../providers/home.service'; */

@Component({
  selector: 'app-search',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})

export class HomesComponent implements OnInit {

  defaultSelection = 'All';
  searchText: any;
  address: string;

  homes: Home[];
  filterArgs: any = { type: '', address: '', car_type: '' };

  min = 3000;
  max = 999999;

  categories = [
    {
      type: 'Apartment'
    },
    {
      type: 'Villa'
    },
    {
      type: 'Mansion'
    }
  ];

  locations = [
    {
      address: 'Bole'
    },
    {
      address: 'Hayat'
    },
    {
      address: 'Sarbet'
    },
    {
      address: 'Summit'
    },
    {
      address: 'Mekhanisa'
    }
  ];

  parkings = [
    {
      car_type: 'Cars'
    },
    {
      car_type: 'Vans'
    },
    {
      car_type: 'Bikes'
    },
    {
      car_type: 'Trucks'
    }
  ];

  amenities = [
    {
      "name": "Wifi",
      "value": false
    },
    {
      "name": "Gym",
      "value": false
    },
    {
      "name": "Swimming Pool",
      "value": false
    },
    {
      "name": "Garden",
      "value": false
    }
  ]

  constructor(public route: Router) {

    $(function () {
      const menu = $('nav ul');

      $('#openup').on('click', function (e: any) {
        e.preventDefault(); menu.slideToggle();
      });

      $(window).resize(function () {
        const w = $(this).width(); if (w > 480 && menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });

      $('nav li').on('click', function (e: any) {
        const w = $(window).width(); if (w < 480) {
          menu.slideToggle();
        }
      });
      $('.open-menu').height($(window).height());
    });

  }

  ngOnInit() {

    /*  this._homeservice.getHomes()
       .subscribe((resTaskData) => this.homes = resTaskData); */

    this.homes = [
      {
        'id': 1,
        'type': 'Villa',
        'price': 920000,
        'address': 'CMC',
        'area': 6292,
        'bedrooms': 2,
        'bathrooms': 2,
        'car_type': 'Cars',
        'park_spots': 1,
        'amenity': ['Gym'],
        'homeUrl': '../../assets/ezembil10.jpg'
      },
      {
        'id': 2,
        'type': 'Apartment',
        'price': 3000,
        'address': 'Summit',
        'area': 921,
        'bedrooms': 3,
        'bathrooms': 1,
        'car_type': 'Cars',
        'park_spots': 2,
        'amenity': ['Wifi'],
        'homeUrl': '../../assets/ezembil6.jpg'
      },
      {
        'id': 3,
        'type': 'Villa',
        'price': 820000,
        'address': 'Hayat',
        'area': 4921,
        'bedrooms': 2,
        'bathrooms': 2,
        'car_type': 'Trucks',
        'park_spots': 3,
        'amenity': ['Garden', 'Swimming Pool'],
        'homeUrl': '../../assets/ezembil8.jpg'
      },
      {
        'id': 4,
        'type': 'Apartment',
        'price': 420000,
        'address': 'Sarbet',
        'area': 3921,
        'bedrooms': 2,
        'bathrooms': 3,
        'car_type': 'Cars',
        'park_spots': 4,
        'amenity': ['Swimming Pool'],
        'homeUrl': '../../assets/ezembil1.jpg'
      },
      {
        'id': 5,
        'type': 'Villa',
        'price': 629000,
        'address': 'Mekhanisa',
        'area': 2921,
        'bedrooms': 1,
        'bathrooms': 1,
        'car_type': 'Vans',
        'park_spots': 1,
        'amenity': ['Gym'],
        'homeUrl': '../../assets/ezembil6.jpg'
      },
      {
        'id': 6,
        'type': 'Apartment',
        'price': 720000,
        'address': 'Bole',
        'area': 1921,
        'bedrooms': 3,
        'bathrooms': 3,
        'car_type': 'Bikes',
        'park_spots': 1,
        'amenity': ['Gym'],
        'homeUrl': '../../assets/ezembil5.jpg'
      }
    ];

  }
  counter: number = 0;

  amenityChange(item: any, e) {

    if (e.srcElement.checked == true) {
      console.log("checked")
      for (let i = 0; i < this.amenities.length; i++) {
        if (this.amenities[i].name == item) {
          this.amenities[i].value = true;
        }
      }
    }
    if (e.srcElement.checked == false) {
      console.log("unchecked")
      this.counter = 0;
      for (let i = 0; i < this.amenities.length; i++) {
        if (this.amenities[i].name == item) {
          this.amenities[i].value = false;
        }
      }
      /* console.log(item);
      this.filterArgs.amenity = item; */
    }
    for (let j = 0; j < this.amenities.length; j++) {
      if (this.amenities[j].value == true) {
        this.filterArgs.amenity = this.amenities[j].name;
        this.counter = 1;
      }
    }
    if (this.counter == 0) {
      this.filterArgs.amenity = '';
    }
  }

  openDetails() {
    this.route.navigate(['/detail']);
  }

  searchByLocation() {
    if (this.address !== '') {
      this.homes = this.homes.filter(res => {
        return res.address.toLowerCase().match(this.address.toLowerCase());
      });
    } else if (this.address === '') {
      this.ngOnInit();
    }
  }

}
