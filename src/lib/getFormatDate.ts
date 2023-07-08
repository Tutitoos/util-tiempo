import Validate from "../Validate";
import type { GetFormatDate } from "../types";
import type { HourFormats, TimeFormats } from "../types/global";

/**
 * Returns a formatted date string based on the provided options.
 * If no options are provided, default values will be used.
 * @param options - Optional parameters for formatting the date
 * @returns The formatted date string
 */
const getFormatDate = (options?: GetFormatDate) => {
  // Validate and assign the timestamp, locale, timezone, hour12, and format options
  const timestamp = Validate.timestamp(options?.timestamp);
  const local = Validate.locale(options?.local ?? "pt-PT");
  const timezone = Validate.timezone(options?.timezone);
  const hour12 = Validate.hour12(options?.hour12);
  const format = options?.format ?? "{DD}/{MM}/{YYYY} {hh}:{mm}:{ss} {apm}";

  let content = format;
  let apm = "";

  // Loop through the hour format options
  for (const key of [{ hourLong: { format: "{hh}", hour: "2-digit" } }, { hourShort: { format: "{h}", hour: "2-digit" } }]) {
    for (const data of Object.values(key)) {
      // Get the hour value based on the timestamp, locale, timezone, and hour format option
      let hour = Number(
        new Date(timestamp).toLocaleString(local, {
          timeZone: timezone,
          ...(data as Intl.DateTimeFormatOptions),
        })
      );
      if (hour12) {
        // Determine the AM/PM value based on the hour
        apm = hour < 12 ? "AM" : "PM";
        // Convert the hour to 12-hour format
        hour = hour % 12 === 0 ? (hour % 12) + 12 : hour % 12;
      }

      // Replace the "{apm}" placeholder with the AM/PM value
      content = content.replace("{apm}", apm);
      const keyObject = Object.keys(key)[0] as HourFormats;

      // Replace the hour format placeholder with the formatted hour value
      content = content.replace(
        key[keyObject]?.format ?? "",
        String(hour).padStart((key[keyObject]?.format?.length ?? 0) - 2, "0")
      );
    }
  }

  // Loop through the other format options for minutes, seconds, days, months, and years
  for (const key of [
    { minuteLong: { format: "{mm}", minute: "2-digit" } },
    { minuteShort: { format: "{m}", minute: "2-digit" } },
    { secondLong: { format: "{ss}", second: "2-digit" } },
    { secondShort: { format: "{s}", second: "2-digit" } },
    { dayLong: { format: "{DD}", day: "2-digit" } },
    { dayShort: { format: "{D}", day: "numeric" } },
    { monthLong: { format: "{MM}", month: "2-digit" } },
    { monthShort: { format: "{M}", month: "numeric" } },
    { yearLong: { format: "{YYYY}", year: "numeric" } },
    { yearShort: { format: "{YY}", year: "2-digit" } },
  ]) {
    for (const data of Object.values(key)) {
      const keyObject = Object.keys(key)[0] as TimeFormats;

      // Replace the format placeholder with the formatted value based on the timestamp, locale, timezone, and format option
      content = content.replace(
        key[keyObject]?.format ?? "",
        new Date(timestamp)
          .toLocaleString(local, { timeZone: timezone, ...(data as Intl.DateTimeFormatOptions) })
          .padStart((key[keyObject]?.format?.length ?? 0) - 2, "0")
      );
    }
  }

  return content;
};

export default getFormatDate;
