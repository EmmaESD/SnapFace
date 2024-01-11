import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami',
      imageURL:
        'https://pixabay.com/get/g6ca2af902452a2b2c997926331aeb7d46e704eb881ce6feb7016b576418efb0cef51d93025a4fbd07be69913da4a93db_640.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Paris',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found !');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snaptype: 'snap' | 'unsnap'): void {
    const facesnap = this.getFaceSnapById(faceSnapId);
    snaptype === 'snap' ? facesnap.snaps++ : facesnap.snaps--;
  }
}
