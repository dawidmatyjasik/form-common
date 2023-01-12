export const ErrorEnum = {
  global: {
    internal_error: 600,
    email_taken: 601,
    wrong_json_body: 602,
    validator_error: 603,
    missing_action: 604,
    not_found: 605,
    access_denied: 606,
    not_updated: 607,
    wrong_token: 608,
    expired_token: 609,
    already_done: 610,
  },
  // discount_code: {
  //   code_expired: 700,
  // },
  // profile: {
  //   invalid_pesel: 4001,
  //   cannot_remove_default_profile: 4002,
  //   cannot_remove_current_profile: 4003,
  //   invalid_postal_code: 4004,
  //   invalid_city: 4005,
  //   invalid_street: 4006,
  //   invalid_tax_office: 4007,
  //   to_young: 4008,
  //   to_old: 4009,
  //   the_same_pesel: 4010,
  //   no_data_to_copy: 4011,
  // },
};

export default ErrorEnum;
