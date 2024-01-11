import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-face-snap-component',
  templateUrl: './single-face-snap-component.component.html',
  styleUrl: './single-face-snap-component.component.scss',
})
export class SingleFaceSnapComponentComponent {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(
    private FaceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap !';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.FaceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap !') {
      this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, UnSnap !';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap !';
    }
  }
}
