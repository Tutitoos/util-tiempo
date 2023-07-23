import utilTiempo from "./index";

const runTestGet = true;
const runTestGetCompareDate = true;
const runTestGetDate = true;
const runTestGetFormatDate = true;
const runTestGetMs = true;
const runTestGetTime = true;
const runTestGetNextTime = true;

if (runTestGet) {
  console.log("===============[GET]===============");
  console.log("[TEST 1] ('year') => ", utilTiempo.get("year"));
  console.log("[TEST 2] ('month') => ", utilTiempo.get("month"));
  console.log("[TEST 3] ('week') => ", utilTiempo.get("week"));
  console.log("[TEST 4] ('day') => ", utilTiempo.get("day"));
  console.log("[TEST 5] ('hour') => ", utilTiempo.get("hour"));
  console.log("[TEST 6] ('minute') => ", utilTiempo.get("minute"));
  console.log("[TEST 7] ('second') => ", utilTiempo.get("second"));
  console.log("[TEST 8] ('millisecond') => ", utilTiempo.get("millisecond"));
}

if (runTestGetCompareDate) {
  console.log("===============[GET_COMPARE_DATE]===============");
  console.log("[TEST 1] (empty) => ", utilTiempo.getCompareDate());
  console.log("[TEST 2] (1000) => ", utilTiempo.getCompareDate(1000));
  console.log("[TEST 3] (1000, 5000) => ", utilTiempo.getCompareDate(1000, 5000));
  console.log("[TEST 4] (1000, 5000, 'long') => ", utilTiempo.getCompareDate(1000, 5000, "long"));
  console.log("[TEST 5] (1000, 5000, 'short') => ", utilTiempo.getCompareDate(1000, 5000, "short"));
  console.log(
    "[TEST 6] ({timestamp1: 1000,timestamp2: 5000,format: 'long'}) => ",
    utilTiempo.getCompareDate({
      timestamp1: 1000,
      timestamp2: 5000,
      format: "long",
    })
  );
  console.log(
    "[TEST 7] ({timestamp1: 1000,timestamp2: 5000,format: 'short'}) => ",
    utilTiempo.getCompareDate({
      timestamp1: 1000,
      timestamp2: 5000,
      format: "short",
    })
  );
}

if (runTestGetDate) {
  console.log("===============[GET_DATE]===============");
  console.log("[TEST 1] (empty) => ", utilTiempo.getDate());
  console.log("[TEST 2] (1683299105000) => ", utilTiempo.getDate(1683299105000));
  console.log(
    "[TEST 3] (1683299105000, 'es-ES', 'Europe/Madrid') => ",
    utilTiempo.getDate(1683299105000, "es-ES", "Europe/Madrid")
  );
  console.log(
    "[TEST 4] ({timestamp: 1683299105000,local: 'es-ES',timezone: 'Europe/Madrid'}) => ",
    utilTiempo.getDate({
      timestamp: 1683299105000,
      local: "es-ES",
      timezone: "Europe/Madrid",
    })
  );
}

