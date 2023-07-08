import Validate from "../Validate";
import type { DateTypes } from "../types/global";
import { dateTypesList } from "../util";

const get = (dateType?: DateTypes): number => {
  const type = Validate.dateType(dateType);
  let result = new Date().getMilliseconds();

  if (dateTypesList[0].includes(type)) result = new Date().getFullYear();
  if (dateTypesList[1].includes(type)) result = new Date().getMonth();
  if (dateTypesList[2].includes(type)) result = new Date().getDay();
  if (dateTypesList[3].includes(type)) result = new Date().getDate();
  if (dateTypesList[4].includes(type)) result = new Date().getHours();
  if (dateTypesList[5].includes(type)) result = new Date().getMinutes();
  if (dateTypesList[6].includes(type)) result = new Date().getSeconds();

  return result;
};

export default get;
