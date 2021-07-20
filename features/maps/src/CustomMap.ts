import { User } from './User';
import { Company } from './Company';

// Instruction to every other class
// on how they ca be an argument to 'addMarker'

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  isPerson: boolean;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(htmlElementId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(htmlElementId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
