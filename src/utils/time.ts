import dayjs from "dayjs";

type InputValue = Date | string | number | null;

export function fDateTime(date: InputValue, newFormat?: string) {
  const fm = newFormat || "DD MMM YYYY hh:mm A";
  return date ? dayjs(new Date(date)).format(fm) : "_";
}

export function fDate(date: InputValue, newFormat?: string) {
  const fm = newFormat || "DD MMM YYYY";
  return date ? dayjs(new Date(date)).format(fm) : "_";
}

export function fTime(date: InputValue, newFormat?: string) {
  const fm = newFormat || "hh:mm a";
  return date ? dayjs(new Date(date)).format(fm) : "_";
}
