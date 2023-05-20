export const generateIdsForRequest = (ids: number[]) => {
  const createdIds = ids.reduce<{ [k: string]: number }>((acc, id, index) => {
    acc[`ids[${index}]`] = id;
    return acc;
  }, {});
  return {
    ids: createdIds,
    size: ids.length,
  };
};
