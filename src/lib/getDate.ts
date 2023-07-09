import Validate from "../Validate";
import { type GetDateProps } from "../types";

/**
 * Get the formatted date.
 * @param options - The options for formatting the date.
 * @returns The formatted date as a string.
 */
const getDate = (...options: Partial<GetDateProps>): string => {
  // Parse the options and validate the date
  const parseOptions = Validate.optionsDate(options);
  const timestamp = Validate.timestamp(parseOptions?.timestamp);

  // Create a new Date object with the given timestamp
  const date = new Date(timestamp);

  // Get the formatted date string based on the locale and timezone
  const locale = Validate.locale(parseOptions?.local);
  const timezone = Validate.timezone(parseOptions?.timezone);
  const formattedDate = date.toLocaleDateString(locale, { timeZone: timezone });

  return formattedDate;
};

export default getDate;
