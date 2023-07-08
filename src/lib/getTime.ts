import Validate from "../Validate";
import type { GetTimeProps } from "../types";

const getTime = (options?: GetTimeProps): string =>
  new Date(Validate.timestamp(options?.timestamp)).toLocaleTimeString(
    Validate.locale(options?.local),
    {
      timeZone: Validate.timezone(options?.timezone),
      hour12: Validate.hour12(options?.hour12),
    },
  );

export default getTime;
