import client from '../../api/client';

const advertsBaseUrl = '/api/v1/adverts';

export const getAdverts = () => {
  let url = `${advertsBaseUrl}?`;
  return client.get(url);
};

export const getAdvert = (id) => {
  const url = `${advertsBaseUrl}/${id}?`;
  return client.get(url);
};

export const getTags = () => {
  const url = `${advertsBaseUrl}/tags`;
  return client.get(url);
};

export const createAdvert = advert => {
  const url = advertsBaseUrl;
  return client.post(url, advert);
};