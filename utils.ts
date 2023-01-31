export const referer = (
  methods: any,
  refs: string[],
  destination: number = 1
) => {
  const arr = methods.watch([...refs]);
  return arr.every((val: number) => val === destination);
};
