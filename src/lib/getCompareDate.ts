import Validate from "../Validate";
import type { GetCompareDateProps, DateNameAliases } from "../types";
import { compareDataParse, dateList } from "../util";

/**
 * Returns a formatted string representing the difference between two timestamps.
 * @param options - An optional object containing the timestamps and format options.
 * @returns The formatted string representing the difference between the two timestamps.
 */
const getCompareDate = (...options: Partial<GetCompareDateProps>): string => {
  // Parse and validate the options
  const parseOptions = Validate.optionsCompareData(options);
  const { timestamp1, timestamp2 } = Validate.timestamps(parseOptions?.timestamp1, parseOptions?.timestamp2);
  const format = Validate.dateFormat(parseOptions?.format);

  // Calculate the elapsed time in milliseconds
  const elapsed = Math.abs(timestamp2 - timestamp1);

  // Initialize the result string and the remaining value
  let diff = "";
  let value = elapsed;

  // Iterate over each date type in the dateList
  for (const dateType in dateList) {
    const { unit, aliases } = dateList[dateType as DateNameAliases];

    // Check if the remaining value is greater than or equal to the current unit
    if (value >= unit) {
      // Calculate the number of units and get the alias for the current date type
      const valueParsed = Math.floor(value / unit);
      const name = aliases.at(-1);

      // Append the formatted string to the result based on the current date type
      switch (name) {
        case "y":
          diff += compareDataParse(valueParsed, format, dateList.year);
          break;
        case "mh":
          diff += compareDataParse(valueParsed, format, dateList.month);
          break;
        case "w":
          diff += compareDataParse(valueParsed, format, dateList.week);
          break;
        case "d":
          diff += compareDataParse(valueParsed, format, dateList.day);
          break;
        case "h":
          diff += compareDataParse(valueParsed, format, dateList.hour);
          break;
        case "m":
          diff += compareDataParse(valueParsed, format, dateList.minute);
          break;
        case "s":
          diff += compareDataParse(valueParsed, format, dateList.second);
          break;
        default: {
          if (elapsed < 1000) diff += compareDataParse(valueParsed, format, dateList.millisecond);
          break;
        }
      }

      // Add a separator if the remaining value is greater than or equal to 60000 (1 minute)
      if (value >= 60000) diff += format === "long" ? ", " : " ";

      // Update the remaining value
      value -= Math.floor(elapsed / unit) * unit;
    }
  }

  // If no date type matched, append the formatted string for milliseconds
  if (!diff?.length) diff += compareDataParse(elapsed, format, dateList.millisecond);

  // Return the final result string
  return diff;
};

export default getCompareDate;
