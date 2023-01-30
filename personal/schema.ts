import { ComponentEnum, personalEnum } from "../enum";
import { gender, mailing, projects } from "../mocks";
import { referer } from "../utils";

export const schema = [
  {
    component: ComponentEnum.FormHeader,
    label: "Dane osobowe",
  },
  {
    component: ComponentEnum.FormInput,
    label: "Nazwisko",
    name: personalEnum.last_name,
    props: { xs: 12, sm: 6 },
  },
  {
    component: ComponentEnum.FormInput,
    label: "Imię",
    name: personalEnum.first_name,
    props: { xs: 12, sm: 6 },
  },
  {
    component: ComponentEnum.FormInputMask,
    label: "Pesel",
    name: personalEnum.pesel,
    mask: "99999999999",
  },
  {
    component: ComponentEnum.FormDatePicker,
    label: "Data urodzenia",
    name: personalEnum.date_of_birth,
  },
  {
    component: ComponentEnum.FormInput,
    label: "Miejsce urodzenia",
    name: personalEnum.place_of_birth,
  },
  {
    component: ComponentEnum.FormRadio,
    label: "Płeć",
    name: personalEnum.gender,
    options: gender,
  },
  {
    component: ComponentEnum.FormInputMask,
    label: "Telefon",
    name: personalEnum.phone_number,
    mask: "+48 999 999 999",
  },
  {
    component: ComponentEnum.FormInput,
    label: "E-mail",
    name: personalEnum.email,
  },
  {
    component: ComponentEnum.FormInput,
    label: "Ulica",
    name: personalEnum.street,
  },
  {
    component: ComponentEnum.FormInput,
    label: "Numer domu",
    name: personalEnum.street_number,
  },
  {
    component: ComponentEnum.FormInput,
    label: "Numer lokalu",
    name: personalEnum.apartment_number,
  },
  {
    component: ComponentEnum.FormInput,
    label: "Miejscowość",
    name: personalEnum.city,
  },
  {
    component: ComponentEnum.FormInputMask,
    label: "Kod pocztowy",
    name: personalEnum.zip_code,
    mask: "99-999",
  },
  {
    component: ComponentEnum.FormInput,
    label: "Powiat",
    name: personalEnum.county,
  },
  {
    component: ComponentEnum.FormInput,
    label: "Gmina",
    name: personalEnum.community,
  },
  {
    component: ComponentEnum.FormInput,
    label: "Województwo",
    name: personalEnum.voivodeship,
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Adres korespondencyjny",
    name: personalEnum.mailing_address,
    options: mailing,
  },
  {
    component: ComponentEnum.FormInput,
    label: "Ulica",
    name: personalEnum.mailing_street,
    referer,
    refs: [personalEnum.mailing_address],
  },
  {
    component: ComponentEnum.FormInput,
    label: "Numer domu",
    name: personalEnum.mailing_street_number,
    referer,
    refs: [personalEnum.mailing_address],
  },
  {
    component: ComponentEnum.FormInput,
    label: "Numer lokalu",
    name: personalEnum.mailing_apartment_number,
    referer,
    refs: [personalEnum.mailing_address],
  },
  {
    component: ComponentEnum.FormInput,
    label: "Miejscowość",
    name: personalEnum.mailing_city,
    referer,
    refs: [personalEnum.mailing_address],
  },
  {
    component: ComponentEnum.FormInputMask,
    label: "Kod pocztowy",
    name: personalEnum.mailing_zip_code,
    mask: "99-999",
    referer,
    refs: [personalEnum.mailing_address],
  },
  {
    component: ComponentEnum.FormInput,
    label: "Powiat",
    name: personalEnum.mailing_county,
    referer,
    refs: [personalEnum.mailing_address],
  },
  {
    component: ComponentEnum.FormInput,
    label: "Gmina",
    name: personalEnum.mailing_community,
    referer,
    refs: [personalEnum.mailing_address],
  },
  {
    component: ComponentEnum.FormInput,
    label: "Województwo",
    name: personalEnum.mailing_voivodeship,
    referer,
    refs: [personalEnum.mailing_address],
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Przypisz projekt",
    name: personalEnum.assigned_project,
    options: projects,
  },
  {
    component: ComponentEnum.FormSwitch,
    label: "Czarna lista",
    name: personalEnum.black_list,
  },
  {
    component: ComponentEnum.FormSwitch,
    label: "Zgoda marketingowa",
    name: personalEnum.marketing_agreement,
  },
  {
    component: ComponentEnum.FormSwitch,
    label: "Zgoda na elektroniczną wysyłkę ZUS RMUA",
    name: personalEnum.shipping_agreement,
  },
  {
    component: ComponentEnum.FormSwitch,
    label: "Subregion",
    name: personalEnum.sub_region,
  },
  {
    component: ComponentEnum.FormSwitch,
    label: "OSI",
    name: personalEnum.osi,
  },
  {
    component: ComponentEnum.FormSwitch,
    label: "ZIT",
    name: personalEnum.zit,
  },
  {
    component: ComponentEnum.FormSwitch,
    label: "Miasto średnie",
    name: personalEnum.medium_city,
  },
  {
    component: ComponentEnum.FormSwitch,
    label: "Tereny wiejskie",
    name: personalEnum.rural_area,
  },
];
