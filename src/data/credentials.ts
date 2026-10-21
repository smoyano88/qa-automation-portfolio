/** Public test credentials documented by the SauceDemo sample application. */
export const credentials = {
  standardUser: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  lockedOutUser: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
} as const;

export const checkoutCustomer = {
  firstName: 'Taylor',
  lastName: 'Morgan',
  postalCode: '10001',
} as const;
