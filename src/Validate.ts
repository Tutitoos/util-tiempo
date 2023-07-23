import {
  type GetTime,
  type GetNextTime,
  type GetFormatDate,
  type GetDate,
  type GetCompareDate,
  type DateFormats,
  type DateTypes,
  type Locales,
  type Timezones,
} from "./types";

class Validate {
  /**
   * Generate timestamps.
   * @param timestamp1 - The first timestamp. Defaults to the current timestamp.
   * @param timestamp2 - The second timestamp. If not provided, defaults to the current timestamp.
   * @returns An object containing timestamp1 and timestamp2.
   */
  static timestamps(
    timestamp1 = Date.now(),
    timestamp2?: number | null
  ): {
    timestamp1: number;
    timestamp2: number;
  } {
    let time1 = timestamp1;
    let time2 = timestamp2;
    const date = new Date(time1);
    const fullYear = date.getFullYear();

    // If the full year is less than or equal to 2000 and timestamp2 is not provided,
    // set timestamp2 to timestamp1 and timestamp1 to 0.
    if (fullYear <= 2000 && !time2) {
      time2 = time1;
      time1 = 0;
    }

    // If the full year is greater than 2000 and timestamp2 is not provided,
    // set timestamp2 to the current timestamp.
    if (fullYear > 2000 && !time2) {
      time2 = Date.now();
    }

    // If timestamp2 is not provided, set it to the current timestamp.
    if (!time2) time2 = Date.now();

    return {
      timestamp1: time1,
      timestamp2: time2,
    };
  }

  /**
   * Returns the current timestamp or the provided timestamp if not null.
   * If no timestamp is provided, the current timestamp is used.
   * @param timestamp - An optional timestamp to use.
   * @returns The current timestamp or the provided timestamp if not null.
   */
  static timestamp(timestamp?: number | null): number {
    // If timestamp is not null, return it. Otherwise, return the current timestamp.
    return timestamp ?? Date.now();
  }

  /**
   * Returns the locale if provided, otherwise defaults to "fr-FR".
   * @param locale - The desired locale.
   * @returns The selected locale.
   */
  static locale(locale?: Locales): Locales {
    return locale ?? "fr-FR";
  }

  /**
   * Returns the specified timezone or defaults to "Europe/Madrid".
   * @param timezone - The timezone to return.
   * @returns The specified timezone or "Europe/Madrid" if no timezone is provided.
   */
  static timezone(timezone?: Timezones): Timezones {
    return timezone ?? "Europe/Madrid";
  }

  /**
   * Returns a boolean value indicating whether the time format is 12-hour or not.
   * @param hour12 - Optional parameter indicating the desired time format. If not provided, defaults to false.
   * @returns A boolean value indicating whether the time format is 12-hour (true) or not (false).
   */
  static hour12(hour12?: boolean): boolean {
    return hour12 ?? false;
  }

  /**
   * Returns the date type.
   * @param dateType - The input date type.
   * @returns The date type. Defaults to "ms" if not provided.
   */
  static dateType(dateType?: DateTypes): DateTypes {
    return dateType ?? "ms";
  }

  /**
   * Converts a value to a number.
   * @param unit - The value to be converted.
   * @returns The converted number value.
   */
  static unit(unit?: number | string): number {
    // Use the Number function to convert the value to a number. If the conversion fails, return 0.
    return Number(unit) || 0;
  }

  /**
   * Returns the date format.
   * @param dateFormat Optional parameter to specify the date format.
   * @returns The date format.
   */
  static dateFormat(dateFormat?: DateFormats): DateFormats {
    // Use nullish coalescing operator to default to "long" if dateFormat is undefined or null
    return dateFormat ?? "long";
  }

  /**
   * Returns the time value if provided, otherwise an empty string.
   * @param time - Optional time value.
   * @returns The time value if provided, otherwise an empty string.
   */
  static time(time?: string): string {
    return time ?? "";
  }

  /**
   * Returns the next time based on the given options.
   * @param options - An array of options.
   * @returns The next time.
   */
  static optionsNextTime(options: any[]): GetNextTime {
    // If the first option is an object, return it directly.
    if (typeof options[0] === "object") return options[0] as GetNextTime;

    // Otherwise, create a new GetNextTime object with the first option as time and the second option as timezone.
    return {
      time: options[0] as string,
      timezone: options[1] as Timezones,
    };
  }

  /**
   * Converts options array to GetTimeProps object.
   * @param options - The options array.
   * @returns The GetTimeProps object.
   */
  static optionsTime(options: any[]): GetTime {
    // If the first element of options is an object, return it directly as GetTimeProps.
    if (typeof options[0] === "object") return options[0] as GetTime;

    // Otherwise, create a new GetTimeProps object using the elements of options array.
    return {
      timestamp: options[0] as number,
      local: options[1] as Locales,
      timezone: options[2] as Timezones,
      hour12: options[3] as boolean,
    };
  }

  /**
   * Converts an array of options to a GetFormatDate object.
   * @param options - The array of options.
   * @returns The GetFormatDate object.
   */
  static optionsFormatDate(options: any[]): GetFormatDate {
    // If the first element is an object, return it as a GetFormatDate object.
    if (typeof options[0] === "object") return options[0] as GetFormatDate;

    // Otherwise, create a new GetFormatDate object using the elements of the options array.
    return {
      timestamp: options[0] as number,
      format: options[1] as string,
      local: options[2] as Locales,
      timezone: options[3] as Timezones,
      hour12: options[4] as boolean,
    };
  }

  /**
   * Extracts the date options from the given array and returns an object with the extracted properties.
   * @param options - The array of options.
   * @returns An object with the extracted properties.
   */
  static optionsDate(options: any[]): GetDate {
    // If the first element of options is already an object, return it as it is.
    if (typeof options[0] === "object") return options[0] as GetDate;

    // Otherwise, create a new object with the extracted properties and return it.
    return {
      timestamp: options[0] as number,
      local: options[1] as Locales,
      timezone: options[2] as Timezones,
    };
  }

  /**
   * Extracts the compare data from the given options.
   * @param options - The options array containing the compare data.
   * @returns The compare data object.
   */
  static optionsCompareData(options: any[]): GetCompareDate {
    // If the first element of options is an object, return it as is
    if (typeof options[0] === "object") return options[0] as GetCompareDate;

    // Extract the compare data from the options array and return it as an object
    return {
      timestamp1: options[0] as number,
      timestamp2: options[1] as number,
      format: options[2] as DateFormats,
    };
  }
}

export default Validate;
