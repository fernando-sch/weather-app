export type RemoteGeolocation = {
  lat: number;
  lon: number;
  name: string;
  state: string;
};

export class Geolocation {
  country = "BR";
  lat: string;
  lon: string;
  name: string;
  state: string;

  constructor(private readonly remoteGeolocation: RemoteGeolocation) {
    this.lat = this.remoteGeolocation.lat.toString();
    this.lon = this.remoteGeolocation.lon.toString();
    this.name = this.remoteGeolocation.name;
    this.state = this.remoteGeolocation.state;
  }
}

export const buildGeolocationDTO = (remoteGeolocation: RemoteGeolocation) =>
  new Geolocation(remoteGeolocation);
