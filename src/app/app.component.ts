import { Component, OnInit } from '@angular/core';

import { MemeService } from './services/meme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  constructor(private memeService: MemeService) {}

  ngOnInit() {
    this.memeService.getAll()
    .then((results) => {
      this.memes = results;
      this.loading = false;
    });
  }

  handleAddClick() {
    this.memeService.create(this.newMeme)
    .then(() => {
      this.memes.push(this.newMeme)
      this.newMeme = {};
    });
  }

  handleDeleteClick(id: string) {
    this.memeService.delete(id)
      .then(() => {
        this.memes = this.memes.filter((meme)=> {
          return meme._id !== id;
        });
      });
  }


}
