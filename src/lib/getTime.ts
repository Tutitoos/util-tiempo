import Validate from "../Validate";
import type { GetTimeProps } from "../types";

/**
 * Get the current time as a string.
 *
 * @param options - Optional parameters for customizing the time output.
 * @returns The current time as a string.
 */
const getTime = (options?: GetTimeProps): string => {
  // Validate and normalize the timestamp, locale, timezone, and hour12 parameters.
  const timestamp = Validate.timestamp(options?.timestamp);
  const locale = Validate.locale(options?.local);
  const timezone = Validate.timezone(options?.timezone);
  const hour12 = Validate.hour12(options?.hour12);

  // Get the current time using the validated parameters.
  const currentTime = new Date(timestamp).toLocaleTimeString(locale, {
    timeZone: timezone,
    hour12,
  });

  // Return the current time as a string.
  return currentTime;
};

export default getTime;
