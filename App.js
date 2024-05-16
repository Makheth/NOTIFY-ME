import React from 'react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { View, Button, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import Routes from './Routes';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App(){
  return<Routes/>;
};