import { ComponentEnum, projectParcipiantEnum, personalEnum } from "../enum";
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
    name: projectParcipiantEnum.form_submission,
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
    name: projectParcipiantEnum.form_submission,
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
    name: projectParcipiantEnum.form_submission,
  },
  {
    component: ComponentEnum.FormDatePicker,
    label: "Data podpisania umowy projektowej",
    name: projectParcipiantEnum.form_submission,
  },
  {
    component: ComponentEnum.FormInput,
    label: "Lat w momencie przystąpienia do projektu",
    name: projectParcipiantEnum.years_age,
    type: "number",
    props: { xs: 12, sm: 6 },
  },
  {
    component: ComponentEnum.FormInput,
    label: "Miesięcy w momencie przystąpienia do projektu",
    name: projectParcipiantEnum.months_age,
    type: "number",
    props: { xs: 12, sm: 6 },
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Deklarowanie wykształcenie (ISCED)",
    name: projectParcipiantEnum.education,
    options: education,
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Niepełnosprawność",
    name: projectParcipiantEnum.disability,
    options: disability,
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Stopień niepełnosprawności",
    name: projectParcipiantEnum.disability_level,
    options: disability_level,
    referer,
    refs: [projectParcipiantEnum.disability], // add referer rules
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Status na rynku pracy",
    name: projectParcipiantEnum.market_status,
    options: working_status,
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Osoba pracująca",
    name: projectParcipiantEnum.working_person,
    options: working,

    referer,
    refs: [projectParcipiantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Adres firmy",
    name: projectParcipiantEnum.working_company_adress,
    referer,
    refs: [projectParcipiantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Ulica",
    name: projectParcipiantEnum.working_street,
    referer,
    refs: [projectParcipiantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Numer",
    name: projectParcipiantEnum.working_street_number,
    referer,
    refs: [projectParcipiantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Kod pocztowy",
    name: projectParcipiantEnum.working_zip_code,
    referer,
    refs: [projectParcipiantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Miasto",
    name: projectParcipiantEnum.working_city,
    referer,
    refs: [projectParcipiantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Stanowisko pracy",
    name: projectParcipiantEnum.working_workplace,
    referer,
    refs: [projectParcipiantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Klasyfikacja zawodów",
    name: projectParcipiantEnum.working_classification,
    options: working_classification,
    referer,
    refs: [projectParcipiantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Jakie?",
    name: projectParcipiantEnum.working_classification_other,
    referer,
    refs: [projectParcipiantEnum.working_classification], // add referer rules
  },
  // TODO: title
  {
    component: ComponentEnum.FormDatePicker,
    label: "Od",
    name: projectParcipiantEnum.working_period_from,
    referer,
    refs: [projectParcipiantEnum.market_status], // add referer rules
    props: { xs: 12, sm: 6 },
  },
  {
    component: ComponentEnum.FormDatePicker,
    label: "Do",
    name: projectParcipiantEnum.working_period_to,
    referer,
    refs: [projectParcipiantEnum.market_status], // add referer rules
    props: { xs: 12, sm: 6 },
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Rodzaj przedsiębiorstwa",
    name: projectParcipiantEnum.working_type,
    options: working_type,

    referer,
    refs: [projectParcipiantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "NIP",
    name: projectParcipiantEnum.working_type_nip,
    referer,
    refs: [projectParcipiantEnum.working_type], // add referer rules
  },
  {
    component: ComponentEnum.FormSelect,
    label: "Osoba bezrobotna",
    name: projectParcipiantEnum.unemployment,
    options: unemployment_type,
    referer,
    refs: [projectParcipiantEnum.market_status], // add referer rules
  },
  {
    component: ComponentEnum.FormInput,
    label: "Liczba miesięcy bezrobocia",
    name: projectParcipiantEnum.months_of_unemployment,
    type: "number",
  },
  {
    //mask input
    component: ComponentEnum.FormInput,
    label: "Numer konta bankowego",
    name: projectParcipiantEnum.bank_account_number,
    //add mask
  },
  {
    component: ComponentEnum.FormRadio,
    label:
      "Uczestnik należy do mniejszości narodowej, etnicznej, migrant, osoba obcego pochodzenia",
    name: projectParcipiantEnum.national_minority,
    options: choiceRefusal,
    yesNo: true,
  },
  {
    component: ComponentEnum.FormSwitch,
    label: "Osoba bezdomna lub dotknięta wykluczeniem z dostępu do mieszkań",
    name: projectParcipiantEnum.homeless,
    options: choice,
    yesNo: true,
  },
  {
    component: ComponentEnum.FormRadio,
    label: "Znajduje się w innej niekorzystniej sytuacji społecznej",
    name: projectParcipiantEnum.adverse_social_situation,
    options: choiceRefusal,
    yesNo: true,
  },
  {
    component: ComponentEnum.FormRadio,
    label: "Były uczestnik w ramach CT.9",
    name: projectParcipiantEnum.ct9,
    options: choiceApply,
    yesNo: true,
  },
  {
    component: ComponentEnum.FormSwitch,
    label: "Osoba odbywająca karę pozbawienia wolności",
    name: projectParcipiantEnum.penalty_of_liberty,
    options: choice,
    yesNo: true,
  },
  {
    component: ComponentEnum.FormRadio,
    label: "Osoba odchodąca z rolnictwa",
    name: projectParcipiantEnum.farming,
    options: choiceApply,
    yesNo: true,
  },
  {
    component: ComponentEnum.FormRadio,
    label: "Czy uczestnik ma inny tytuł do ubezpieczeń społecznych",
    name: projectParcipiantEnum.social_security,
    options: choiceApply,
    yesNo: true,
  },
];
