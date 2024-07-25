import moment from "moment";

export const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const formatDate = (yourdate) => {
  const dt = moment(yourdate).fromNow();
  return dt;
};
