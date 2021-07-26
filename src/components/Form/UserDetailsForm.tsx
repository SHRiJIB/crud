import { Grid, Paper, Typography } from "@material-ui/core";
import { Formik, useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import {
  FormConfig,
  IFormActionProps,
  IReactFormProps,
  MLFormBuilder,
} from "react-forms";
import * as Yup from "yup";
import { UserInterface } from "../../Interfaces";
import { useStoreActions } from "../../TypedHooks";

import useStyles from "./styles";

interface Props {
  Users: UserInterface[];
  userId: number | null;
  setUserId: (id: number | null) => void;
}

const MyForm: React.FC<IReactFormProps> = (props) => {
  const {
    values,
    config,
    formId,
    actionConfig,
    formSettings,
    isInProgress = false,
    isReadOnly = false,
    formikProps,
  } = props;

  const { setValues } = useFormikContext();
  useEffect(() => {
    setValues(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <MLFormBuilder
      schema={config}
      formId={formId}
      actionConfig={actionConfig}
      settings={{ ...formSettings, isReadOnly }}
      formikProps={formikProps}
      isInProgress={isInProgress}
    />
  );
};

const UserDetailsForm: React.FC<Props> = ({ Users, userId, setUserId }) => {
  const classes = useStyles();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [user, setUser] = useState<UserInterface>({
    name: "",
    age: "",
    gender: "",
  });

  const currentUser = userId !== null ? Users[userId] : null;

  const addUser = useStoreActions((actions) => actions.users.addUser);
  const updateUser = useStoreActions((actions) => actions.users.updateUser);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short!!")
      .max(100, "Too long!!")
      .required("Required"),
    age: Yup.number()
      .min(1, "Please Enter a valid age")
      .max(130, "Please enter a valid age!!"),
    gender: Yup.string(),
  });
  const handleSubmit = (
    e: UserInterface,
    { resetForm }: { resetForm: any }
  ) => {
    setSubmitting(true);
    if (currentUser) {
      updateUser({ user: e, id: userId });
    } else {
      addUser(e);
    }
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
    resetForm();
    clear();
  };

  const clear = () => {
    setUserId(null);
    setUser({
      name: "",
      age: "",
      gender: "",
    });
  };

  const inputConfig: Array<Array<FormConfig> | FormConfig> = [
    {
      type: "text",
      valueKey: "name",
      fieldProps: {
        label: "Name",
        fullWidth: true,
        variant: "outlined",
      },
    },
    {
      type: "text",
      valueKey: "age",
      fieldProps: {
        label: "Age",
        fullWidth: true,
        variant: "outlined",
        type: "number",
      },
    },
    {
      type: "select",
      valueKey: "gender",

      fieldProps: {
        label: "Gender",
        options: [
          { name: "Male", value: "Male" },
          { name: "Female", value: "Female" },
          { name: "Prefer not to say", value: "Prefer not to say" },
        ],
      },
    },
  ];
  const actionConfig: IFormActionProps = {
    submitButtonText: currentUser === null ? "ADD" : "UPDATE",
  };
  useEffect(() => {
    if (currentUser) setUser(currentUser);
  }, [currentUser]);

  return (
    <Grid item>
      <Paper className={classes.paper}>
        <Typography variant="h4">Fill up the details</Typography>

        <Formik
          initialValues={user}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(formikProps) => (
            <MyForm
              formId="userForm"
              values={user}
              config={inputConfig}
              actionConfig={actionConfig}
              formikProps={formikProps}
              isInProgress={submitting}
            />
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default UserDetailsForm;
