import { date, object, TypeOf, string, number, boolean } from "zod";
import { personalEnum } from "../enum";

export const personalValidator = object({
  [personalEnum.last_name]: string(),
  [personalEnum.first_name]: string(),
  [personalEnum.pesel]: string(),
  [personalEnum.date_of_birth]: date(),
  [personalEnum.place_of_birth]: string(),
  [personalEnum.gender]: string(),
  [personalEnum.phone_number]: string(),
  [personalEnum.email]: string().email("err"),
  [personalEnum.street]: string(),
  [personalEnum.street_number]: string(),
  [personalEnum.apartment_number]: string(),
  [personalEnum.city]: string(),
  [personalEnum.zip_code]: string(),
  [personalEnum.county]: string(),
  [personalEnum.community]: string(),
  [personalEnum.voivodeship]: string(),
  [personalEnum.mailing_address]: string(),
  [personalEnum.mailing_street]: string(),
  [personalEnum.mailing_street_number]: string(),
  [personalEnum.mailing_apartment_number]: string(),
  [personalEnum.mailing_city]: string(),
  [personalEnum.mailing_zip_code]: string(),
  [personalEnum.mailing_county]: string(),
  [personalEnum.mailing_community]: string(),
  [personalEnum.mailing_voivodeship]: string(),
  [personalEnum.black_list]: string(),
  [personalEnum.marketing_agreement]: string(),
  [personalEnum.shiping_agreement]: string(),
  [personalEnum.assigned_project]: string(),
  [personalEnum.sub_region]: string(),
  [personalEnum.osi]: string(),
  [personalEnum.medium_city]: string(),
  [personalEnum.rural_area]: string(),
});

/* 
.refine((data) => data.password === data.confirmPassword, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
}); 
*/

export type ILogin = TypeOf<typeof personalValidator>;
