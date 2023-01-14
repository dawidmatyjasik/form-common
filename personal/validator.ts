import { date, object, TypeOf, string, number } from "zod";
import { personalEnum } from "../enum";

export const validator = object({
  [personalEnum.last_name]: string(),
  [personalEnum.first_name]: string(),
  [personalEnum.pesel]: string()
    // .length(11, "Numer pesel jest nieprawidłowy")
    .optional(),
  [personalEnum.date_of_birth]: date().optional(),
  [personalEnum.place_of_birth]: string().optional(),
  [personalEnum.gender]: number().optional(),
  [personalEnum.phone_number]: string().trim().optional(),
  [personalEnum.email]: string()
    // .email("Adres email jest nieprawidłowy")
    .optional(),
  [personalEnum.street]: string().optional(),
  [personalEnum.street_number]: string().optional(),
  [personalEnum.apartment_number]: string().optional(),
  [personalEnum.city]: string().optional(),
  [personalEnum.zip_code]: string().optional(),
  [personalEnum.county]: string().optional(),
  [personalEnum.community]: string().optional(),
  [personalEnum.voivodeship]: string().optional(),
  [personalEnum.mailing_address]: number().optional(),
  [personalEnum.mailing_street]: string().optional(),
  [personalEnum.mailing_street_number]: string().optional(),
  [personalEnum.mailing_apartment_number]: string().optional(),
  [personalEnum.mailing_city]: string().optional(),
  [personalEnum.mailing_zip_code]: string().optional(),
  [personalEnum.mailing_county]: string().optional(),
  [personalEnum.mailing_community]: string().optional(),
  [personalEnum.mailing_voivodeship]: string().optional(),
  [personalEnum.black_list]: number().optional(),
  [personalEnum.marketing_agreement]: number().optional(),
  [personalEnum.shiping_agreement]: number().optional(),
  [personalEnum.assigned_project]: number().optional(),
  [personalEnum.sub_region]: number().optional(),
  [personalEnum.osi]: number().optional(),
  [personalEnum.zit]: number().optional(),
  [personalEnum.medium_city]: number().optional(),
  [personalEnum.rural_area]: number().optional(),
});

export type IValidator = TypeOf<typeof validator>;
