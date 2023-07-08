import Validate from "../Validate";
import type { DateTypes } from "../types/global";
import { dateTypesList, dateUnits } from "../util";

const getMs = (timeType = "0ms") => {
  const regexp =
    /^(\d+)(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)$/i.exec(
      timeType,
    );

  if (!regexp) throw new Error("El formato no es valido!");
  const [, unit, unitType] = regexp;
  let result = Validate.unit(unit);
  const type = unitType.toLowerCase() as DateTypes;

  if (dateTypesList[0].includes(type)) result *= dateUnits[0][1];
  if (dateTypesList[1].includes(type)) result *= dateUnits[1][1];
  if (dateTypesList[2].includes(type)) result *= dateUnits[2][1];
  if (dateTypesList[3].includes(type)) result *= dateUnits[3][1];
  if (dateTypesList[4].includes(type)) result *= dateUnits[4][1];
  if (dateTypesList[5].includes(type)) result *= dateUnits[5][1];
  if (dateTypesList[6].includes(type)) result *= dateUnits[6][1];

  return result;
};

export default getMs;
