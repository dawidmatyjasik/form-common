export const referer = (methods: any, refs: string[]) => {
  const arr = methods.watch([...refs]);
  return arr.every((val: number) => val === 0);
};
