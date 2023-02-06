import { projectParticipantEnum } from "../enum.js";

export const validator = {
  type: "object",
  properties: {
    [projectParticipantEnum.form_submission]: {
      type: "string",
      format: "date",
    },
    [projectParticipantEnum.date_of_signing_agreement]: {
      type: "string",
      format: "date",
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
      type: "string",
      format: "date",
    },
    [projectParticipantEnum.working_period_to]: {
      type: "string",
      format: "date",
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
