import { employerEnum } from "../enum.js";

export const validator = {
  type: "object",
  properties: {
    [employerEnum.name]: {
      type: "string",
    },
    [employerEnum.street]: {
      type: "string",
    },
    [employerEnum.street_number]: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    [employerEnum.apartment_number]: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    [employerEnum.zip_code]: {
      type: "string",
      pattern: "$|[0-9]{2}(?:-[0-9]{3})?$",
    },
    [employerEnum.city]: {
      type: "string",
    },
    [employerEnum.nip]: {
      type: "string",
    },
    [employerEnum.first_name]: { type: "string", minLength: 3 },
    [employerEnum.last_name]: { type: "string", minLength: 3 },
    [employerEnum.phone_number]: {
      type: "string",
      pattern: "^$|^[0-9]{9}$",
    },
    [employerEnum.industry]: {
      type: "string",
    },
    [employerEnum.interns]: { type: "integer", enum: [0, 1] },
    [employerEnum.bur]: { type: "integer", enum: [0, 1] },
    [employerEnum.kfs]: { type: "integer", enum: [0, 1] },
    [employerEnum.commercial]: { type: "integer", enum: [0, 1] },
  },
};
