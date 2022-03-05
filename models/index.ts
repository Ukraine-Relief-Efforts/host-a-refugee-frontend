export type User = {
  id: string;
  fields: {
    name: string;
    userType: string;
    phoneNumber: string;
    email: string;
    country: string;
    cityRegion: string;
    lat: number;
    lng: number;
    accomodationDetails?: string;
    groupSize: number;
    languages: string[];
    dateStart?: string;
    dateEnd?: string;
    avatar?: string;
  };
  createdTime: string;
};

export type Partner = {
  name: string;
  what: string;
  operation: string;
  donation?: string;
};
