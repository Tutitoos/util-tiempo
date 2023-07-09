import Validate from "../Validate";
import type { GetTimeProps } from "../types";

/**
 * Get the current time in the specified format.
 * @param options - An array of options or an object containing options.
 * @returns The current time as a string.
 */
const getTime = (...options: Partial<GetTimeProps>): string => {
  // Parse the options and validate them.
  const parseOptions = Validate.optionsTime(options);
  const timestamp = Validate.timestamp(parseOptions?.timestamp);
  const locale = Validate.locale(parseOptions?.local);
  const timezone = Validate.timezone(parseOptions?.timezone);
  const hour12 = Validate.hour12(parseOptions?.hour12);

  // Get the current time using the specified options.
  const currentTime = new Date(timestamp).toLocaleTimeString(locale, {
    timeZone: timezone,
    hour12,
  });

  return currentTime;
};

export default getTime;
