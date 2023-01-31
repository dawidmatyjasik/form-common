import { projectEnum } from "../enum";

const dataPattern =
  "^[0-9]{4}-((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01])|(0[469]|11)-(0[1-9]|[12][0-9]|30)|(02)-(0[1-9]|[12][0-9]))T(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9]).[0-9]{3}Z$";

const uuidPattern =
  "^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$";

export const validator = {
  type: "object",
  properties: {
    [projectEnum.name]: { type: "string", minLength: 3 },
    [projectEnum.number]: { type: "string" },
    [projectEnum.beneficiary]: { type: "string" }, // ?
    [projectEnum.beneficiary_for]: { type: "integer", enum: [0, 1] },
    [projectEnum.partner]: { type: "string" }, // ?
    [projectEnum.partner_for]: { type: "integer", enum: [0, 1] },
    [projectEnum.start_project]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [projectEnum.end_project]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [projectEnum.extension]: {
      // ?
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [projectEnum.contract_number]: { type: "string" },
    [projectEnum.contract_date]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [projectEnum.operational_programme]: { type: "string" }, // lub enum??????
    [projectEnum.guardian]: { type: "string" }, //uuid
    [projectEnum.guardian_from]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [projectEnum.guardian_to]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [projectEnum.manager]: { type: "string" }, //uuid
    [projectEnum.manager_from]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [projectEnum.manager_to]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [projectEnum.coordinator_first_name]: { type: "string" },
    [projectEnum.coordinator_last_name]: { type: "string" },
    [projectEnum.coordinator_from]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [projectEnum.coordinator_to]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [projectEnum.authorized_to_sl_lsi]: { type: "string" }, //uuid
    [projectEnum.bank_access]: { type: "string" }, //uuid
    [projectEnum.web_page]: { type: "string" },
    [projectEnum.project_email]: { type: "string", format: "email" },
    [projectEnum.zus_rate]: { type: "string" }, // ???
    [projectEnum.rate_per_hour]: {
      type: "string",
      pattern: "^[0-9]*$",
    }, // bez miejsc po przecinku?
    [projectEnum.internship_rate]: {
      type: "string",
      pattern: "^[0-9]*$",
    }, // bez miejsc po przecinku?
    [projectEnum.theme_area]: {
      type: "integer",
      enum: [1, 2, 3, 4],
    },
    [projectEnum.market_status]: {
      type: "integer",
      enum: [1, 2, 3, 4, 5, 6, 7],
    },
    [projectEnum.osi]: {
      type: "integer",
      enum: [0, 1],
    },
    [projectEnum.sub_region]: {
      type: "integer",
      enum: [1, 2, 3, 4],
    },
    [projectEnum.medium_city]: {
      type: "integer",
      enum: [0, 1],
    },
    [projectEnum.zit]: {
      type: "integer",
      enum: [0, 1],
    },
    [projectEnum.reckoning]: {
      type: "integer",
      enum: [1, 2],
    },
  },
};
