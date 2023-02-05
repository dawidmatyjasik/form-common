import { newProjectEnum } from "../enum";

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
      format: "date",
    },
    [newProjectEnum.end_project]: {
      type: "string",
      format: "date",
    },
    [newProjectEnum.extension]: {
      type: "string",
      format: "date",
    },
    [newProjectEnum.contract_number]: { type: "string" },
    [newProjectEnum.contract_date]: {
      type: "string",
      format: "date",
    },
    [newProjectEnum.operational_programme]: { type: "string" }, // lub enum??????
    [newProjectEnum.guardian]: { type: "string" }, //uuid
    [newProjectEnum.guardian_from]: {
      type: "string",
      format: "date",
    },
    [newProjectEnum.guardian_to]: {
      type: "string",
      format: "date",
    },
    [newProjectEnum.manager]: { type: "string" }, //uuid
    [newProjectEnum.manager_from]: {
      type: "string",
      format: "date",
    },
    [newProjectEnum.manager_to]: {
      type: "string",
      format: "date",
    },
    [newProjectEnum.coordinator_first_name]: { type: "string" },
    [newProjectEnum.coordinator_last_name]: { type: "string" },
    [newProjectEnum.coordinator_from]: {
      type: "string",
      format: "date",
    },
    [newProjectEnum.coordinator_to]: {
      type: "string",
      format: "date",
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
