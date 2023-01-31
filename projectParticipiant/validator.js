import { projectParticipantEnum } from "../enum.js";

const dataPattern =
  "^[0-9]{4}-((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01])|(0[469]|11)-(0[1-9]|[12][0-9]|30)|(02)-(0[1-9]|[12][0-9]))T(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9]).[0-9]{3}Z$";

export const validator = {
  type: "object",
  properties: {
    [projectParticipantEnum.form_submission]: {
      type: "string",
      pattern: dataPattern,
    },
    [projectParticipantEnum.date_of_signing_agreement]: {
      format: "date-time",
      pattern: dataPattern,
    },
    [projectParticipantEnum.years_age]: { type: "string" },
    [projectParticipantEnum.months_age]: { type: "string" },
    [projectParticipantEnum.education]: {
      type: "integer",
      enum: [1, 2, 3, 4, 5],
    },
    [projectParticipantEnum.disability]: { type: "integer" },
    [projectParticipantEnum.disability_level]: {
      type: "integer",
      enum: [1, 2, 3, 4, 5, 6],
    },
    [projectParticipantEnum.market_status]: { type: "integer", enum: [0, 1] },
    [projectParticipantEnum.working_person]: { type: "integer" },
    [projectParticipantEnum.working_person_type]: {
      type: "integer",
      enum: [1, 2, 3, 4, 5],
    },
    [projectParticipantEnum.working_company_address]: { type: "string" },
    [projectParticipantEnum.working_street]: { type: "string" },
    [projectParticipantEnum.working_street_number]: { type: "string" },
    [projectParticipantEnum.working_zip_code]: {
      type: "string",
      pattern: "$|[0-9]{2}(?:-[0-9]{3})?$",
    },
    [projectParticipantEnum.working_city]: { type: "string" },
    [projectParticipantEnum.working_workplace]: { type: "string" },
    [projectParticipantEnum.working_classification]: {
      type: "integer",
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
    [projectParticipantEnum.working_classification_other]: { type: "string" },
    [projectParticipantEnum.working_period_from]: {
      format: "date-time",
      pattern: dataPattern,
    },
    [projectParticipantEnum.working_period_to]: {
      format: "date-time",
      pattern: dataPattern,
    },
    [projectParticipantEnum.working_type]: {
      type: "integer",
      enum: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    [projectParticipantEnum.working_type_nip]: { type: "string" },
    [projectParticipantEnum.working_type_other]: { type: "string" },
    [projectParticipantEnum.unemployment]: {
      type: "integer",
      enum: [0, 1],
    },
    [projectParticipantEnum.months_of_unemployment]: { type: "string" },
    [projectParticipantEnum.bank_account_number]: { type: "string" },
    [projectParticipantEnum.national_minority]: {
      type: "integer",
      enum: [0, 1, 2],
    },
    [projectParticipantEnum.homeless]: { type: "integer", enum: [0, 1] },
    [projectParticipantEnum.adverse_social_situation]: {
      type: "integer",
      enum: [0, 1, 2],
    },
    [projectParticipantEnum.ct9]: { type: "integer", enum: [0, 1, 2] },
    [projectParticipantEnum.penalty_of_liberty]: {
      type: "integer",
      enum: [0, 1],
    },
    [projectParticipantEnum.farming]: { type: "integer", enum: [0, 1, 2] },
    [projectParticipantEnum.social_security]: {
      type: "integer",
      enum: [0, 1, 2],
    },
    [projectParticipantEnum.social_security_type]: {
      type: "integer",
      enum: [1, 2, 3, 4, 5],
    },
  },
};
