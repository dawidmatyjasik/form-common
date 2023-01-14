import { date, object, TypeOf, string, number } from "zod";
import { projectParcipiantEnum } from "../enum";

export const validator = object({
  [projectParcipiantEnum.form_submission]: date().optional(),
  [projectParcipiantEnum.date_of_signing_agreement]: date().optional(),
  [projectParcipiantEnum.years_age]: string().optional(),
  [projectParcipiantEnum.months_age]: string().optional(),
  [projectParcipiantEnum.education]: number().optional(),
  [projectParcipiantEnum.disability]: number().optional(),
  [projectParcipiantEnum.disability_level]: number().optional(),
  [projectParcipiantEnum.market_status]: number().optional(),
  [projectParcipiantEnum.working_person]: number().optional(),
  [projectParcipiantEnum.working_company_adress]: string().optional(),
  [projectParcipiantEnum.working_street]: string().optional(),
  [projectParcipiantEnum.working_street_number]: string().optional(),
  [projectParcipiantEnum.working_zip_code]: string().optional(),
  [projectParcipiantEnum.working_city]: string().optional(),
  [projectParcipiantEnum.working_workplace]: string().optional(),
  [projectParcipiantEnum.working_classification]: number().optional(),
  [projectParcipiantEnum.working_classification_other]: string().optional(),
  [projectParcipiantEnum.working_period_from]: date().optional(),
  [projectParcipiantEnum.working_period_to]: date().optional(),
  [projectParcipiantEnum.working_type]: number().optional(),
  [projectParcipiantEnum.working_type_nip]: string().optional(),
  [projectParcipiantEnum.unemployment]: number().optional(),
  [projectParcipiantEnum.months_of_unemployment]: string().optional(),
  [projectParcipiantEnum.bank_account_number]: string().optional(),
  [projectParcipiantEnum.national_minority]: number().optional(),
  [projectParcipiantEnum.homeless]: number().optional(),
  [projectParcipiantEnum.adverse_social_situation]: number().optional(),
  [projectParcipiantEnum.ct9]: number().optional(),
  [projectParcipiantEnum.penalty_of_liberty]: number().optional(),
  [projectParcipiantEnum.farming]: number().optional(),
  [projectParcipiantEnum.social_security]: number().nullable().optional(),
});

export type IValidator = TypeOf<typeof validator>;
