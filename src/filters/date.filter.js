export default function dateFilter(value, format = "date") {
  const options = {};

  if (format.includes("date")) {
    this.day = "2-digit";
    this.month = "long";
    this.year = "numeric";
  }

  if (format.includes("time")) {
    this.hour = "2-digit";
    this.minute = "2-digit";
    this.second = "2-digit";
  }

  return new Intl.DateTimeFormat("ru-RU", options).format(value);
}
