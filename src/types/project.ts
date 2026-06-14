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
  TYPE_SCRIPT = 'ts',
  AZURE = 'azure',
  HTML = 'html',
  CSS = 'css',
  SCSS = 'scss',
  NEXTJS = 'nextjs',
  STRAPI = 'strapi',
  ZUSTAND = 'zustand',
  ZOD = 'zod',
  FRAMER_MOTION = 'framermotion',
  LOTTIE_FILES = 'lottiefiles',
}

export type Project = {
  thumbnail: string;
  blurThumbnail: string;
  title: string;
  translationKey: string;
  scope: SCOPE[];
  techstack: TECH[];
  link?: string;
  repositoryLink?: string;
  date: Date;
  rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};
