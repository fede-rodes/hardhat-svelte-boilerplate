import type { Address } from "../globals";

export function shortenAddress(address: Address) {
  const regex = /(0x.{4}).*(.{4})$/;
  const [, start, end] = regex.exec(address);
  return `${start}…${end}`;
}
