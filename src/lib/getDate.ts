import Validate from "../Validate";
import type { GetDateProps } from "../types";

const getDate = (options?: GetDateProps): string =>
  new Date(Validate.timestamp(options?.timestamp)).toLocaleDateString(
    Validate.locale(options?.local),
    {
      timeZone: Validate.timezone(options?.timezone),
    },
  );

export default getDate;
