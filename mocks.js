
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

export const working_status = {
  1: "Osoba pracująca",
  2: "Osoba bezrobotna",
  3: "Osoba bierna zawodowo",
  4: "Outplacment",
};

export const working = {
  1: "Ubogo pracująca",
  2: "Umowa cywilnoprawna",
  3: "Umowa krótkoterminowa",
  4: "Działalność gospdarcza",
  5: "Umowa o pracę",
};

export const working_type = {
  1: "Administracja rządowa",
  2: "Administracja samorządowa",
  3: "Duże przedsiębiorstwo",
  4: "MMŚP",
  5: "Organizacja pozarządowa",
  6: "Jednosoobowa działalność gospodarcza",
};

export const working_classification = {
  1: "Instruktor praktyczenj nauki zawodu",
  2: "Kluczowy pracownik instytucji pomocy i integracji społecznej",
  3: "Nauczyciel kształcenia ogólnego",
  4: "Nauczyciel kształcenia zawodowego",
  5: "Nauczyciel wychowania przedszkolnego",
  6: "Pracownik insytucji rynku pracy",
  7: "Pracownik insystucji systemu ochrony zdrowia",
  8: "Pracownik instytucji systemu wspierania rodzin i pieczy zastępczej",
  9: "Pracownik instytucji szkolnictwa wyższego",
  10: "Pracownik wsparcia ekonomii społecznej",
  11: "Pracownik poradni psychologiczno-pedagogicznej",
  12: "Rolnik",
  13: "Inne",
};

export const unemployment_type = {
  1: "Niezarejestrowana",
  2: "Zarejestrowana w UP",
};
