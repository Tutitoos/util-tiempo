import Validate from "../Validate";
import type { DateTypes } from "../types";
import { dateList } from "../util";

/**
 * Converts a time type string to milliseconds.
 * @param timeType - The time type string. Defaults to "0ms".
 * @returns The equivalent value in milliseconds.
 * @throws Error if the format is invalid.
 */
const getMs = (timeType = "0ms") => {
  // Extract the unit and unit type from the time type string
  const regexp =
    /^(\d+)(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)$/i.exec(
      timeType
    );

  // Throw an error if the format is invalid
  if (!regexp) throw new Error("El formato no es valido!");

  // Extract the unit and unit type from the regular expression result
  const [, unit, unitType] = regexp;

  // Convert unit to a number and validate it
  let result = Validate.unit(unit);

  // Multiply the unit by the corresponding unit value based on the unit type
  const type = unitType.toLowerCase() as DateTypes;
  if (dateList.year.aliases.includes(type)) result *= dateList.year.unit;
  if (dateList.month.aliases.includes(type)) result *= dateList.month.unit;
  if (dateList.week.aliases.includes(type)) result *= dateList.week.unit;
  if (dateList.day.aliases.includes(type)) result *= dateList.day.unit;
  if (dateList.hour.aliases.includes(type)) result *= dateList.hour.unit;
  if (dateList.minute.aliases.includes(type)) result *= dateList.minute.unit;
  if (dateList.second.aliases.includes(type)) result *= dateList.second.unit;

  // Return the converted value in milliseconds
  return result;
};

export default getMs;
