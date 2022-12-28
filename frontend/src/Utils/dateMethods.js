/** Gets and formatting a current date. Returns stringify */
function stringifyNowDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  month += 1;
  let day = date.getDate();
  let formattedDay = "";
  day < 10 ? (formattedDay = `0${day}`) : (formattedDay = day);
  let formattedDate = `${year}-${month}-${formattedDay}`;
  return formattedDate;
}

const dateMethods = { stringifyNowDate };

export default dateMethods;
