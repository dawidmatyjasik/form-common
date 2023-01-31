import { newProjectEnum } from "../enum";

const dataPattern =
  "^[0-9]{4}-((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01])|(0[469]|11)-(0[1-9]|[12][0-9]|30)|(02)-(0[1-9]|[12][0-9]))T(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9]).[0-9]{3}Z$";

export const validator = {
  type: "object",
  properties: {
    [newProjectEnum.name]: { type: "string", minLength: 3 },
    [newProjectEnum.number]: { type: "string" },
    [newProjectEnum.beneficiary]: { type: "string" }, // ?
    [newProjectEnum.beneficiary_for]: { type: "integer", enum: [0, 1] },
    [newProjectEnum.partner]: { type: "string" }, // ?
    [newProjectEnum.partner_for]: { type: "integer", enum: [0, 1] },
    [newProjectEnum.start_project]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [newProjectEnum.end_project]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [newProjectEnum.extension]: {
      // ?
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [newProjectEnum.contract_number]: { type: "string" },
    [newProjectEnum.contract_date]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [newProjectEnum.operational_programme]: { type: "string" }, // lub enum??????
    [newProjectEnum.guardian]: { type: "string" }, //uuid
    [newProjectEnum.guardian_from]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [newProjectEnum.guardian_to]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [newProjectEnum.manager]: { type: "string" }, //uuid
    [newProjectEnum.manager_from]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [newProjectEnum.manager_to]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [newProjectEnum.coordinator_first_name]: { type: "string" },
    [newProjectEnum.coordinator_last_name]: { type: "string" },
    [newProjectEnum.coordinator_from]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [newProjectEnum.coordinator_to]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [newProjectEnum.authorized_to_sl_lsi]: { type: "string" }, //uuid
    [newProjectEnum.bank_access]: { type: "string" }, //uuid
    [newProjectEnum.web_page]: { type: "string" },
    [newProjectEnum.project_email]: { type: "string", format: "email" },
    [newProjectEnum.zus_rate]: { type: "string" }, // ???
    [newProjectEnum.rate_per_hour]: {
      type: "string",
      pattern: "^[0-9]*$",
    }, // bez miejsc po przecinku?
    [newProjectEnum.internship_rate]: {
      type: "string",
      pattern: "^[0-9]*$",
    }, // bez miejsc po przecinku?
    [newProjectEnum.theme_area]: {
      type: "integer",
      enum: [1, 2, 3, 4],
    },
    [newProjectEnum.market_status]: {
      type: "integer",
      enum: [1, 2, 3, 4, 5, 6, 7],
    },
    [newProjectEnum.osi]: {
      type: "integer",
      enum: [0, 1],
    },
    [newProjectEnum.sub_region]: {
      type: "integer",
      enum: [1, 2, 3, 4],
    },
    [newProjectEnum.medium_city]: {
      type: "integer",
      enum: [0, 1],
    },
    [newProjectEnum.zit]: {
      type: "integer",
      enum: [0, 1],
    },
    [newProjectEnum.reckoning]: {
      type: "integer",
      enum: [1, 2],
    },
  },
};
