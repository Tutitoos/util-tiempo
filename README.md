# util-tiempo

<div align="center">
<a href="https://www.npmjs.com/package/util-tiempo">
<img src="https://img.shields.io/npm/v/util-tiempo?label=Version&logo=npm&style=for-the-badge">
</a>
<a href="https://www.npmjs.com/package/util-tiempo">
<img alt="npm" src="https://img.shields.io/npm/dw/util-tiempo?logo=npm&style=for-the-badge">
</a><br><br>
</div>

## Funciones disponibles
* [`dataTime()`](#dataTime)
* [`dataDate()`](#dataDate)
* [`formatDate()`](#formatDate)
* [`diffDate()`](#formatDate)

<h2 id="ejemplo">Ejemplo</h2>

Te dejamos un ejemplo del código que te puede ser util a la hora de obtener los datos.

Usamos el siguiente *`timestamp`* como ejemplo para que puedas ver el formato de los datos que se obtienen.<br>
**- timestamp (segundos):** `1146747723`<br>
**- timestamp (milisegundos):** `1146747723000`<br>
**- Fecha y hora (GMT):** `4 de mayo de 2006 13:02:03`

```js
const { dataTime, dataDate, formatDate } = require("util-tiempo")

const tiempo = () => {
    return {
        timeMadrid: dataTime(),
        timeCanarias: dataTime(null, {timeZone: "Atlantic/Canary"}),
        dateMadrid: dataDate(),
        dateCanarias: dataDate(null, {timeZone: "Atlantic/Canary"}),
        timestampMadrid: dataTime(1146747723),
        timestampCanarias: dataTime(1146747723, {timeZone: "Atlantic/Canary"}),
        timestampNY: dataTime(1146747723, {local: "en-US", timeZone: "America/New_York", hour12: true}),
    }
}
```

**\- Resultados del código:**<br>
`tiempo().timeMadrid` => Hora actual en "Europe/Madrid"<br>
`tiempo().timeCanarias` => Hora actual en "Atlantic/Canary"<br>
`tiempo().dateMadrid` => Fecha actual en "Europe/Madrid"<br>
`tiempo().dateCanarias` => Fecha actual en "Atlantic/Canary"<br>
`tiempo().timestampMadrid` => `"15:02:03"`<br>
`tiempo().timestampCanarias` => `"14:02:03"`<br>
`tiempo().timestampNY` => `"9:02:03 AM"`<br>

## Uso de las funciones

<h3 id="dataTime">
<code>dataTime(&lt;tiempo&gt;, {local: &lt;formato&gt;, timeZone: &lt;zonahoraria&gt;, hour12: &lt;true/false&gt;})</code>
</h3>

Todos los argumentos son opcionales.<br>
Puedes ver como se usan los argumentos en el [**ejemplo**](#ejemplo).<br>***No escribas en los argumentos los símbolos `< >`.***
* **&lt;tiempo&gt;**
  * Si no se define o es `null` estará tomando el tiempo actual, es decir, `dataTime()` es equivalente a `dataTime(null)`.
  * El tiempo lo tienes que definir como *`timestamp`*, el código reconoce si está en *`segundos`* o *`milisegundos`*. Puedes obtener el *`timestamp`* de una fecha en concreta en esta [página](https://www.epochconverter.com/ 'Epoch & Unix Timestamp Conversion Tools').
  * Si defines un argumento que no sea el tiempo (*`local`*, *`timeZone`*, *`hour12`*), deberás de definir el argumento tiempo (*`null`* como el tiempo actual)
* **local: &lt;formato&gt;** 
  * Puedes revisar la lista de [**formatos locales**](#local).
  * Si no se define este argumento, tomará el formato *`hh:mm:ss`*
* **timeZone: &lt;zonahoraria&gt;** 
  * Puedes revisar la lista de [**zonas horarias**](#timezone).
  * Si no se define este argumento, tomará el tiempo de *`Europe/Madrid`*
* **hour12: &lt;true/false&gt;** 
  * Si quieres que el formato de la hora sea en *`12h`*, define este argumento como *`true`*.
  * Si quieres que el formato de la hora sea en *`24h`*, no definas el argumento o defínelo como *`false`*.

<h3 id="dataDate">
<code>dataDate(&lt;tiempo&gt;, {local: &lt;formato&gt;, timeZone: &lt;zonahoraria&gt;})</code>
</h3>

Todos los argumentos son opcionales.<br>
Puedes ver como se usan los argumentos en el [**ejemplo**](#ejemplo).<br>***No escribas en los argumentos los símbolos `< >`.***
* **&lt;tiempo&gt;**
  * Si no se define o es `null` estará tomando el tiempo actual, es decir, `dataTime()` es equivalente a `dataTime(null)`.
  * El tiempo lo tienes que definir como *`timestamp`*, el código reconoce si está en *`segundos`* o *`milisegundos`*. Puedes obtener el *`timestamp`* de una fecha en concreta en esta [página](https://www.epochconverter.com/ 'Epoch & Unix Timestamp Conversion Tools').
  * Si defines un argumento que no sea el tiempo (*`local`*, *`timeZone`*), deberás de definir el argumento tiempo (*`null`* como el tiempo actual)
* **local: &lt;formato&gt;** 
  * Puedes revisar la lista de [**formatos locales**](#local).
  * Si no se define este argumento, tomará el formato *`DD/MM/YYYY`*
* **timeZone: &lt;zonahoraria&gt;** 
  * Puedes revisar la lista de [**zonas horarias**](#timezone).
  * Si no se define este argumento, tomará el tiempo de *`Europe/Madrid`*

## Variables del tiempo

<h3 id="local">Formatos locales</h3>

<div>
<details>
<summary>
<spam >
[Mostrar/Ocultar]
</spam>
</summary>
<br>
<div align="center">
<p><b><code>4 de mayo de 2006 01:02:03 (24h)</code></b></p>

<table style="text-align: center">
<tr><th><center>local</th><th><center>Time (24h)</th><th><center>Time (12h)</th><th><center>Date</th></tr>
<tr><td>ar-SA</td><td> ٠١:٠٢:٠٣</td><td> ١:٠٢:٠٣ ص</td><td>٦‏/٤‏/١٤٢٧ هـ</td></tr>
<tr><td>bn-BD</td><td> ০১:০২:০৩</td><td> ১:০২:০৩ AM</td><td>৪/৫/২০০৬</td></tr>
<tr><td>bn-IN</td><td> ০১:০২:০৩</td><td> ১:০২:০৩ AM</td><td>৪/৫/২০০৬</td></tr>
<tr><td>cs-CZ</td><td> 1:02:03</td><td> 1:02:03 dop.</td><td>4. 5. 2006</td></tr>
<tr><td>da-DK</td><td> 01.02.03</td><td> 1.02.03 AM</td><td>4.5.2006</td></tr>
<tr><td>de-AT</td><td> 01:02:03</td><td> 1:02:03 AM</td><td>4.5.2006</td></tr>
<tr><td>de-CH</td><td> 01:02:03</td><td> 1:02:03 AM</td><td>4.5.2006</td></tr>
<tr><td>de-DE</td><td> 01:02:03</td><td> 1:02:03 AM</td><td>4.5.2006</td></tr>
<tr><td>el-GR</td><td> 01:02:03</td><td> 1:02:03 π.μ.</td><td>4/5/2006</td></tr>
<tr><td>en-AU</td><td> 01:02:03</td><td> 1:02:03 am</td><td>04/05/2006</td></tr>
<tr><td>en-CA</td><td> 01:02:03</td><td> 1:02:03 a.m.</td><td>2006-05-04</td></tr>
<tr><td>en-GB</td><td> 01:02:03</td><td> 1:02:03 am</td><td>04/05/2006</td></tr>
<tr><td>en-IE</td><td> 01:02:03</td><td> 1:02:03 a.m.</td><td>4/5/2006</td></tr>
<tr><td>en-IN</td><td> 01:02:03</td><td> 1:02:03 am</td><td>4/5/2006</td></tr>
<tr><td>en-NZ</td><td> 01:02:03</td><td> 1:02:03 am</td><td>4/05/2006</td></tr>
<tr><td>en-US</td><td> 01:02:03</td><td> 1:02:03 AM</td><td>5/4/2006</td></tr>
<tr><td>en-ZA</td><td> 01:02:03</td><td> 1:02:03 am</td><td>2006/05/04</td></tr>
<tr><td>es-AR</td><td> 01:02:03</td><td> 01:02:03</td><td>4/5/2006</td></tr>
<tr><td>es-CL</td><td> 01:02:03</td><td> 1:02:03 a. m.</td><td>04-05-2006</td></tr>
<tr><td>es-CO</td><td> 1:02:03</td><td> 1:02:03 a. m.</td><td>4/5/2006</td></tr>
<tr><td>es-ES</td><td> 1:02:03</td><td> 1:02:03 a. m.</td><td>4/5/2006</td></tr>
<tr><td>es-MX</td><td> 1:02:03</td><td> 1:02:03 a. m.</td><td>4/5/2006</td></tr>
<tr><td>es-US</td><td> 01:02:03</td><td> 1:02:03 a. m.</td><td>4/5/2006</td></tr>
<tr><td>fi-FI</td><td> 1.02.03</td><td> 1.02.03 ap.</td><td>4.5.2006</td></tr>
<tr><td>fr-BE</td><td> 01:02:03</td><td> 1:02:03 AM</td><td>04/05/2006</td></tr>
<tr><td>fr-CA</td><td> 01 h 02 min 03 s</td><td> 1 h 02 min 03 s a.m.</td><td>2006-05-04</td></tr>
<tr><td>fr-CH</td><td> 01:02:03</td><td> 1:02:03 AM</td><td>04.05.2006</td></tr>
<tr><td>fr-FR</td><td> 01:02:03</td><td> 1:02:03 AM</td><td>04/05/2006</td></tr>
<tr><td>he-IL</td><td> 1:02:03</td><td> 1:02:03 לפנה״צ</td><td>4.5.2006</td></tr>
<tr><td>hi-IN</td><td> 01:02:03</td><td> 1:02:03 am</td><td>4/5/2006</td></tr>
<tr><td>hu-HU</td><td> 1:02:03</td><td> de. 1:02:03</td><td>2006. 05. 04.</td></tr>
<tr><td>id-ID</td><td> 01.02.03</td><td> 1.02.03 AM</td><td>4/5/2006</td></tr>
<tr><td>it-CH</td><td> 01:02:03</td><td> 1:02:03 AM</td><td>4/5/2006</td></tr>
<tr><td>it-IT</td><td> 01:02:03</td><td> 1:02:03 AM</td><td>4/5/2006</td></tr>
<tr><td>ja-JP</td><td> 1:02:03</td><td> 午前1:02:03</td><td>2006/5/4</td></tr>
<tr><td>ko-KR</td><td> 1시 2분 3초</td><td> 오전 1:02:03</td><td>2006. 5. 4.</td></tr>
<tr><td>nl-BE</td><td> 01:02:03</td><td> 1:02:03 a.m.</td><td>4/5/2006</td></tr>
<tr><td>nl-NL</td><td> 01:02:03</td><td> 1:02:03 a.m.</td><td>4-5-2006</td></tr>
<tr><td>no-NO</td><td> 01:02:03</td><td> 1:02:03 a.m.</td><td>4.5.2006</td></tr>
<tr><td>pl-PL</td><td> 01:02:03</td><td> 1:02:03 AM</td><td>4.05.2006</td></tr>
<tr><td>pt-BR</td><td> 01:02:03</td><td> 1:02:03 AM</td><td>04/05/2006</td></tr>
<tr><td>pt-PT</td><td> 01:02:03</td><td> 1:02:03 da manhã</td><td>04/05/2006</td></tr>
<tr><td>ro-RO</td><td> 01:02:03</td><td> 1:02:03 a.m.</td><td>04.05.2006</td></tr>
<tr><td>ru-RU</td><td> 01:02:03</td><td> 1:02:03 AM</td><td>04.05.2006</td></tr>
<tr><td>sk-SK</td><td> 1:02:03</td><td> 1:02:03 AM</td><td>4. 5. 2006</td></tr>
<tr><td>sv-SE</td><td> 01:02:03</td><td> 1:02:03 fm</td><td>2006-05-04</td></tr>
<tr><td>ta-IN</td><td> 01:02:03</td><td> முற்பகல் 1:02:03</td><td>4/5/2006</td></tr>
<tr><td>ta-LK</td><td> 01:02:03</td><td> முற்பகல் 1:02:03</td><td>4/5/2006</td></tr>
<tr><td>th-TH</td><td> 01:02:03</td><td> 1:02:03 ก่อนเที่ยง</td><td>4/5/2549</td></tr>
<tr><td>tr-TR</td><td> 01:02:03</td><td> ÖÖ 1:02:03</td><td>04.05.2006</td></tr>
<tr><td>zh-CN</td><td> 01:02:03</td><td> 上午1:02:03</td><td>2006/5/4</td></tr>
<tr><td>zh-HK</td><td> 01:02:03</td><td> 上午1:02:03</td><td>4/5/2006</td></tr>
<tr><td>zh-TW</td><td> 01:02:03</td><td> 上午1:02:03</td><td>2006/5/4</td></tr>
</table>
</div>
</details>
</div>

<h3 id="timezone">Zonas horarias</h3>

<div>
<details>
<summary>
[Mostrar/Ocultar]
</summary>
<br>

<table style="text-align: center" align="center">
<tr><th><center>timeZone</th><th><center>Portion of country covered
</th><th><center>UTC offset ±hh:mm</th><th><center>UTC DST offset ±hh:mm</th></tr>
<tr><td>Africa/Abidjan</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Africa/Accra</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Africa/Addis_Ababa</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Africa/Algiers</td><td></td><td>+01:00</td><td>+01:00</td></tr>
<tr><td>Africa/Asmara</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Africa/Asmera</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Africa/Bamako</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Africa/Bangui</td><td></td><td>+01:00</td><td>+01:00</td></tr>
<tr><td>Africa/Banjul</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Africa/Bissau</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Africa/Blantyre</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Brazzaville</td><td></td><td>+01:00</td><td>+01:00</td></tr>
<tr><td>Africa/Bujumbura</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Cairo</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Casablanca</td><td></td><td>+01:00</td><td>+00:00</td></tr>
<tr><td>Africa/Ceuta</td><td>Ceuta, Melilla</td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Africa/Conakry</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Africa/Dakar</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Africa/Dar_es_Salaam</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Africa/Djibouti</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Africa/Douala</td><td></td><td>+01:00</td><td>+01:00</td></tr>
<tr><td>Africa/El_Aaiun</td><td></td><td>+01:00</td><td>+00:00</td></tr>
<tr><td>Africa/Freetown</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Africa/Gaborone</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Harare</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Johannesburg</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Juba</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Kampala</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Africa/Khartoum</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Kigali</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Kinshasa</td><td>Dem. Rep. of Congo (west)</td><td>+01:00</td><td>+01:00</td></tr>
<tr><td>Africa/Lagos</td><td>West Africa Time</td><td>+01:00</td><td>+01:00</td></tr>
<tr><td>Africa/Libreville</td><td></td><td>+01:00</td><td>+01:00</td></tr>
<tr><td>Africa/Lome</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Africa/Luanda</td><td></td><td>+01:00</td><td>+01:00</td></tr>
<tr><td>Africa/Lubumbashi</td><td>Dem. Rep. of Congo (east)</td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Lusaka</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Malabo</td><td></td><td>+01:00</td><td>+01:00</td></tr>
<tr><td>Africa/Maputo</td><td>Central Africa Time</td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Maseru</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Mbabane</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Mogadishu</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Africa/Monrovia</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Africa/Nairobi</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Africa/Ndjamena</td><td></td><td>+01:00</td><td>+01:00</td></tr>
<tr><td>Africa/Niamey</td><td></td><td>+01:00</td><td>+01:00</td></tr>
<tr><td>Africa/Nouakchott</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Africa/Ouagadougou</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Africa/Porto-Novo</td><td></td><td>+01:00</td><td>+01:00</td></tr>
<tr><td>Africa/Sao_Tome</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Africa/Timbuktu</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Africa/Tripoli</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Africa/Tunis</td><td></td><td>+01:00</td><td>+01:00</td></tr>
<tr><td>Africa/Windhoek</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>America/Adak</td><td>Aleutian Islands</td><td>-10:00</td><td>-09:00</td></tr>
<tr><td>America/Anchorage</td><td>Alaska (most areas)</td><td>-09:00</td><td>-08:00</td></tr>
<tr><td>America/Anguilla</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Antigua</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Araguaina</td><td>Tocantins</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Argentina/Buenos_Aires</td><td>Buenos Aires (BA, CF)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Argentina/Catamarca</td><td>Catamarca (CT); Chubut (CH)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Argentina/ComodRivadavia</td><td></td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Argentina/Cordoba</td><td>Argentina (most areas: CB, CC, CN, ER, FM, MN, SE, SF)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Argentina/Jujuy</td><td>Jujuy (JY)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Argentina/La_Rioja</td><td>La Rioja (LR)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Argentina/Mendoza</td><td>Mendoza (MZ)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Argentina/Rio_Gallegos</td><td>Santa Cruz (SC)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Argentina/Salta</td><td>Salta (SA, LP, NQ, RN)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Argentina/San_Juan</td><td>San Juan (SJ)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Argentina/San_Luis</td><td>San Luis (SL)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Argentina/Tucuman</td><td>Tucumán (TM)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Argentina/Ushuaia</td><td>Tierra del Fuego (TF)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Aruba</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Asuncion</td><td></td><td>-04:00</td><td>-03:00</td></tr>
<tr><td>America/Atikokan</td><td>EST - ON (Atikokan); NU (Coral H)</td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>America/Atka</td><td></td><td>-10:00</td><td>-09:00</td></tr>
<tr><td>America/Bahia</td><td>Bahia</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Bahia_Banderas</td><td>Central Time - Bahía de Banderas</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Barbados</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Belem</td><td>Pará (east); Amapá</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Belize</td><td></td><td>-06:00</td><td>-06:00</td></tr>
<tr><td>America/Blanc-Sablon</td><td>AST - QC (Lower North Shore)</td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Boa_Vista</td><td>Roraima</td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Bogota</td><td></td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>America/Boise</td><td>Mountain - ID (south); OR (east)</td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>America/Buenos_Aires</td><td></td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Cambridge_Bay</td><td>Mountain - NU (west)</td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>America/Campo_Grande</td><td>Mato Grosso do Sul</td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Cancun</td><td>Eastern Standard Time - Quintana Roo</td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>America/Caracas</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Catamarca</td><td></td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Cayenne</td><td></td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Cayman</td><td></td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>America/Chicago</td><td>Central (most areas)</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Chihuahua</td><td>Mountain Time - Chihuahua (most areas)</td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>America/Coral_Harbour</td><td></td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>America/Cordoba</td><td></td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Costa_Rica</td><td></td><td>-06:00</td><td>-06:00</td></tr>
<tr><td>America/Creston</td><td>MST - BC (Creston)</td><td>-07:00</td><td>-07:00</td></tr>
<tr><td>America/Cuiaba</td><td>Mato Grosso</td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Curacao</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Danmarkshavn</td><td>National Park (east coast)</td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>America/Dawson</td><td>MST - Yukon (west)</td><td>-07:00</td><td>-07:00</td></tr>
<tr><td>America/Dawson_Creek</td><td>MST - BC (Dawson Cr, Ft St John)</td><td>-07:00</td><td>-07:00</td></tr>
<tr><td>America/Denver</td><td>Mountain (most areas)</td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>America/Detroit</td><td>Eastern - MI (most areas)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Dominica</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Edmonton</td><td>Mountain - AB; BC (E); SK (W)</td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>America/Eirunepe</td><td>Amazonas (west)</td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>America/El_Salvador</td><td></td><td>-06:00</td><td>-06:00</td></tr>
<tr><td>America/Ensenada</td><td></td><td>-08:00</td><td>-07:00</td></tr>
<tr><td>America/Fort_Nelson</td><td>MST - BC (Ft Nelson)</td><td>-07:00</td><td>-07:00</td></tr>
<tr><td>America/Fort_Wayne</td><td></td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Fortaleza</td><td>Brazil (northeast: MA, PI, CE, RN, PB)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Glace_Bay</td><td>Atlantic - NS (Cape Breton)</td><td>-04:00</td><td>-03:00</td></tr>
<tr><td>America/Godthab</td><td></td><td>-03:00</td><td>-02:00</td></tr>
<tr><td>America/Goose_Bay</td><td>Atlantic - Labrador (most areas)</td><td>-04:00</td><td>-03:00</td></tr>
<tr><td>America/Grand_Turk</td><td></td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Grenada</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Guadeloupe</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Guatemala</td><td></td><td>-06:00</td><td>-06:00</td></tr>
<tr><td>America/Guayaquil</td><td>Ecuador (mainland)</td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>America/Guyana</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Halifax</td><td>Atlantic - NS (most areas); PE</td><td>-04:00</td><td>-03:00</td></tr>
<tr><td>America/Havana</td><td></td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Hermosillo</td><td>Mountain Standard Time - Sonora</td><td>-07:00</td><td>-07:00</td></tr>
<tr><td>America/Indiana/Indianapolis</td><td>Eastern - IN (most areas)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Indiana/Knox</td><td>Central - IN (Starke)</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Indiana/Marengo</td><td>Eastern - IN (Crawford)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Indiana/Petersburg</td><td>Eastern - IN (Pike)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Indiana/Tell_City</td><td>Central - IN (Perry)</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Indiana/Vevay</td><td>Eastern - IN (Switzerland)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Indiana/Vincennes</td><td>Eastern - IN (Da, Du, K, Mn)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Indiana/Winamac</td><td>Eastern - IN (Pulaski)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Indianapolis</td><td></td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Inuvik</td><td>Mountain - NT (west)</td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>America/Iqaluit</td><td>Eastern - NU (most east areas)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Jamaica</td><td></td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>America/Jujuy</td><td></td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Juneau</td><td>Alaska - Juneau area</td><td>-09:00</td><td>-08:00</td></tr>
<tr><td>America/Kentucky/Louisville</td><td>Eastern - KY (Louisville area)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Kentucky/Monticello</td><td>Eastern - KY (Wayne)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Knox_IN</td><td></td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Kralendijk</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/La_Paz</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Lima</td><td></td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>America/Los_Angeles</td><td>Pacific</td><td>-08:00</td><td>-07:00</td></tr>
<tr><td>America/Louisville</td><td></td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Lower_Princes</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Maceio</td><td>Alagoas, Sergipe</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Managua</td><td></td><td>-06:00</td><td>-06:00</td></tr>
<tr><td>America/Manaus</td><td>Amazonas (east)</td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Marigot</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Martinique</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Matamoros</td><td>Central Time US - Coahuila, Nuevo León, Tamaulipas (US border)</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Mazatlan</td><td>Mountain Time - Baja California Sur, Nayarit, Sinaloa</td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>America/Mendoza</td><td></td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Menominee</td><td>Central - MI (Wisconsin border)</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Merida</td><td>Central Time - Campeche, Yucatán</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Metlakatla</td><td>Alaska - Annette Island</td><td>-09:00</td><td>-08:00</td></tr>
<tr><td>America/Mexico_City</td><td>Central Time</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Miquelon</td><td></td><td>-03:00</td><td>-02:00</td></tr>
<tr><td>America/Moncton</td><td>Atlantic - New Brunswick</td><td>-04:00</td><td>-03:00</td></tr>
<tr><td>America/Monterrey</td><td>Central Time - Durango; Coahuila, Nuevo León, Tamaulipas (most areas)</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Montevideo</td><td></td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Montreal</td><td></td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Montserrat</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Nassau</td><td></td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/New_York</td><td>Eastern (most areas)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Nipigon</td><td>Eastern - ON, QC (no DST 1967-73)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Nome</td><td>Alaska (west)</td><td>-09:00</td><td>-08:00</td></tr>
<tr><td>America/Noronha</td><td>Atlantic islands</td><td>-02:00</td><td>-02:00</td></tr>
<tr><td>America/North_Dakota/Beulah</td><td>Central - ND (Mercer)</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/North_Dakota/Center</td><td>Central - ND (Oliver)</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/North_Dakota/New_Salem</td><td>Central - ND (Morton rural)</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Nuuk</td><td>Greenland (most areas)</td><td>-03:00</td><td>-02:00</td></tr>
<tr><td>America/Ojinaga</td><td>Mountain Time US - Chihuahua (US border)</td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>America/Panama</td><td></td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>America/Pangnirtung</td><td>Eastern - NU (Pangnirtung)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Paramaribo</td><td></td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Phoenix</td><td>MST - Arizona (except Navajo)</td><td>-07:00</td><td>-07:00</td></tr>
<tr><td>America/Port-au-Prince</td><td></td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Port_of_Spain</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Porto_Acre</td><td></td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>America/Porto_Velho</td><td>Rondônia</td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Puerto_Rico</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Punta_Arenas</td><td>Region of Magallanes</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Rainy_River</td><td>Central - ON (Rainy R, Ft Frances)</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Rankin_Inlet</td><td>Central - NU (central)</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Recife</td><td>Pernambuco</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Regina</td><td>CST - SK (most areas)</td><td>-06:00</td><td>-06:00</td></tr>
<tr><td>America/Resolute</td><td>Central - NU (Resolute)</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Rio_Branco</td><td>Acre</td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>America/Rosario</td><td></td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Santa_Isabel</td><td></td><td>-08:00</td><td>-07:00</td></tr>
<tr><td>America/Santarem</td><td>Pará (west)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Santiago</td><td>Chile (most areas)</td><td>-04:00</td><td>-03:00</td></tr>
<tr><td>America/Santo_Domingo</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Sao_Paulo</td><td>Brazil (southeast: GO, DF, MG, ES, RJ, SP, PR, SC, RS)</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>America/Scoresbysund</td><td>Scoresbysund/Ittoqqortoormiit</td><td>-01:00</td><td>+00:00</td></tr>
<tr><td>America/Shiprock</td><td></td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>America/Sitka</td><td>Alaska - Sitka area</td><td>-09:00</td><td>-08:00</td></tr>
<tr><td>America/St_Barthelemy</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/St_Johns</td><td>Newfoundland; Labrador (southeast)</td><td>-03:30</td><td>-02:30</td></tr>
<tr><td>America/St_Kitts</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/St_Lucia</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/St_Thomas</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/St_Vincent</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Swift_Current</td><td>CST - SK (midwest)</td><td>-06:00</td><td>-06:00</td></tr>
<tr><td>America/Tegucigalpa</td><td></td><td>-06:00</td><td>-06:00</td></tr>
<tr><td>America/Thule</td><td>Thule/Pituffik</td><td>-04:00</td><td>-03:00</td></tr>
<tr><td>America/Thunder_Bay</td><td>Eastern - ON (Thunder Bay)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Tijuana</td><td>Pacific Time US - Baja California</td><td>-08:00</td><td>-07:00</td></tr>
<tr><td>America/Toronto</td><td>Eastern - ON, QC (most areas)</td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>America/Tortola</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Vancouver</td><td>Pacific - BC (most areas)</td><td>-08:00</td><td>-07:00</td></tr>
<tr><td>America/Virgin</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>America/Whitehorse</td><td>MST - Yukon (east)</td><td>-07:00</td><td>-07:00</td></tr>
<tr><td>America/Winnipeg</td><td>Central - ON (west); Manitoba</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>America/Yakutat</td><td>Alaska - Yakutat</td><td>-09:00</td><td>-08:00</td></tr>
<tr><td>America/Yellowknife</td><td>Mountain - NT (central)</td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>Antarctica/Casey</td><td>Casey</td><td>+11:00</td><td>+11:00</td></tr>
<tr><td>Antarctica/Davis</td><td>Davis</td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Antarctica/DumontDUrville</td><td>Dumont-d&#39;Urville</td><td>+10:00</td><td>+10:00</td></tr>
<tr><td>Antarctica/Macquarie</td><td>Macquarie Island</td><td>+10:00</td><td>+11:00</td></tr>
<tr><td>Antarctica/Mawson</td><td>Mawson</td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Antarctica/McMurdo</td><td>New Zealand time - McMurdo, South Pole</td><td>+12:00</td><td>+13:00</td></tr>
<tr><td>Antarctica/Palmer</td><td>Palmer</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>Antarctica/Rothera</td><td>Rothera</td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>Antarctica/South_Pole</td><td></td><td>+12:00</td><td>+13:00</td></tr>
<tr><td>Antarctica/Syowa</td><td>Syowa</td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Antarctica/Troll</td><td>Troll</td><td>+00:00</td><td>+02:00</td></tr>
<tr><td>Antarctica/Vostok</td><td>Vostok</td><td>+06:00</td><td>+06:00</td></tr>
<tr><td>Arctic/Longyearbyen</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Asia/Aden</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Asia/Almaty</td><td>Kazakhstan (most areas)</td><td>+06:00</td><td>+06:00</td></tr>
<tr><td>Asia/Amman</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Asia/Anadyr</td><td>MSK+09 - Bering Sea</td><td>+12:00</td><td>+12:00</td></tr>
<tr><td>Asia/Aqtau</td><td>Mangghysta-/Mankistau</td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Asia/Aqtobe</td><td>Aqtöbe/Aktobe</td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Asia/Ashgabat</td><td></td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Asia/Ashkhabad</td><td></td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Asia/Atyrau</td><td>Atyra-/Atirau/Gur&#39;yev</td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Asia/Baghdad</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Asia/Bahrain</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Asia/Baku</td><td></td><td>+04:00</td><td>+04:00</td></tr>
<tr><td>Asia/Bangkok</td><td>Indochina (most areas)</td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Asia/Barnaul</td><td>MSK+04 - Altai</td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Asia/Beirut</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Asia/Bishkek</td><td></td><td>+06:00</td><td>+06:00</td></tr>
<tr><td>Asia/Brunei</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Calcutta</td><td></td><td>+05:30</td><td>+05:30</td></tr>
<tr><td>Asia/Chita</td><td>MSK+06 - Zabaykalsky</td><td>+09:00</td><td>+09:00</td></tr>
<tr><td>Asia/Choibalsan</td><td>Dornod, Sükhbaatar</td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Chongqing</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Chungking</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Colombo</td><td></td><td>+05:30</td><td>+05:30</td></tr>
<tr><td>Asia/Dacca</td><td></td><td>+06:00</td><td>+06:00</td></tr>
<tr><td>Asia/Damascus</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Asia/Dhaka</td><td></td><td>+06:00</td><td>+06:00</td></tr>
<tr><td>Asia/Dili</td><td></td><td>+09:00</td><td>+09:00</td></tr>
<tr><td>Asia/Dubai</td><td></td><td>+04:00</td><td>+04:00</td></tr>
<tr><td>Asia/Dushanbe</td><td></td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Asia/Famagusta</td><td>Northern Cyprus</td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Asia/Gaza</td><td>Gaza Strip</td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Asia/Harbin</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Hebron</td><td>West Bank</td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Asia/Ho_Chi_Minh</td><td>Vietnam (south)</td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Asia/Hong_Kong</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Hovd</td><td>Bayan-Ölgii, Govi-Altai, Hovd, Uvs, Zavkhan</td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Asia/Irkutsk</td><td>MSK+05 - Irkutsk, Buryatia</td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Istanbul</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Asia/Jakarta</td><td>Java, Sumatra</td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Asia/Jayapura</td><td>New Guinea (West Papua / Irian Jaya); Malukus/Moluccas</td><td>+09:00</td><td>+09:00</td></tr>
<tr><td>Asia/Jerusalem</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Asia/Kabul</td><td></td><td>+04:30</td><td>+04:30</td></tr>
<tr><td>Asia/Kamchatka</td><td>MSK+09 - Kamchatka</td><td>+12:00</td><td>+12:00</td></tr>
<tr><td>Asia/Karachi</td><td></td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Asia/Kashgar</td><td></td><td>+06:00</td><td>+06:00</td></tr>
<tr><td>Asia/Kathmandu</td><td></td><td>+05:45</td><td>+05:45</td></tr>
<tr><td>Asia/Katmandu</td><td></td><td>+05:45</td><td>+05:45</td></tr>
<tr><td>Asia/Khandyga</td><td>MSK+06 - Tomponsky, Ust-Maysky</td><td>+09:00</td><td>+09:00</td></tr>
<tr><td>Asia/Kolkata</td><td></td><td>+05:30</td><td>+05:30</td></tr>
<tr><td>Asia/Krasnoyarsk</td><td>MSK+04 - Krasnoyarsk area</td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Asia/Kuala_Lumpur</td><td>Malaysia (peninsula)</td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Kuching</td><td>Sabah, Sarawak</td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Kuwait</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Asia/Macao</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Macau</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Magadan</td><td>MSK+08 - Magadan</td><td>+11:00</td><td>+11:00</td></tr>
<tr><td>Asia/Makassar</td><td>Borneo (east, south); Sulawesi/Celebes, Bali, Nusa Tengarra; Timor (west)</td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Manila</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Muscat</td><td></td><td>+04:00</td><td>+04:00</td></tr>
<tr><td>Asia/Nicosia</td><td>Cyprus (most areas)</td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Asia/Novokuznetsk</td><td>MSK+04 - Kemerovo</td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Asia/Novosibirsk</td><td>MSK+04 - Novosibirsk</td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Asia/Omsk</td><td>MSK+03 - Omsk</td><td>+06:00</td><td>+06:00</td></tr>
<tr><td>Asia/Oral</td><td>West Kazakhstan</td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Asia/Phnom_Penh</td><td></td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Asia/Pontianak</td><td>Borneo (west, central)</td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Asia/Pyongyang</td><td></td><td>+09:00</td><td>+09:00</td></tr>
<tr><td>Asia/Qatar</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Asia/Qostanay</td><td>Qostanay/Kostanay/Kustanay</td><td>+06:00</td><td>+06:00</td></tr>
<tr><td>Asia/Qyzylorda</td><td>Qyzylorda/Kyzylorda/Kzyl-Orda</td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Asia/Rangoon</td><td></td><td>+06:30</td><td>+06:30</td></tr>
<tr><td>Asia/Riyadh</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Asia/Saigon</td><td></td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Asia/Sakhalin</td><td>MSK+08 - Sakhalin Island</td><td>+11:00</td><td>+11:00</td></tr>
<tr><td>Asia/Samarkand</td><td>Uzbekistan (west)</td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Asia/Seoul</td><td></td><td>+09:00</td><td>+09:00</td></tr>
<tr><td>Asia/Shanghai</td><td>Beijing Time</td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Singapore</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Srednekolymsk</td><td>MSK+08 - Sakha (E); North Kuril Is</td><td>+11:00</td><td>+11:00</td></tr>
<tr><td>Asia/Taipei</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Tashkent</td><td>Uzbekistan (east)</td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Asia/Tbilisi</td><td></td><td>+04:00</td><td>+04:00</td></tr>
<tr><td>Asia/Tehran</td><td></td><td>+03:30</td><td>+04:30</td></tr>
<tr><td>Asia/Tel_Aviv</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Asia/Thimbu</td><td></td><td>+06:00</td><td>+06:00</td></tr>
<tr><td>Asia/Thimphu</td><td></td><td>+06:00</td><td>+06:00</td></tr>
<tr><td>Asia/Tokyo</td><td></td><td>+09:00</td><td>+09:00</td></tr>
<tr><td>Asia/Tomsk</td><td>MSK+04 - Tomsk</td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Asia/Ujung_Pandang</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Ulaanbaatar</td><td>Mongolia (most areas)</td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Ulan_Bator</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Asia/Urumqi</td><td>Xinjiang Time</td><td>+06:00</td><td>+06:00</td></tr>
<tr><td>Asia/Ust-Nera</td><td>MSK+07 - Oymyakonsky</td><td>+10:00</td><td>+10:00</td></tr>
<tr><td>Asia/Vientiane</td><td></td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Asia/Vladivostok</td><td>MSK+07 - Amur River</td><td>+10:00</td><td>+10:00</td></tr>
<tr><td>Asia/Yakutsk</td><td>MSK+06 - Lena River</td><td>+09:00</td><td>+09:00</td></tr>
<tr><td>Asia/Yangon</td><td></td><td>+06:30</td><td>+06:30</td></tr>
<tr><td>Asia/Yekaterinburg</td><td>MSK+02 - Urals</td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Asia/Yerevan</td><td></td><td>+04:00</td><td>+04:00</td></tr>
<tr><td>Atlantic/Azores</td><td>Azores</td><td>-01:00</td><td>+00:00</td></tr>
<tr><td>Atlantic/Bermuda</td><td></td><td>-04:00</td><td>-03:00</td></tr>
<tr><td>Atlantic/Canary</td><td>Canary Islands</td><td>+00:00</td><td>+01:00</td></tr>
<tr><td>Atlantic/Cape_Verde</td><td></td><td>-01:00</td><td>-01:00</td></tr>
<tr><td>Atlantic/Faeroe</td><td></td><td>+00:00</td><td>+01:00</td></tr>
<tr><td>Atlantic/Faroe</td><td></td><td>+00:00</td><td>+01:00</td></tr>
<tr><td>Atlantic/Jan_Mayen</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Atlantic/Madeira</td><td>Madeira Islands</td><td>+00:00</td><td>+01:00</td></tr>
<tr><td>Atlantic/Reykjavik</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Atlantic/South_Georgia</td><td></td><td>-02:00</td><td>-02:00</td></tr>
<tr><td>Atlantic/St_Helena</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Atlantic/Stanley</td><td></td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>Australia/ACT</td><td></td><td>+10:00</td><td>+11:00</td></tr>
<tr><td>Australia/Adelaide</td><td>South Australia</td><td>+09:30</td><td>+10:30</td></tr>
<tr><td>Australia/Brisbane</td><td>Queensland (most areas)</td><td>+10:00</td><td>+10:00</td></tr>
<tr><td>Australia/Broken_Hill</td><td>New South Wales (Yancowinna)</td><td>+09:30</td><td>+10:30</td></tr>
<tr><td>Australia/Canberra</td><td></td><td>+10:00</td><td>+11:00</td></tr>
<tr><td>Australia/Currie</td><td></td><td>+10:00</td><td>+11:00</td></tr>
<tr><td>Australia/Darwin</td><td>Northern Territory</td><td>+09:30</td><td>+09:30</td></tr>
<tr><td>Australia/Eucla</td><td>Western Australia (Eucla)</td><td>+08:45</td><td>+08:45</td></tr>
<tr><td>Australia/Hobart</td><td>Tasmania</td><td>+10:00</td><td>+11:00</td></tr>
<tr><td>Australia/LHI</td><td></td><td>+10:30</td><td>+11:00</td></tr>
<tr><td>Australia/Lindeman</td><td>Queensland (Whitsunday Islands)</td><td>+10:00</td><td>+10:00</td></tr>
<tr><td>Australia/Lord_Howe</td><td>Lord Howe Island</td><td>+10:30</td><td>+11:00</td></tr>
<tr><td>Australia/Melbourne</td><td>Victoria</td><td>+10:00</td><td>+11:00</td></tr>
<tr><td>Australia/North</td><td></td><td>+09:30</td><td>+09:30</td></tr>
<tr><td>Australia/NSW</td><td></td><td>+10:00</td><td>+11:00</td></tr>
<tr><td>Australia/Perth</td><td>Western Australia (most areas)</td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Australia/Queensland</td><td></td><td>+10:00</td><td>+10:00</td></tr>
<tr><td>Australia/South</td><td></td><td>+09:30</td><td>+10:30</td></tr>
<tr><td>Australia/Sydney</td><td>New South Wales (most areas)</td><td>+10:00</td><td>+11:00</td></tr>
<tr><td>Australia/Tasmania</td><td></td><td>+10:00</td><td>+11:00</td></tr>
<tr><td>Australia/Victoria</td><td></td><td>+10:00</td><td>+11:00</td></tr>
<tr><td>Australia/West</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Australia/Yancowinna</td><td></td><td>+09:30</td><td>+10:30</td></tr>
<tr><td>Brazil/Acre</td><td></td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>Brazil/DeNoronha</td><td></td><td>-02:00</td><td>-02:00</td></tr>
<tr><td>Brazil/East</td><td></td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>Brazil/West</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>Canada/Atlantic</td><td></td><td>-04:00</td><td>-03:00</td></tr>
<tr><td>Canada/Central</td><td></td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>Canada/Eastern</td><td></td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>Canada/Mountain</td><td></td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>Canada/Newfoundland</td><td></td><td>-03:30</td><td>-02:30</td></tr>
<tr><td>Canada/Pacific</td><td></td><td>-08:00</td><td>-07:00</td></tr>
<tr><td>Canada/Saskatchewan</td><td></td><td>-06:00</td><td>-06:00</td></tr>
<tr><td>Canada/Yukon</td><td></td><td>-07:00</td><td>-07:00</td></tr>
<tr><td>CET</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Chile/Continental</td><td></td><td>-04:00</td><td>-03:00</td></tr>
<tr><td>Chile/EasterIsland</td><td></td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>CST6CDT</td><td></td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>Cuba</td><td></td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>EET</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Egypt</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Eire</td><td></td><td>+01:00</td><td>+00:00</td></tr>
<tr><td>EST</td><td></td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>EST5EDT</td><td></td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>Etc/GMT</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Etc/GMT+0</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Etc/GMT+1</td><td></td><td>-01:00</td><td>-01:00</td></tr>
<tr><td>Etc/GMT+10</td><td></td><td>-10:00</td><td>-10:00</td></tr>
<tr><td>Etc/GMT+11</td><td></td><td>-11:00</td><td>-11:00</td></tr>
<tr><td>Etc/GMT+12</td><td></td><td>-12:00</td><td>-12:00</td></tr>
<tr><td>Etc/GMT+2</td><td></td><td>-02:00</td><td>-02:00</td></tr>
<tr><td>Etc/GMT+3</td><td></td><td>-03:00</td><td>-03:00</td></tr>
<tr><td>Etc/GMT+4</td><td></td><td>-04:00</td><td>-04:00</td></tr>
<tr><td>Etc/GMT+5</td><td></td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>Etc/GMT+6</td><td></td><td>-06:00</td><td>-06:00</td></tr>
<tr><td>Etc/GMT+7</td><td></td><td>-07:00</td><td>-07:00</td></tr>
<tr><td>Etc/GMT+8</td><td></td><td>-08:00</td><td>-08:00</td></tr>
<tr><td>Etc/GMT+9</td><td></td><td>-09:00</td><td>-09:00</td></tr>
<tr><td>Etc/GMT-0</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Etc/GMT-1</td><td></td><td>+01:00</td><td>+01:00</td></tr>
<tr><td>Etc/GMT-10</td><td></td><td>+10:00</td><td>+10:00</td></tr>
<tr><td>Etc/GMT-11</td><td></td><td>+11:00</td><td>+11:00</td></tr>
<tr><td>Etc/GMT-12</td><td></td><td>+12:00</td><td>+12:00</td></tr>
<tr><td>Etc/GMT-13</td><td></td><td>+13:00</td><td>+13:00</td></tr>
<tr><td>Etc/GMT-14</td><td></td><td>+14:00</td><td>+14:00</td></tr>
<tr><td>Etc/GMT-2</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Etc/GMT-3</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Etc/GMT-4</td><td></td><td>+04:00</td><td>+04:00</td></tr>
<tr><td>Etc/GMT-5</td><td></td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Etc/GMT-6</td><td></td><td>+06:00</td><td>+06:00</td></tr>
<tr><td>Etc/GMT-7</td><td></td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Etc/GMT-8</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Etc/GMT-9</td><td></td><td>+09:00</td><td>+09:00</td></tr>
<tr><td>Etc/GMT0</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Etc/Greenwich</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Etc/UCT</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Etc/Universal</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Etc/UTC</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Etc/Zulu</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Europe/Amsterdam</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Andorra</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Astrakhan</td><td>MSK+01 - Astrakhan</td><td>+04:00</td><td>+04:00</td></tr>
<tr><td>Europe/Athens</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Europe/Belfast</td><td></td><td>+00:00</td><td>+01:00</td></tr>
<tr><td>Europe/Belgrade</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Berlin</td><td>Germany (most areas)</td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Bratislava</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Brussels</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Bucharest</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Europe/Budapest</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Busingen</td><td>Busingen</td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Chisinau</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Europe/Copenhagen</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Dublin</td><td></td><td>+01:00</td><td>+00:00</td></tr>
<tr><td>Europe/Gibraltar</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Guernsey</td><td></td><td>+00:00</td><td>+01:00</td></tr>
<tr><td>Europe/Helsinki</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Europe/Isle_of_Man</td><td></td><td>+00:00</td><td>+01:00</td></tr>
<tr><td>Europe/Istanbul</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Europe/Jersey</td><td></td><td>+00:00</td><td>+01:00</td></tr>
<tr><td>Europe/Kaliningrad</td><td>MSK-01 - Kaliningrad</td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>Europe/Kiev</td><td>Ukraine (most areas)</td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Europe/Kirov</td><td>MSK+00 - Kirov</td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Europe/Lisbon</td><td>Portugal (mainland)</td><td>+00:00</td><td>+01:00</td></tr>
<tr><td>Europe/Ljubljana</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/London</td><td></td><td>+00:00</td><td>+01:00</td></tr>
<tr><td>Europe/Luxembourg</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Madrid</td><td>Spain (mainland)</td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Malta</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Mariehamn</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Europe/Minsk</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Europe/Monaco</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Moscow</td><td>MSK+00 - Moscow area</td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Europe/Nicosia</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Europe/Oslo</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Paris</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Podgorica</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Prague</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Riga</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Europe/Rome</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Samara</td><td>MSK+01 - Samara, Udmurtia</td><td>+04:00</td><td>+04:00</td></tr>
<tr><td>Europe/San_Marino</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Sarajevo</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Saratov</td><td>MSK+01 - Saratov</td><td>+04:00</td><td>+04:00</td></tr>
<tr><td>Europe/Simferopol</td><td>Crimea</td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Europe/Skopje</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Sofia</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Europe/Stockholm</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Tallinn</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Europe/Tirane</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Tiraspol</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Europe/Ulyanovsk</td><td>MSK+01 - Ulyanovsk</td><td>+04:00</td><td>+04:00</td></tr>
<tr><td>Europe/Uzhgorod</td><td>Transcarpathia</td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Europe/Vaduz</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Vatican</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Vienna</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Vilnius</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Europe/Volgograd</td><td>MSK+00 - Volgograd</td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Europe/Warsaw</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Zagreb</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Europe/Zaporozhye</td><td>Zaporozhye and east Lugansk</td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Europe/Zurich</td><td>Swiss time</td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Factory</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>GB</td><td></td><td>+00:00</td><td>+01:00</td></tr>
<tr><td>GB-Eire</td><td></td><td>+00:00</td><td>+01:00</td></tr>
<tr><td>GMT</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>GMT+0</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>GMT-0</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>GMT0</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Greenwich</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Hongkong</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>HST</td><td></td><td>-10:00</td><td>-10:00</td></tr>
<tr><td>Iceland</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Indian/Antananarivo</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Indian/Chagos</td><td></td><td>+06:00</td><td>+06:00</td></tr>
<tr><td>Indian/Christmas</td><td></td><td>+07:00</td><td>+07:00</td></tr>
<tr><td>Indian/Cocos</td><td></td><td>+06:30</td><td>+06:30</td></tr>
<tr><td>Indian/Comoro</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Indian/Kerguelen</td><td>Kerguelen, St Paul Island, Amsterdam Island</td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Indian/Mahe</td><td></td><td>+04:00</td><td>+04:00</td></tr>
<tr><td>Indian/Maldives</td><td></td><td>+05:00</td><td>+05:00</td></tr>
<tr><td>Indian/Mauritius</td><td></td><td>+04:00</td><td>+04:00</td></tr>
<tr><td>Indian/Mayotte</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>Indian/Reunion</td><td>Réunion, Crozet, Scattered Islands</td><td>+04:00</td><td>+04:00</td></tr>
<tr><td>Iran</td><td></td><td>+03:30</td><td>+04:30</td></tr>
<tr><td>Israel</td><td></td><td>+02:00</td><td>+03:00</td></tr>
<tr><td>Jamaica</td><td></td><td>-05:00</td><td>-05:00</td></tr>
<tr><td>Japan</td><td></td><td>+09:00</td><td>+09:00</td></tr>
<tr><td>Kwajalein</td><td></td><td>+12:00</td><td>+12:00</td></tr>
<tr><td>Libya</td><td></td><td>+02:00</td><td>+02:00</td></tr>
<tr><td>MET</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Mexico/BajaNorte</td><td></td><td>-08:00</td><td>-07:00</td></tr>
<tr><td>Mexico/BajaSur</td><td></td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>Mexico/General</td><td></td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>MST</td><td></td><td>-07:00</td><td>-07:00</td></tr>
<tr><td>MST7MDT</td><td></td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>Navajo</td><td></td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>NZ</td><td></td><td>+12:00</td><td>+13:00</td></tr>
<tr><td>NZ-CHAT</td><td></td><td>+12:45</td><td>+13:45</td></tr>
<tr><td>Pacific/Apia</td><td></td><td>+13:00</td><td>+14:00</td></tr>
<tr><td>Pacific/Auckland</td><td>New Zealand time</td><td>+12:00</td><td>+13:00</td></tr>
<tr><td>Pacific/Bougainville</td><td>Bougainville</td><td>+11:00</td><td>+11:00</td></tr>
<tr><td>Pacific/Chatham</td><td>Chatham Islands</td><td>+12:45</td><td>+13:45</td></tr>
<tr><td>Pacific/Chuuk</td><td>Chuuk/Truk, Yap</td><td>+10:00</td><td>+10:00</td></tr>
<tr><td>Pacific/Easter</td><td>Easter Island</td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>Pacific/Efate</td><td></td><td>+11:00</td><td>+11:00</td></tr>
<tr><td>Pacific/Enderbury</td><td>Phoenix Islands</td><td>+13:00</td><td>+13:00</td></tr>
<tr><td>Pacific/Fakaofo</td><td></td><td>+13:00</td><td>+13:00</td></tr>
<tr><td>Pacific/Fiji</td><td></td><td>+12:00</td><td>+13:00</td></tr>
<tr><td>Pacific/Funafuti</td><td></td><td>+12:00</td><td>+12:00</td></tr>
<tr><td>Pacific/Galapagos</td><td>Galápagos Islands</td><td>-06:00</td><td>-06:00</td></tr>
<tr><td>Pacific/Gambier</td><td>Gambier Islands</td><td>-09:00</td><td>-09:00</td></tr>
<tr><td>Pacific/Guadalcanal</td><td></td><td>+11:00</td><td>+11:00</td></tr>
<tr><td>Pacific/Guam</td><td></td><td>+10:00</td><td>+10:00</td></tr>
<tr><td>Pacific/Honolulu</td><td>Hawaii</td><td>-10:00</td><td>-10:00</td></tr>
<tr><td>Pacific/Johnston</td><td></td><td>-10:00</td><td>-10:00</td></tr>
<tr><td>Pacific/Kiritimati</td><td>Line Islands</td><td>+14:00</td><td>+14:00</td></tr>
<tr><td>Pacific/Kosrae</td><td>Kosrae</td><td>+11:00</td><td>+11:00</td></tr>
<tr><td>Pacific/Kwajalein</td><td>Kwajalein</td><td>+12:00</td><td>+12:00</td></tr>
<tr><td>Pacific/Majuro</td><td>Marshall Islands (most areas)</td><td>+12:00</td><td>+12:00</td></tr>
<tr><td>Pacific/Marquesas</td><td>Marquesas Islands</td><td>-09:30</td><td>-09:30</td></tr>
<tr><td>Pacific/Midway</td><td>Midway Islands</td><td>-11:00</td><td>-11:00</td></tr>
<tr><td>Pacific/Nauru</td><td></td><td>+12:00</td><td>+12:00</td></tr>
<tr><td>Pacific/Niue</td><td></td><td>-11:00</td><td>-11:00</td></tr>
<tr><td>Pacific/Norfolk</td><td></td><td>+11:00</td><td>+12:00</td></tr>
<tr><td>Pacific/Noumea</td><td></td><td>+11:00</td><td>+11:00</td></tr>
<tr><td>Pacific/Pago_Pago</td><td>Samoa, Midway</td><td>-11:00</td><td>-11:00</td></tr>
<tr><td>Pacific/Palau</td><td></td><td>+09:00</td><td>+09:00</td></tr>
<tr><td>Pacific/Pitcairn</td><td></td><td>-08:00</td><td>-08:00</td></tr>
<tr><td>Pacific/Pohnpei</td><td>Pohnpei/Ponape</td><td>+11:00</td><td>+11:00</td></tr>
<tr><td>Pacific/Ponape</td><td></td><td>+11:00</td><td>+11:00</td></tr>
<tr><td>Pacific/Port_Moresby</td><td>Papua New Guinea (most areas)</td><td>+10:00</td><td>+10:00</td></tr>
<tr><td>Pacific/Rarotonga</td><td></td><td>-10:00</td><td>-10:00</td></tr>
<tr><td>Pacific/Saipan</td><td></td><td>+10:00</td><td>+10:00</td></tr>
<tr><td>Pacific/Samoa</td><td></td><td>-11:00</td><td>-11:00</td></tr>
<tr><td>Pacific/Tahiti</td><td>Society Islands</td><td>-10:00</td><td>-10:00</td></tr>
<tr><td>Pacific/Tarawa</td><td>Gilbert Islands</td><td>+12:00</td><td>+12:00</td></tr>
<tr><td>Pacific/Tongatapu</td><td></td><td>+13:00</td><td>+13:00</td></tr>
<tr><td>Pacific/Truk</td><td></td><td>+10:00</td><td>+10:00</td></tr>
<tr><td>Pacific/Wake</td><td>Wake Island</td><td>+12:00</td><td>+12:00</td></tr>
<tr><td>Pacific/Wallis</td><td></td><td>+12:00</td><td>+12:00</td></tr>
<tr><td>Pacific/Yap</td><td></td><td>+10:00</td><td>+10:00</td></tr>
<tr><td>Poland</td><td></td><td>+01:00</td><td>+02:00</td></tr>
<tr><td>Portugal</td><td></td><td>+00:00</td><td>+01:00</td></tr>
<tr><td>PRC</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>PST8PDT</td><td></td><td>-08:00</td><td>-07:00</td></tr>
<tr><td>ROC</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>ROK</td><td></td><td>+09:00</td><td>+09:00</td></tr>
<tr><td>Singapore</td><td></td><td>+08:00</td><td>+08:00</td></tr>
<tr><td>Turkey</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>UCT</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>Universal</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>US/Alaska</td><td></td><td>-09:00</td><td>-08:00</td></tr>
<tr><td>US/Aleutian</td><td></td><td>-10:00</td><td>-09:00</td></tr>
<tr><td>US/Arizona</td><td></td><td>-07:00</td><td>-07:00</td></tr>
<tr><td>US/Central</td><td></td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>US/East-Indiana</td><td></td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>US/Eastern</td><td></td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>US/Hawaii</td><td></td><td>-10:00</td><td>-10:00</td></tr>
<tr><td>US/Indiana-Starke</td><td></td><td>-06:00</td><td>-05:00</td></tr>
<tr><td>US/Michigan</td><td></td><td>-05:00</td><td>-04:00</td></tr>
<tr><td>US/Mountain</td><td></td><td>-07:00</td><td>-06:00</td></tr>
<tr><td>US/Pacific</td><td></td><td>-08:00</td><td>-07:00</td></tr>
<tr><td>US/Samoa</td><td></td><td>-11:00</td><td>-11:00</td></tr>
<tr><td>UTC</td><td></td><td>+00:00</td><td>+00:00</td></tr>
<tr><td>W-SU</td><td></td><td>+03:00</td><td>+03:00</td></tr>
<tr><td>WET</td><td></td><td>+00:00</td><td>+01:00</td></tr>
<tr><td>Zulu</td><td></td><td>+00:00</td><td>+00:00</td></tr>
</table>
</details>
</div>

