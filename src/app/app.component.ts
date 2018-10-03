import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = true;
  memes: Array<any> = [];
  imgs = {
    'not-simply': 'https://imgflip.com/s/meme/One-Does-Not-Simply.jpg',  
    'waiting': 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX26124315.jpg',  
    'other': 'https://abodeltd.co.uk/wordpress/wp-content/uploads/2017/08/Your-tenant-is-missing-or-dies.jpg'
  };
  newMeme: any = {
    lineOne: 'Line 1',
    lineTwo: 'Line 2',
  };

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  handleAddClick() {
    this.memes.push(this.newMeme);
    this.newMeme = {};
  }
}


//not-simply: 'https://imgflip.com/s/meme/One-Does-Not-Simply.jpg'
//waiting: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX26124315.jpg'