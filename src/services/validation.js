export const passwordValidator = (_, value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!value || regex.test(value)) {
      return Promise.resolve();
    }else{
        return Promise.reject(
            new Error(
              "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one special character and one number"
            )
          );
    }
  };
