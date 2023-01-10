import { componentEnum, personalEnum } from "../enum";
import { gender, mailing, projects } from "../mocks";

export const personalSchema = [
  {
    component: componentEnum.FormInput,
    label: "Nazwisko",
    name: personalEnum.last_name,
    props: { xs: 12, sm: 6 },
  },
  {
    component: componentEnum.FormInput,
    label: "Imię",
    name: personalEnum.first_name,
    props: { xs: 12, sm: 6 },
  },
  {
    component: componentEnum.FormInputMask,
    label: "Pesel",
    name: personalEnum.pesel,
    mask: "99999999999",
  },
  {
    component: componentEnum.FormDatePicker,
    label: "Data urodzenia",
    name: personalEnum.date_of_birth,
  },
  {
    component: componentEnum.FormInput,
    label: "Miejsce urodzenia",
    name: personalEnum.place_of_birth,
  },
  {
    component: componentEnum.FormSelect,
    label: "Płeć",
    name: personalEnum.gender,
    options: gender,
  },
  {
    component: componentEnum.FormInputMask,
    label: "Telefon",
    name: personalEnum.phone_number,
    mask: "+48 999 999 999",
  },
  {
    component: componentEnum.FormInput,
    label: "E-mail",
    name: personalEnum.email,
  },
  {
    component: componentEnum.FormInput,
    label: "Ulica",
    name: personalEnum.street,
  },
  {
    component: componentEnum.FormInput,
    label: "Numer domu",
    name: personalEnum.street_number,
  },
  {
    component: componentEnum.FormInput,
    label: "Numer lokalu",
    name: personalEnum.apartment_number,
  },
  {
    component: componentEnum.FormInput,
    label: "Miejscowość",
    name: personalEnum.city,
  },
  {
    component: componentEnum.FormInputMask,
    label: "Kod pocztowy",
    name: personalEnum.zip_code,
    mask: "99-999",
  },
  {
    component: componentEnum.FormInput,
    label: "Powiat",
    name: personalEnum.county,
  },
  {
    component: componentEnum.FormInput,
    label: "Gmina",
    name: personalEnum.community,
  },
  {
    component: componentEnum.FormInput,
    label: "Województwo",
    name: personalEnum.voivodeship,
  },
  {
    component: componentEnum.FormSelect,
    label: "Adres korespondencyjny",
    name: personalEnum.mailing_address,
    options: mailing,
  },
  {
    component: componentEnum.FormSelect,
    label: "Przypisz projekt",
    name: personalEnum.assigned_project,
    options: projects,
  },
  {
    component: componentEnum.FormSwitch,
    label: "Czarna lista",
    name: personalEnum.black_list,
  },
  {
    component: componentEnum.FormSwitch,
    label: "Zgoda marketingowa",
    name: personalEnum.marketing_agreement,
  },
  {
    component: componentEnum.FormSwitch,
    label: "Zgoda na elektroniczną wysyłkę ZUS RMUA",
    name: personalEnum.shiping_agreement,
  },
  {
    component: componentEnum.FormSwitch,
    label: "Subregion",
    name: personalEnum.sub_region,
  },
  {
    component: componentEnum.FormSwitch,
    label: "OSI",
    name: personalEnum.osi,
  },
  {
    component: componentEnum.FormSwitch,
    label: "ZIT",
    name: personalEnum.zit,
  },
  {
    component: componentEnum.FormSwitch,
    label: "Miasto średnie",
    name: personalEnum.medium_city,
  },
  {
    component: componentEnum.FormSwitch,
    label: "Tereny wiejskie",
    name: personalEnum.rural_area,
  },
];
