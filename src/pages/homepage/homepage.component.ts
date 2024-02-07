import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  sub_buy = 'Buy a home';
  sub_sell = 'Sell a home';
  sub_rent = 'Rent a home';

  tours_header = 'Watch our house tours:';
  tours_sub_header = 'We show you the best houses in the market in our youtube channel';
  ezembilchannel = 'https://www.youtube.com/channel/UCu8PhdsLGRov5jDVejgRRrQ?view_as=subscriber';

  packages = [
    {
      'Id': 1,
      'buy': 'Find your dream home with an immersive photo experience and the most listings.'
    },
    {
      'Id': 2,
      'sell': 'When you sell on eZembil,we will help you navigate a path to a successful home sale.'
    },
    {
      'Id': 3,
      'rent': 'We are creating a seamless online experience of rental network, of finding a house and renting.'
    }
  ];

  tours = [
    {
      tourUrl_4: 'https://www.youtube.com/embed/ZHTP73dAE_s',
      tourUrl_5: 'https://www.youtube.com/embed/GLloLOfIXP8',
      tourUrl_6: 'https://www.youtube.com/embed/AddZosf2f5g'
    }
  ];

  tourUrl_4: SafeResourceUrl;
  tourUrl_5: SafeResourceUrl;
  tourUrl_6: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private route: Router) {
    this.tourUrl_4 = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/ZHTP73dAE_s');
    this.tourUrl_5 = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/GLloLOfIXP8');
    this.tourUrl_6 = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/AddZosf2f5g');
  }

  ngOnInit(): void { }

  showHouses() {
    this.route.navigate(['/list']);
  }

}
