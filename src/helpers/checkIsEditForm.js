export const checkIsEditForm = (isEditForm, errorText, errorTouched) => {
    if (isEditForm) {
      if (errorText || errorTouched) {
        return true;
      } else {
        return false;
      }
    } else {
      if (errorText && errorTouched) {
        return true;
      } else {
        return false;
      }
    }
  }