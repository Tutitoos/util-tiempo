import Validate from "../Validate";
import type { GetCompareDate } from "../types";
import { dateFormat, dateUnits } from "../util";

const getCompareDate = (options?: GetCompareDate): string => {
  const { timestamp1, timestamp2 } = Validate.timestamps(
    options?.timestamp1,
    options?.timestamp2,
  );
  const format = Validate.dateFormat(options?.format);

  const elapsed = Math.abs(timestamp2 - timestamp1);

  let diff = "";
  let value = elapsed;
  for (const [unit, milisecondsInUnit] of dateUnits) {
    if (value >= milisecondsInUnit) {
      const valueParsed = Math.floor(value / milisecondsInUnit);

      switch (unit) {
        case "year":
          diff += dateFormat({
            format,
            unit: valueParsed,
            unitType: "año",
            plural: "s",
            short: "y",
          });
          break;
        case "month":
          diff += dateFormat({
            format,
            unit: valueParsed,
            unitType: "mes",
            plural: "es",
            short: "mh",
          });
          break;
        case "week":
          diff += dateFormat({
            format,
            unit: valueParsed,
            unitType: "semana",
            plural: "s",
            short: "w",
          });
          break;
        case "day":
          diff += dateFormat({
            format,
            unit: valueParsed,
            unitType: "día",
            plural: "s",
            short: "d",
          });
          break;
        case "hour":
          diff += dateFormat({
            format,
            unit: valueParsed,
            unitType: "hora",
            plural: "s",
            short: "h",
          });
          break;
        case "minute":
          diff += dateFormat({
            format,
            unit: valueParsed,
            unitType: "minuto",
            plural: "s",
            short: "m",
          });
          break;
        case "second":
          diff += dateFormat({
            format,
            unit: valueParsed,
            unitType: "segundo",
            plural: "s",
            short: "s",
          });
          break;
        case "millisecond":
        default: {
          diff += dateFormat({
            format,
            unit: valueParsed,
            unitType: "milisegundo",
            plural: "s",
            short: "ms",
          });
          break;
        }
      }

      value -= Math.floor(elapsed / milisecondsInUnit) * milisecondsInUnit;

      if (value >= 60000) {
        diff += format === "long" ? ", " : " ";
      }
    }
  }

  return diff;
};

export default getCompareDate;
