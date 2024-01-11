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
      'https://pixabay.com/get/g407660226a85ec39410f7b156445d7a3731a05df3190b1d56d953c41f0c395b39806a2faf22f360b10284a7dcee5b9c4d95958d9d585189321b057b99d264ef7_1280.jpg';
    this.buttonText = 'Oh Snap !';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap !') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, UnSnap !';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap !';
    }
  }
}
