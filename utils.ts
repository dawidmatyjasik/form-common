export const referer = (
  methods: any,
  refs: string,
  destinations: number[] = [1]
) => {
  const value = methods.watch(refs);
  return destinations.some((el) => el === value);
};
