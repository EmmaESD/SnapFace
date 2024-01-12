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
      description: 'Mon meilleur ami depuis toujours !',
      imageURL:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      createdDate: new Date(),
      snaps: 0,
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Lily',
      description: 'Un super repas !',
      imageURL:
        'https://images.unsplash.com/photo-1602253057119-44d745d9b860?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhdHxlbnwwfHwwfHx8MA%3D%3D',
      createdDate: new Date(),
      snaps: 0,
      location: 'Paris',
    },
    {
      id: 3,
      title: 'Mélo',
      description: 'Souvenir de voyage',
      imageURL:
        'https://images.unsplash.com/photo-1548013146-72479768bada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kZXxlbnwwfHwwfHx8MA%3D%3D',
      createdDate: new Date(),
      snaps: 0,
      location: 'Paris',
    },
    {
      id: 4,
      title: 'Julia',
      description: 'Trop drôle !!',
      imageURL:
        'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbGV8ZW58MHx8MHx8fDA%3D',
      createdDate: new Date(),
      snaps: 0,
      location: 'Paris',
    },
    {
      id: 5,
      title: 'Gilou',
      description: 'Best soirée',
      imageURL:
        'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFydHl8ZW58MHx8MHx8fDA%3D',
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
