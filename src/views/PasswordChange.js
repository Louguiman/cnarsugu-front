import { View, Text, Alert, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { useFormik, Formik } from "formik";
import { Button, TextInput, IconButton } from "@react-native-material/core";
import { Entypo } from "@expo/vector-icons";
import * as yup from "yup";
import Toast from "react-native-toast-message";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { changePassword, uploadForm } from "../utils/queries";
import { useAuthState } from "../context";
import { useNavigation } from "@react-navigation/native";
import styles from "../utils/Styles";

const validationSchema = yup.object().shape({
  password: yup.string().required("Ce champs est requis"),
  newpassword: yup
    .string()
    .min(4, "au minimum 4 charactères")
    .required("Ce champs est requis"),
  confirmpassword: yup.string().required("Ce champs est requis"),
});

const PasswordChange = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthState();

  const inputStyle = {
    // borderWidth: 1,
    // borderColor: '#4e4e4e',
    padding: 2,
    marginBottom: 5,
  };

  const handleSubmit = async (toSend) => {
    setIsLoading(true);

    toSend.userId = user.id;

    //upload the data
    try {
      let res = await changePassword(toSend);
      if (res.status == 200) {
        Toast.show({
          type: "success",
          text1: "Enregistré avec success",
        });

        setTimeout(() => {
          navigation.goBack();
        }, 1000);
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text2: "Une erreur est survenue, \nVeuillez ressayer!",
        text1: `${error.response.data.message}`,
      });
    }
    setIsLoading(false);
  };

  return (
    <Formik
      initialValues={{
        password: "",
        newpassword: "",
        confirmpassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (values.confirmpassword === values.newpassword) handleSubmit(values);
        else Alert.alert("Les Mots de Passe ne sont pas identiques!");
      }}
    >
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View style={{ flex: 1, padding: 10 }}>
          <Text adjustsFontSizeToFit style={styles.subHeading3}>
            Veuillez renseignez les champs:
          </Text>
          <TextInput
            fullWidth
            label="Ancien Mot de Passe"
            leading={(props) => <Icon name="account" {...props} />}
            value={values.password}
            style={inputStyle}
            // onSubmitEditing={() => passwordRef.current?.focus()}
            onChangeText={handleChange("password")}
            onBlur={() => setFieldTouched("password")}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <TextInput
            fullWidth
            label="Nouveau Mot de Passe"
            leading={(props) => <Icon name="account" {...props} />}
            value={values.newpassword}
            style={inputStyle}
            // onSubmitEditing={() => passwordRef.current?.focus()}
            onChangeText={handleChange("newpassword")}
            onBlur={() => setFieldTouched("newpassword")}
            error={touched.newpassword && Boolean(errors.newpassword)}
            helperText={touched.newpassword && errors.newpassword}
          />

          <TextInput
            fullWidth
            label="Confirmer le Mot de Passe"
            value={values.confirmpassword}
            style={inputStyle}
            leading={(props) => <Icon name="phone" {...props} />}
            onChangeText={handleChange("confirmpassword")}
            onBlur={() => setFieldTouched("confirmpassword")}
            error={touched.confirmpassword && Boolean(errors.confirmpassword)}
            helperText={touched.confirmpassword && errors.confirmpassword}
          />

          <Button
            style={{ marginTop: 25 }}
            disabled={!isValid}
            onPress={handleSubmit}
            color="secondary"
            trailing={(props) => <Icon name="send" {...props} />}
            variant="contained"
            title="Modifier"
            loading={isLoading}
            loadingIndicatorPosition="overlay"
          />
        </View>
      )}
    </Formik>
  );
};

export default PasswordChange;

const inStyles = StyleSheet.create({});
