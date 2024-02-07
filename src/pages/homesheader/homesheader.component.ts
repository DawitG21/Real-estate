import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homesheader',
  templateUrl: './homesheader.component.html',
  styleUrls: ['./homesheader.component.css']
})
export class HomesheaderComponent implements OnInit {

  options = [
    {
      value: 'Buy'
    },
    {
      value: 'Rent'
    },
    {
      value: 'Lease'
    }
  ];

  defaultOption = this.options[0];

  categories = [
    {
      cat: 'Apartment'
    },
    {
      cat: 'Mansion'
    },
    {
      cat: 'Villa'
    },
    {
      cat: 'Land'
    },
  ];

  defaultCategory = this.categories[0];

  constructor(public route: Router) { }

  ngOnInit() {

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

  openModal() {
    const x = document.querySelectorAll('.modal1');
    for (let i = 0; i < x.length; i++) {
      x[i].classList.add('show');
    }
  }

  closeModal() {
    const x = document.querySelectorAll('.modal1');
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('show');
    }
  }

}
