import { guardianEnum } from "../enum.js";

const dataPattern =
  "^[0-9]{4}-((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01])|(0[469]|11)-(0[1-9]|[12][0-9]|30)|(02)-(0[1-9]|[12][0-9]))T(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9]).[0-9]{3}Z$";

const uuidPattern =
  "^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$";

export const validator = {
  type: "object",
  properties: {
    [guardianEnum.first_name]: { type: "string" },
    [guardianEnum.last_name]: { type: "string" },
    [guardianEnum.phone_number]: {
      type: "string",
      pattern: "^$|^[0-9]{9}$",
    },
    [guardianEnum.email]: { type: "string", format: "email" },
  },
};
