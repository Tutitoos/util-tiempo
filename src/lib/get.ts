import Validate from "../Validate";
import type { DateTypes } from "../types";
import { dateList } from "../util";

/**
 * Get the value of a specific date type.
 * @param dateType - Optional. The date type to retrieve.
 * @returns The value of the specified date type.
 */
const get = (dateType?: DateTypes): number => {
  // Get the validated date type
  const type = Validate.dateType(dateType);
  // Get the current date and time
  const now = new Date();

  // Initialize the result variable
  let result = now.getMilliseconds();

  // Update the result based on the date type
  if (dateList.year.aliases.includes(type)) result = new Date().getFullYear();
  if (dateList.month.aliases.includes(type)) result = new Date().getMonth();
  if (dateList.week.aliases.includes(type)) result = new Date().getDay();
  if (dateList.day.aliases.includes(type)) result = new Date().getDate();
  if (dateList.hour.aliases.includes(type)) result = new Date().getHours();
  if (dateList.minute.aliases.includes(type)) result = new Date().getMinutes();
  if (dateList.second.aliases.includes(type)) result = new Date().getSeconds();

  // Return the result
  return result;
};

export default get;
