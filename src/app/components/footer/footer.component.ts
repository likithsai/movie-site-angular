import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  @Input('data') footerData: any;
  footerLinks: any;
  footerSocialMedia: any;
  footerCopyright: String = '';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
        this.footerCopyright = this.footerData[0].copyrighttext;
        this.footerLinks = this.footerData[0].links;
        this.footerSocialMedia = this.footerData[0].socialmedia;
    }, 10);
  }

}
