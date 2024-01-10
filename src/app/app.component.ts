import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami',
        imageURL:
          'https://pixabay.com/get/g1e713641af15abaa60dbb2a52d614eba37bc66557f1ab20088e2bbaa9288f9f1d148fb132f98493acd922950216cb0d4_640.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris',
      },
    ];
  }
}
