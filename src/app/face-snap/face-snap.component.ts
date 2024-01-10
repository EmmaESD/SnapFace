import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageURL!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami';
    this.snaps = 6;
    this.imageURL =
      'https://pixabay.com/get/g1e713641af15abaa60dbb2a52d614eba37bc66557f1ab20088e2bbaa9288f9f1d148fb132f98493acd922950216cb0d4_640.jpg';
    this.buttonText = 'Oh Snap !';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap !') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oop, UnSnap !';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap !';
    }
  }
}
