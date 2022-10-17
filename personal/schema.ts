import { personalEnum } from "../enum";
import { FormSelect } from "../../frontend/src/components/Forms/FormSelect";
import { FormField } from "../../frontend/src/components/Forms/FormField";
import { assignedProject, gender } from "../../frontend/src/data/data";
import { FormRadio } from "../../frontend/src/components/Forms/FormRadio";
import { FormSwitch } from "../../frontend/src/components/Forms/FormSwitch";
import { FormConditionalTextField } from "../../frontend/src/components/Forms/FormConditionalTextField";
import { FormDatePicker } from "../../frontend/src/components/Forms/FormDatePicker";

export const personalSchema = [
    {
        name: personalEnum.lastName,
        label: 'Nazwisko',
        Component: FormField,
        inputProps: {
            xs: 12,
            sm: 6,
        }
    },
    {
        name: personalEnum.firstName,
        label: 'Imię',
        Component: FormField,
        inputProps: {
            xs: 12,
            sm: 6,
        }
    },
    {
        name: personalEnum.pesel,
        label: 'Pesel',
        Component: FormField,
    },
    {
        name: personalEnum.dateOfBirth,
        label: 'Data urodzenia',
        Component: FormDatePicker,
    },
    {
        name: personalEnum.placeOfBirth,
        label: 'Miejsce urodzenia',
        Component: FormField,
    },
    {
        name: personalEnum.gender,
        label: 'Płeć',
        Component: FormRadio,
        componentProps: {
            options: gender,
        },
    },
    {
        name: personalEnum.phoneNumber,
        label: 'Numer telefonu',
        Component: FormField,
        type: 'tel',
    },
    {
        name: personalEnum.zipCode,
        label: 'Kod pocztowy',
        Component: FormField,
    },
    {
        name: personalEnum.city,
        label: 'Miasto',
        Component: FormField,
    },
    {
        name: personalEnum.street,
        label: 'Ulica',
        Component: FormField,
    },
    {
        name: personalEnum.streetNumber,
        label: 'Numer domu',
        Component: FormField,
    },
    {
        name: personalEnum.blackList,
        label: 'Czarna lista',
        Component: FormSwitch,
    }, 
    {
        name: personalEnum.blackListReason,
        label: 'Przyczyna wpisania na czarną listę',
        Component: FormConditionalTextField,
        componentProps: {
            referer: personalEnum.blackList,
        },
    }, 
       {
        name: personalEnum.assignedProject,
        label: 'Przypisz projekt',
        Component: FormSelect,
        componentProps: {
            options: assignedProject,
        },
    },


]