import { trainingEnum } from "../enum.js";

const dataPattern =
  "^[0-9]{4}-((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01])|(0[469]|11)-(0[1-9]|[12][0-9]|30)|(02)-(0[1-9]|[12][0-9]))T(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9]).[0-9]{3}Z$";

const uuidPattern =
  "^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$";

export const validator = {
  type: "object",
  properties: {
    [trainingEnum.name]: {
      type: "string", // uuid
    },
    [trainingEnum.group_number]: {
      type: "string", // uuid
    },
    [trainingEnum.start_training]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.end_training]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.hours_training]: {
      type: "string",
    },
    [trainingEnum.coach]: {
      type: "string",
    },
    [trainingEnum.examiner]: {
      type: "string",
    },
    [trainingEnum.place]: {
      type: "string",
    },
    [trainingEnum.street]: {
      type: "string",
    },
    [trainingEnum.house_number]: {
      type: "string",
    },
    [trainingEnum.apartment_number]: {
      type: "string",
    },
    [trainingEnum.city]: {
      type: "string",
    },
    [trainingEnum.medicine_work]: {
      type: "integer",
      enum: [0, 1, 2],
    },
    [trainingEnum.medicine_work_date]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.health_department]: {
      type: "integer",
      enum: [0, 1, 2],
    },
    [trainingEnum.health_department_date]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.psychological]: {
      type: "integer",
      enum: [0, 1, 2],
    },
    [trainingEnum.psychological_date]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.registration_zus]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.announcement_zus]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.nnw_start]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.nnw_end]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.digital_competence]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.complete_training]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.date_of_exam]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.score_of_exam]: {
      type: "integer",
      enum: [1, 2, 3],
    },
    [trainingEnum.qualified]: {
      type: "integer",
      enum: [0, 1, 2],
    },
    [trainingEnum.hours_of_attendance_with_l4]: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    [trainingEnum.hours_of_attendance_without_l4]: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    [trainingEnum.hours_to_zus]: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    [trainingEnum.scholarship]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.scholarship_from]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.scholarship_to]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.scholarship_sum]: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    [trainingEnum.scholarship_paid]: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    [trainingEnum.scholarship_date]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.travel_cost]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.travel_cost_from]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.travel_cost_to]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.travel_cost_sum]: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    [trainingEnum.travel_cost_paid]: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    [trainingEnum.travel_cost_date]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.cost_of_care]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.cost_of_care_from]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.cost_of_care_to]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.cost_of_care_sum]: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    [trainingEnum.cost_of_care_paid]: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    [trainingEnum.cost_of_care_date]: {
      type: "string",
      format: "date-time",
      pattern: dataPattern,
    },
    [trainingEnum.attendance_list]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.class_diary]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.catering_confirmation]: {
      type: "integer",
      enum: [0, 1, 2],
    },
    [trainingEnum.receipt_of_attestation_confirmation]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.attestation]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.attestation_copy]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.exam_certificate]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.certificate_received]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.certificate_copy]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.receipt_of_certificate_confirmation]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.exam_report]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.travel_cost_request]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.care_cost_request]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.statement_to_policy_nnw]: {
      type: "integer",
      enum: [0, 1],
    },
    [trainingEnum.evaluation_survey]: {
      type: "integer",
      enum: [0, 1],
    },
  },
};
