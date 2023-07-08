import Validate from "../Validate";
import type { GetFormatDate } from "../types";
import type { HourFormats, TimeFormats } from "../types/global";

const getFormatDate = (options?: GetFormatDate) => {
  const timestamp = Validate.timestamp(options?.timestamp);
  const local = Validate.locale(options?.local ?? "pt-PT");
  const timezone = Validate.timezone(options?.timezone);
  const hour12 = Validate.hour12(options?.hour12);
  const format = options!.format ?? "{DD}/{MM}/{YYYY} {hh}:{mm}:{ss} {apm}";

  let content = format;
  let apm = "";

  for (const key of [
    { hourLong: { format: "{hh}", hour: "2-digit" } },
    { hourShort: { format: "{h}", hour: "2-digit" } },
  ]) {
    for (const data of Object.values(key)) {
      let hour = Number(
        new Date(timestamp).toLocaleString(local, {
          timeZone: timezone,
          ...data,
        }),
      );
      if (hour12) {
        apm = hour < 12 ? "AM" : "PM";
        hour = hour % 12 === 0 ? (hour % 12) + 12 : hour % 12;
      }

      content = content.replace("{apm}", apm);
      const keyObject = Object.keys(key)[0] as HourFormats;

      content = content.replace(
        key[keyObject]!.format,
        String(hour).padStart(key[keyObject]!.format.length - 2, "0"),
      );
    }
  }

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

      content = content.replace(
        key[keyObject]!.format,
        new Date(timestamp)
          .toLocaleString(local, { timeZone: timezone, ...data })
          .padStart(key[keyObject]!.format.length - 2, "0"),
      );
    }
  }

  return content;
};

export default getFormatDate;
