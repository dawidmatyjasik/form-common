const PERSONAL_ROUTES = Object.freeze({
  GET: "/personal/get",
  POST: "/personal/post",
  GET_ALL: "/personal/getAll",
  DELETE: "/personal/delete",
  UPDATE: "/personal/update",
});

const PARTICIPANT_ROUTES = Object.freeze({
  GET: "/participant/get",
  POST: "/participant/post",
  GET_ALL: "/participant/getAll",
  DELETE: "/participant/delete",
  UPDATE: "/participant/update",
});

// const TRAINING_ROUTES = Object.freeze({
//   GET: "/training/get",
//   POST: "/training/post",
//   GET_ALL: "/training/getAll",
//   DELETE: "/training/delete",
//   UPDATE: "/training/update",
// });

export const ROUTES = Object.freeze({
  PERSONAL: PERSONAL_ROUTES,
  PARTICIPANT: PARTICIPANT_ROUTES,
  // TRAINING: TRAINING_ROUTES,
});
