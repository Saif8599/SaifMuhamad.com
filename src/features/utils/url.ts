import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const withPath = (url: string, basePath: string | undefined): string => {
  // ignore external URLs
  if (url.indexOf('http') === 0) {
    return url;
  }

  // prepend `/` if it is not there
  const formattedUrl = url.indexOf('/') === 0 ? url : `/${url}`;

  return `${basePath || ''}${formattedUrl}`;
};

export const withBasePath = (url: string): string =>
  withPath(url, publicRuntimeConfig.basePath);

export const withAssetsPath = (url: string): string =>
  withPath(url, publicRuntimeConfig.assetsPath);
