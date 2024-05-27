type User1 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: User1, newValues: Partial<User1>) {
  return { ...initialValues, ...newValues };
}
