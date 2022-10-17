import * as Yup from "yup";
import { personalEnum } from "../enum";

export const personalValidator = Yup.object().shape({
  [personalEnum.lastName]: Yup.string().required("Pole wymagane"),
    [personalEnum.firstName]: Yup.string().required("Pole wymagane"),
    [personalEnum.pesel]: Yup.string().required("Pole wymagane"),
    [personalEnum.dateOfBirth]: Yup.date().required("Pole wymagane"),
    [personalEnum.placeOfBirth]: Yup.string().required("Pole wymagane"),
    [personalEnum.gender]: Yup.string().required("Pole wymagane"),
    [personalEnum.phoneNumber]: Yup.string(),
    [personalEnum.email]: Yup.string().email('Nieprawidłowy email'),
    [personalEnum.zipCode]: Yup.string(),
    [personalEnum.city]: Yup.string(),
    [personalEnum.street]: Yup.string(),
    [personalEnum.streetNumber]: Yup.string(),
    [personalEnum.blackList]: Yup.string(),
    [personalEnum.blackListReason]: Yup.string(),
    [personalEnum.assignedProject]: Yup.string(),
  });
