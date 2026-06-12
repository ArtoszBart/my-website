export enum SCOPE {
  WEB = 'web',
  CMS = 'cms',
  SERVER = 'server',
  DB = 'db',
  MOBILE = 'mobile',
}

export enum TECH {
  REACT = 'react',
  EXPRESS = 'express',
  NODEJS = 'node',
  MSSQL = 'mssql',
  EXPO = 'expo',
  JAVA_SCRIPT = 'js',
}

export type Project = {
  thumbnail: string;
  blurThumbnail: string;
  title: string;
  content: string;
  scope: SCOPE[];
  techstack: TECH[];
  link: string;
  repositoryLink: string;
  date: Date;
  rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};
