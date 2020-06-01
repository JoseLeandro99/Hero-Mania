export interface Props {
  route: any;
}

export interface Hero {
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
}

interface Biography {
  full_name: string;
  alter_egos?: string;
  place_of_birth?: string;
  first_appearance?: string;
  publisher: string;
  alignment: string;
}

interface Appearance {
  gender: string;
  race: string;
}

interface Work {
  occupation?: string;
  base?: string;
}

interface Connections {
  group_affiliation?: string;
  relatives?: string;
}