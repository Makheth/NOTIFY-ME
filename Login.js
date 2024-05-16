import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';

const schema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters'),
});

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigation = useNavigation();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onSubmit = (data) => {
    if (!data.email.includes('@')) {
      setEmailError(true);
    }
    if (data.password.length < 8) {
      setPasswordError(true);
    }
    if (data.email.includes('@') && data.password.length >= 8) {
      console.log(data);
      navigation.navigate('Home', {
        paramemail: data.email,
      });
    }
  };

  const onPressSend = (formData) => {
    onSubmit(formData);
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: '#87CEEB'}]}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <KeyboardAvoidingView style={styles.inner} behavior="padding" keyboardVerticalOffset={100}>
          <View style={styles.titleContainer}>
            <Text style={styles.hospitalTitle}>
              Hospital
            </Text>
            <Text style={styles.loginText}>
              Login
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={(text) => {
                    onChange(text);
                    setEmailError(false);
                  }}
                  placeholder="Username or Email"
                  style={[styles.input, emailError && styles.invalidInput]}
                />
              )}
              name="email"
            />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={(text) => {
                    onChange(text);
                    setPasswordError(false);
                  }}
                  placeholder="Password"
                  secureTextEntry
                  style={[styles.input, passwordError && styles.invalidInput]}
                />
              )}
              name="password"
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
          </View>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#87CEEB'}]}
            onPress={handleSubmit(onPressSend)}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.optionsContainer}>
            <TouchableOpacity onPress={() => console.log("Forgotten password pressed")}>
              <Text style={styles.optionText}>Forgotten password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={navigateToSignUp} style={styles.createPasswordButton}>
            <Text style={styles.createPasswordButtonText}>Create new Account</Text>
          </TouchableOpacity>
          <View style={styles.languagesContainer}>
            <TouchableOpacity onPress={() => console.log("Languages pressed")}>
              <Text style={styles.languagesText}>English(US) , Sesotho , More Languages...</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  titleContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  hospitalTitle: {
    color: 'grey',
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  loginText: {
    color: '#808080',
    fontSize: 22,
    textAlign: 'right',
    
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F3F3F3',
    height: 48,
    width: '100%',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 16,
  },
  invalidInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
    height: 48,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  optionsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  optionText: {
    color: '#007AFF',
    fontSize: 14,
  },
  createPasswordButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
    height: 48,
    justifyContent: 'center',
  },
  createPasswordButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  languagesContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  languagesText: {
    color: '#8E8E93',
    fontSize: 14,
  },
});

export default Login;