if (runTestGetFormatDate) {
  console.log("===============[GET_FORMAT_DATE]===============");
  console.log("[TEST 1]", utilTiempo.getFormatDate());
  console.log("[TEST 2] (1683299105000)", utilTiempo.getFormatDate(1683299105000));
  console.log(
    "[TEST 3] (1683299105000, '{DD}/{MM}/{YYYY} {hh}:{mm}:{ss} {apm}', 'es-ES', 'Europe/Madrid', true) => ",
    utilTiempo.getFormatDate(1683299105000, "{DD}/{MM}/{YYYY} {hh}:{mm}:{ss} {apm}", "es-ES", "Europe/Madrid", true)
  );
  console.log(
    "[TEST 4] (1683299105000, '{DD}/{MM}/{YYYY} {hh}:{mm}:{ss} {apm}', 'es-ES', 'Europe/Madrid', false) => ",
    utilTiempo.getFormatDate(1683299105000, "{DD}/{MM}/{YYYY} {hh}:{mm}:{ss} {apm}", "es-ES", "Europe/Madrid", false)
  );
  console.log(
    "[TEST 5] ({timestamp: 1683299105000, format: '{DD}/{MM}/{YYYY} {hh}:{mm}:{ss} {apm}', local: 'es-ES', timezone: 'Europe/Madrid', hour12: true}) => ",
    utilTiempo.getFormatDate({
      timestamp: 1683299105000,
      format: "{DD}/{MM}/{YYYY} {hh}:{mm}:{ss} {apm}",
      local: "es-ES",
      timezone: "Europe/Madrid",
      hour12: true,
    })
  );
  console.log(
    "[TEST 6] ({timestamp: 1683299105000, format: '{DD}/{MM}/{YYYY} {hh}:{mm}:{ss} {apm}', local: 'es-ES', timezone: 'Europe/Madrid', hour12: false}) => ",
    utilTiempo.getFormatDate({
      timestamp: 1683299105000,
      format: "{DD}/{MM}/{YYYY} {hh}:{mm}:{ss} {apm}",
      local: "es-ES",
      timezone: "Europe/Madrid",
      hour12: false,
    })
  );
}

if (runTestGetMs) {
  console.log("===============[GET_MS]===============");
  console.log("[TEST 1] ('1year') => ", utilTiempo.getMs("1year"));
  console.log("[TEST 2] ('1month') => ", utilTiempo.getMs("1month"));
  console.log("[TEST 3] ('1week') => ", utilTiempo.getMs("1week"));
  console.log("[TEST 4] ('1day') => ", utilTiempo.getMs("1day"));
  console.log("[TEST 5] ('1hour') => ", utilTiempo.getMs("1hour"));
  console.log("[TEST 6] ('1minute') => ", utilTiempo.getMs("1minute"));
  console.log("[TEST 7] ('1second') => ", utilTiempo.getMs("1second"));
  console.log("[TEST 8] ('1millisecond') => ", utilTiempo.getMs("1millisecond"));
}

if (runTestGetTime) {
  console.log("===============[GET_TIME]===============");
  console.log("[TEST 1] (empty) => ", utilTiempo.getTime());
  console.log("[TEST 2] (1683299105000) => ", utilTiempo.getTime(1683299105000));
  console.log(
    "[TEST 3] (1683299105000, 'es-ES', 'Europe/Madrid', true) => ",
    utilTiempo.getTime(1683299105000, "es-ES", "Europe/Madrid", true)
  );
  console.log(
    "[TEST 4] (1683299105000, 'es-ES', 'Europe/Madrid', false) => ",
    utilTiempo.getTime(1683299105000, "es-ES", "Europe/Madrid", false)
  );
  console.log(
    "[TEST 5] ({timestamp: 1683299105000,local: 'es-ES',timezone: 'Europe/Madrid', hour12: true}) => ",
    utilTiempo.getTime({
      timestamp: 1683299105000,
      local: "es-ES",
      timezone: "Europe/Madrid",
      hour12: true,
    })
  );
  console.log(
    "[TEST 6] ({timestamp: 1683299105000,local: 'es-ES',timezone: 'Europe/Madrid', hour12: false}) => ",
    utilTiempo.getTime({
      timestamp: 1683299105000,
      local: "es-ES",
      timezone: "Europe/Madrid",
      hour12: false,
    })
  );
}

if (runTestGetNextTime) {
  console.log("===============[GET_NEXT_TIME]===============");
  console.log("[TEST 1] ('10:00:00') => ", utilTiempo.getNextTime("10:00:00"));
  console.log("[TEST 2] ('10:00:00', 'Europe/Madrid') => ", utilTiempo.getNextTime("10:00:00", "Europe/Madrid"));
  console.log(
    "[TEST 3] ({time: '10:00:00', timezone: 'Europe/Madrid'}) => ",
    utilTiempo.getNextTime({
      time: "10:00:00",
      timezone: "Europe/Madrid",
    })
  );
}
