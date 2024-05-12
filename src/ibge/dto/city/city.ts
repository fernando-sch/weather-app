type RemoteState = {
  sigla: string;
  nome: string;
};

type RemoteMesoRegion = {
  UF: RemoteState;
};

type RemoteMicroRegion = {
  mesorregiao: RemoteMesoRegion;
};

export type RemoteCity = {
  nome: string;
  microrregiao: RemoteMicroRegion;
};

export class City {
  name: string;
  state: string;
  stateCode: string;

  constructor(private readonly remoteCity: RemoteCity) {
    this.name = this.remoteCity.nome;
    this.state = this.remoteCity.microrregiao.mesorregiao.UF.nome;
    this.stateCode = this.remoteCity.microrregiao.mesorregiao.UF.sigla;
  }
}

export const buildCityDTO = (remoteCity: RemoteCity) => new City(remoteCity);
