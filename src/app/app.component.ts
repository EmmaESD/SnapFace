import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami',
      'https://pixabay.com/get/g1e713641af15abaa60dbb2a52d614eba37bc66557f1ab20088e2bbaa9288f9f1d148fb132f98493acd922950216cb0d4_640.jpg',
      new Date(),
      0
    );
  }
}
