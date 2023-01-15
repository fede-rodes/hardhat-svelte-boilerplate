export function shortenAddress(address: Address) {
  const regex = /(0x.{4}).*(.{4})$/;
  const result = regex.exec(address);
  if (result == null) return;
  const [, start, end] = result;
  return `${start}…${end}`;
}
