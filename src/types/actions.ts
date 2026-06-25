type ActionResultSuccess = { success: true };

type ActionResultError = {
  success: false;
  errors?: {
    [k: string]: string;
  };
};

export type ActionResult = ActionResultSuccess | ActionResultError;
