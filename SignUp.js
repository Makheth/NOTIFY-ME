import React from 'react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Surname is required'),
  address: yup.string().required('Address is required'),
  phone: yup.string().required('Phone Number is required'),
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      surname: '',
      address: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const navigation = useNavigation();

  const onSubmit = (formData) => {
    console.log(formData);
    
    navigation.navigate('Home');
  };

  const password = watch("password");

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#D3D3D3' }]}>
      <Text style={styles.title}>Sign Up here!</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <KeyboardAvoidingView style={styles.inner} behavior="padding" keyboardVerticalOffset={100}>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Name"
                  style={[styles.input, { marginBottom: 15 }]}
                />
              )}
              name="name"
            />
            {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Surname"
                  style={[styles.input, { marginBottom: 15 }]}
                />
              )}
              name="surname"
            />
            {errors.surname && <Text style={styles.errorText}>{errors.surname.message}</Text>}
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Address"
                  style={[styles.input, { marginBottom: 15 }]}
                />
              )}
              name="address"
            />
            {errors.address && <Text style={styles.errorText}>{errors.address.message}</Text>}
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Phone Number"
                  style={[styles.input, { marginBottom: 15 }]}
                />
              )}
              name="phone"
            />
            {errors.phone && <Text style={styles.errorText}>{errors.phone.message}</Text>}
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Email"
                  style={[styles.input, { marginBottom: 15 }]}
                />
              )}
              name="email"
            />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Password"
                  secureTextEntry
                  style={[styles.input, { marginBottom: 15 }]}
                />
              )}
              name="password"
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Confirm Password"
                  secureTextEntry
                  style={[styles.input, { marginBottom: 15 }]}
                />
              )}
              name="confirmPassword"
            />
            {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}
          </View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#87CEEB', paddingVertical: 10, paddingHorizontal: 30 }]}
            onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    alignItems: 'center',
    width:'50%'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
  },
});

export default SignUp;
