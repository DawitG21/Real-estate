import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent implements OnInit {

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

  openProperties() {
    this.route.navigate(['/login']);
  }

}
