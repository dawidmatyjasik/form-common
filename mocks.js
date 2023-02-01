export const gender = {
  1: "Mężczyzna",
  2: "Kobieta",
  3: "Neutralny",
};

export const choice = {
  0: "Nie",
  1: "Tak",
};

export const choiceRefusal = {
  0: "Nie",
  1: "Tak",
  2: "Omowa podania informacji",
};

export const choiceApply = {
  0: "Nie",
  1: "Tak",
  2: "Nie dotyczy",
};

export const projects = {
  1: "Projekt1",
  2: "Projekt2",
  3: "Projekt3",
};

export const mailing = {
  1: "Jak zamieszkania",
  2: "Inny",
};

export const education = {
  1: "Podstawowe (ISCED 1)",
  2: "Gimnazjalne (ISCED 2)",
  3: "Ponadgimnazjalne - liceum, technikum, szkoła zawodowa (ISCED 3)",
  4: "Policealne (ISCED 4)",
  5: "Wyższe (ISCED 5-8)",
};

export const disability = {
  1: "Brak",
  2: "Stopień lekki",
  3: "Stopień umiarkowany",
  4: "Stopień znaczny",
  5: "Odmowa podania informacji",
};

export const disability_level = {
  1: "Orzeczenie o niepełnosprawności",
  2: "Orzeczenie lek. ZUS",
  3: "Orzeczenie lek. KRUS",
  4: "Orzeczenie lub opinia o stanie zdrowia psychicznego",
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
