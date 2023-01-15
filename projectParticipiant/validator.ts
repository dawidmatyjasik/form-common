import { date, object, TypeOf, string, number } from "zod";
import { projectParticipantEnum } from "../enum";

export const validator = object({
  [projectParticipantEnum.form_submission]: date().optional(),
  [projectParticipantEnum.date_of_signing_agreement]: date().optional(),
  [projectParticipantEnum.years_age]: string().optional(),
  [projectParticipantEnum.months_age]: string().optional(),
  [projectParticipantEnum.education]: number().optional(),
  [projectParticipantEnum.disability]: number().optional(),
  [projectParticipantEnum.disability_level]: number().optional(),
  [projectParticipantEnum.market_status]: number().optional(),
  [projectParticipantEnum.working_person]: number().optional(),
  [projectParticipantEnum.working_company_address]: string().optional(),
  [projectParticipantEnum.working_street]: string().optional(),
  [projectParticipantEnum.working_street_number]: string().optional(),
  [projectParticipantEnum.working_zip_code]: string().optional(),
  [projectParticipantEnum.working_city]: string().optional(),
  [projectParticipantEnum.working_workplace]: string().optional(),
  [projectParticipantEnum.working_classification]: number().optional(),
  [projectParticipantEnum.working_classification_other]: string().optional(),
  [projectParticipantEnum.working_period_from]: date().optional(),
  [projectParticipantEnum.working_period_to]: date().optional(),
  [projectParticipantEnum.working_type]: number().optional(),
  [projectParticipantEnum.working_type_nip]: string().optional(),
  [projectParticipantEnum.unemployment]: number().optional(),
  [projectParticipantEnum.months_of_unemployment]: string().optional(),
  [projectParticipantEnum.bank_account_number]: string().optional(),
  [projectParticipantEnum.national_minority]: number().optional(),
  [projectParticipantEnum.homeless]: number().optional(),
  [projectParticipantEnum.adverse_social_situation]: number().optional(),
  [projectParticipantEnum.ct9]: number().optional(),
  [projectParticipantEnum.penalty_of_liberty]: number().optional(),
  [projectParticipantEnum.farming]: number().optional(),
  [projectParticipantEnum.social_security]: number().nullable().optional(),
});

export type IValidator = TypeOf<typeof validator>;
