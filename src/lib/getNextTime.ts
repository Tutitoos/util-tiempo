import Validate from "../Validate";
import { type GetNextTimeProps } from "../types";
import { formatDateFromString } from "../util";
import getMs from "./getMs";
import getTime from "./getTime";

/**
 * Get the next timestamp based on the provided options.
 * @param options - Array of options or a single options object.
 * @returns The next timestamp.
 * @throws Error if the time format is invalid.
 */
const getNextTime = (...options: Partial<GetNextTimeProps>): number => {
  // Parse the options and validate them.
  const parseOptions = Validate.optionsNextTime(options);
  const time = Validate.time(parseOptions?.time);
  const local = Validate.locale("pt-PT");
  const timezone = Validate.timezone(parseOptions?.timezone);

  // Validate the time format
  if (!/^(?:[01]\d|2[0-3]):(?:[0-5]\d)(?::[0-5]\d)?$/.test(time)) {
    throw new Error("Invalid time format, must be HH:MM:SS");
  }

  // Get the current date in the specified timezone
  const date = formatDateFromString(new Date().toLocaleString(local, { timeZone: timezone }));

  // Get the current timestamp in the specified timezone
  const timestamp = new Date(date).getTime();

  // Split the time into hour, minute, and second components
  const [hour, minute, second] = getTime({
    timestamp,
    timezone,
  }).split(":");

  // Calculate the base value by subtracting the milliseconds of hour, minute, and second from the timestamp
  let value = timestamp - getMs(`${hour}h`) - getMs(`${minute}m`) - getMs(`${second}s`);

  // Add the milliseconds of the input hour and minute to the value
  const inputArgs = time.split(":");
  value += getMs(`${inputArgs[0]}h`);
  value += getMs(`${inputArgs[1]}m`);

  // Add the milliseconds of the input second if present
  if (inputArgs.length === 3) value += getMs(`${inputArgs[2]}s`);

  // If the calculated value is in the past, add the milliseconds of a day to make it the next day
  if (value < Date.now()) value += getMs("1d");

  // Return the final value
  return value;
};

export default getNextTime;
