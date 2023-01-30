import { ComponentEnum, projectParticipantEnum, personalEnum } from "../enum";
import {
  choice,
  choiceApply,
  choiceRefusal,
  disability,
  disability_level,
  education,
  unemployment_type,
  working,
  working_classification,
  working_status,
  working_type,
} from "../mocks";
import { referer } from "../utils";

export const schema = [
  {
    component: ComponentEnum.FormHeader,
    label: "Dane podstawowe",
  },
  {
    component: ComponentEnum.FormDatePicker,
    label: "Data rozpoczęcia",
    name: projectParticipantEnum.form_submission,
    dateProps: {
      disabled: true,
    },
    props: {
      xs: 6,
      sx: {
        margin: "0 0 30px 0",
      },
    },
  },
  {
    component: ComponentEnum.FormDatePicker,
    label: "Data zakończenia",
    name: projectParticipantEnum.form_submission,
    disabled: true,
    dateProps: {
      disabled: true,
    },
    props: {
      xs: 6,
      sx: {
        margin: "0 0 30px 0",
      },
    },
  },
  {
    component: ComponentEnum.FormDatePicker,
    label: "Data złożenia formularza",
    name: projectParticipantEnum.form_submission,
  },
  {
    component: ComponentEnum.FormDatePicker,
    label: "Data podpisania umowy projektowej",
    name: projectParticipantEnum.form_submission,
  },
  {
    component: ComponentEnum.FormInput,
    label: "Lat w momencie przystąpienia do projektu",
    name: projectParticipantEnum.years_age,
    type: "number",
    props: { xs: 12, sm: 6 },
  },
  {
    component: ComponentEnum.FormInput,
    label: "Miesięcy w momencie przystąpienia do projektu",
    name: projectParticipantEnum.months_age,
    type: "number",
    props: { xs: 12, sm: 6 },
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Deklarowanie wykształcenie (ISCED)",
    name: projectParticipantEnum.education,
    options: education,
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Niepełnosprawność",
    name: projectParticipantEnum.disability,
    options: disability,
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Stopień niepełnosprawności",
    name: projectParticipantEnum.disability_level,
    options: disability_level,
    referer,
    refs: [projectParticipantEnum.disability], // add referer rules
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Status na rynku pracy",
    name: projectParticipantEnum.market_status,
    options: working_status,
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Osoba pracująca",
    name: projectParticipantEnum.working_person,
    options: working,

    referer,
    refs: [projectParticipantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Adres firmy",
    name: projectParticipantEnum.working_company_address,
    referer,
    refs: [projectParticipantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Ulica",
    name: projectParticipantEnum.working_street,
    referer,
    refs: [projectParticipantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Numer",
    name: projectParticipantEnum.working_street_number,
    referer,
    refs: [projectParticipantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Kod pocztowy",
    name: projectParticipantEnum.working_zip_code,
    referer,
    refs: [projectParticipantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Miasto",
    name: projectParticipantEnum.working_city,
    referer,
    refs: [projectParticipantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Stanowisko pracy",
    name: projectParticipantEnum.working_workplace,
    referer,
    refs: [projectParticipantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Klasyfikacja zawodów",
    name: projectParticipantEnum.working_classification,
    options: working_classification,
    referer,
    refs: [projectParticipantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Jakie?",
    name: projectParticipantEnum.working_classification_other,
    referer,
    refs: [projectParticipantEnum.working_classification], // add referer rules
  },
  // TODO: title
  {
    component: ComponentEnum.FormDatePicker,
    label: "Od",
    name: projectParticipantEnum.working_period_from,
    referer,
    refs: [projectParticipantEnum.market_status], // add referer rules
    props: { xs: 12, sm: 6 },
  },
  {
    component: ComponentEnum.FormDatePicker,
    label: "Do",
    name: projectParticipantEnum.working_period_to,
    referer,
    refs: [projectParticipantEnum.market_status], // add referer rules
    props: { xs: 12, sm: 6 },
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Rodzaj przedsiębiorstwa",
    name: projectParticipantEnum.working_type,
    options: working_type,

    referer,
    refs: [projectParticipantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "NIP",
    name: projectParticipantEnum.working_type_nip,
    referer,
    refs: [projectParticipantEnum.working_type], // add referer rules
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Osoba bezrobotna",
    name: projectParticipantEnum.unemployment,
    options: unemployment_type,
    referer,
    refs: [projectParticipantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Liczba miesięcy bezrobocia",
    name: projectParticipantEnum.months_of_unemployment,
    type: "number",
  },
  {
    //mask input
    component: ComponentEnum.FormInput,
    label: "Numer konta bankowego",
    name: projectParticipantEnum.bank_account_number,
    //add mask
  },
  {
    component: ComponentEnum.FormRadio,
    label:
      "Uczestnik należy do mniejszości narodowej, etnicznej, migrant, osoba obcego pochodzenia",
    name: projectParticipantEnum.national_minority,
    options: choiceRefusal,
  },
  {
    component: ComponentEnum.FormSwitch,
    label: "Osoba bezdomna lub dotknięta wykluczeniem z dostępu do mieszkań",
    name: projectParticipantEnum.homeless,
    options: choice,
  },
  {
    component: ComponentEnum.FormRadio,
    label: "Znajduje się w innej niekorzystniej sytuacji społecznej",
    name: projectParticipantEnum.adverse_social_situation,
    options: choiceRefusal,
  },
  {
    component: ComponentEnum.FormRadio,
    label: "Były uczestnik w ramach CT.9",
    name: projectParticipantEnum.ct9,
    options: choiceApply,
  },
  {
    component: ComponentEnum.FormSwitch,
    label: "Osoba odbywająca karę pozbawienia wolności",
    name: projectParticipantEnum.penalty_of_liberty,
    options: choice,
  },
  {
    component: ComponentEnum.FormRadio,
    label: "Osoba odchodąca z rolnictwa",
    name: projectParticipantEnum.farming,
    options: choiceApply,
  },
  {
    component: ComponentEnum.FormRadio,
    label: "Czy uczestnik ma inny tytuł do ubezpieczeń społecznych",
    name: projectParticipantEnum.social_security,
    options: choiceApply,
  },
];
