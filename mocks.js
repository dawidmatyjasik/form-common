
export const gender = {
  male: 1,
  female: 2,
  neutral: 3,
}

export const genderEnum = {
  [gender.male]: "Mężczyzna",
  [gender.female]: "Kobieta",
  [gender.neutral]: "Neutralny",
};

export const choice = {
  no: 0,
  yes: 1,
};

export const choiceEnum = {
  [choice.no]: "Nie",
  [choice.yes]: "Tak",
};

export const choiceRefusal = {
  no: 0,
  yes: 1,
  refusal: 2,
};

export const choiceRefusalEnum = {
  [choice.no]: "Nie",
  [choice.yes]: "Tak",
  [choice.refusal]: "Omowa podania informacji",
};

export const choiceApply = {
  no: 0,
  yes: 1,
  not_applicable: 2,
};

export const choiceApplyEnum = {
  [choiceApply.no]: "Nie",
  [choiceApply.yes]: "Tak",
  [choiceApply.not_applicable]: "Nie dotyczy",
};

export const projectsEnum = {
  1: "Projekt1",
  2: "Projekt2",
  3: "Projekt3",
};

export const mailing = {
  same: 1,
  other: 2,
};

export const mailingEnum = {
  [mailing.same]: "Jak zamieszkania",
  [mailing.other]: "Inny",
};

export const education = {
  primary: 1,
  junior: 2,
  mid: 3,
  high: 4,
  higher: 5,
};

export const educationEnum = {
  [education.primary]: "Podstawowe (ISCED 1)",
  [education.junior]: "Gimnazjalne (ISCED 2)",
  [education.mid]: "Ponadgimnazjalne - liceum, technikum, szkoła zawodowa (ISCED 3)",
  [education.high]: "Policealne (ISCED 4)",
  [education.higher]: "Wyższe (ISCED 5-8)",
};

const disability = {
  no: 1,
  light: 2,
  moderate: 3,
  considerable: 4,
  refusal: 5,
}

export const disabilityEnum = {
  [disability.no]: "Brak",
  [disability.light]: "Stopień lekki",
  [disability.moderate]: "Stopień umiarkowany",
  [disability.considerable]: "Stopień znaczny",
  [disability.refusal]: "Odmowa podania informacji",
};

const disabilityLevel = {
  disability: 1,
  zus: 2,
  krus: 3,
  opinion: 4,
}

export const disabilityLevelEnum = {
  [disabilityLevel.disability]: "Orzeczenie o niepełnosprawności",
  [disabilityLevel.zus]: "Orzeczenie lek. ZUS",
  [disabilityLevel.krus]: "Orzeczenie lek. KRUS",
  [disabilityLevel.opinion]: "Orzeczenie lub opinia o stanie zdrowia psychicznego",
};

export const workingStatus = {
  working: 1,
  unemployed: 2,
  professionally_inactive: 3,
  outplacement: 4,
};

export const workingStatusEnum = {
  [workingStatus.working]: "Osoba pracująca",
  [workingStatus.unemployed]: "Osoba pracująca",
  [workingStatus.professionally_inactive]: "Osoba pracująca",
  [workingStatus.outplacement]: "Osoba pracująca",
};

export const working = {
  working_poor: 1,
  civil_law: 2,
  short_term: 3,
  economic_activity: 4,
  contract_of_employment: 5,
};

export const workingEnum = {
  [working.working_poor]: "Ubogo pracująca",
  [working.civil_law]: "Umowa cywilnoprawna",
  [working.short_term]: "Umowa krótkoterminowa",
  [working.economic_activity]: "Działalność gospdarcza",
  [working.contract_of_employment]: "Umowa o pracę",
};

export const workingType = {
  government_administration: 1,
  local_government: 2,
  large_enterprise: 3,
  mmsp: 4,
  non_governmental_organization: 5,
  sole_proprietorship: 6,
};

export const workingTypeEnum = {
  [workingType.government_administration]: "Administracja rządowa",
  [workingType.local_government]: "Administracja samorządowa",
  [workingType.large_enterprise]: "Duże przedsiębiorstwo",
  [workingType.mmsp]: "MMŚP",
  [workingType.non_governmental_organization]: "Organizacja pozarządowa",
  [workingType.sole_proprietorship]: "Jednosoobowa działalność gospodarcza",
};

export const workingClassification = {
  practical_training_instructor: 1,
  key_employee: 2,
  general_education_teacher: 3,
  vocational_education_teacher: 4,
  preschool_education_teacher: 5,
  labor_market_institutions: 6,
  health_care_system_institution: 7,
  family_support_system_and_foster_care: 8,
  higher_education_institution: 9,
  social_economy_support: 10,
  psychological_and_pedagogical_counseling_center: 11,
  farmer: 12,
  other: 13,
};

export const workingClassificationEnum = {
  [workingClassification.practical_training_instructor]:
    "Instruktor praktyczenj nauki zawodu",
  [workingClassification.key_employee]:
    "Kluczowy pracownik instytucji pomocy i integracji społecznej",
  [workingClassification.general_education_teacher]:
    "Nauczyciel kształcenia ogólnego",
  [workingClassification.vocational_education_teacher]:
    "Nauczyciel kształcenia zawodowego",
  [workingClassification.preschool_education_teacher]:
    "Nauczyciel wychowania przedszkolnego",
  [workingClassification.labor_market_institutions]:
    "Pracownik insytucji rynku pracy",
  [workingClassification.health_care_system_institution]:
    "Pracownik insystucji systemu ochrony zdrowia",
  [workingClassification.family_support_system_and_foster_care]:
    "Pracownik instytucji systemu wspierania rodzin i pieczy zastępczej",
  [workingClassification.higher_education_institution]:
    "Pracownik instytucji szkolnictwa wyższego",
  [workingClassification.social_economy_support]:
    "Pracownik wsparcia ekonomii społecznej",
  [workingClassification.psychological_and_pedagogical_counseling_center]:
    "Pracownik poradni psychologiczno-pedagogicznej",
  [workingClassification.farmer]: "Rolnik",
  [workingClassification.other]: "Inne",
};

export const unemploymentType = {
  unregistered: 1,
  registered_at_up: 2,
};

export const unemploymentTypeEnum = {
  [unemploymentType.unregistered]: "Niezarejestrowana",
  [unemploymentType.registered_at_up]: "Zarejestrowana w UP",
};
