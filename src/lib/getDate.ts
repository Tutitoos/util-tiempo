import Validate from "../Validate";
import type { GetDateProps } from "../types";

/**
 * Get the formatted date.
 *
 * @param options - The options for formatting the date.
 * @returns The formatted date as a string.
 */
const getDate = (options?: GetDateProps): string => {
  // Validate the timestamp and convert it to a Date object
  const timestamp = Validate.timestamp(options?.timestamp);
  const date = new Date(timestamp);

  // Get the formatted date string based on the locale and timezone
  const locale = Validate.locale(options?.local);
  const timezone = Validate.timezone(options?.timezone);
  const formattedDate = date.toLocaleDateString(locale, { timeZone: timezone });

  return formattedDate;
};

export default getDate;
