import React from 'react';
import { Text, SafeAreaView, Button, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTag, faMapMarkerAlt, faThermometer } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const navigation = useNavigation();

  const navigateToSpecials = () => {
    navigation.navigate('Specials');
  };

  const navigateToFindRoute = () => {
    navigation.navigate('FindRoute');
  };

  const navigateToTemperature = () => {
    navigation.navigate('Temperature');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Specials"
          onPress={navigateToSpecials}
          icon={<FontAwesomeIcon icon={faTag} />}
          color="#FF5733" 
          style={styles.button}
        />
        <View style={styles.space}></View> {/* Space between buttons */}
        <Button
          title="Find your Route"
          onPress={navigateToFindRoute}
          icon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
          color="#4CAF50" 
          style={styles.button}
        />
        <View style={styles.space}></View> {/* Space between buttons */}
        <Button
          title="Temperature"
          onPress={navigateToTemperature}
          icon={<FontAwesomeIcon icon={faThermometer} />}
          color="#3498DB" 
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Choose your desired background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%', // Adjust the width of the button container
  },
  button: {
    width: '100%', // Make buttons have equal width
    height: 60, // Adjust the height as needed
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5, // Add elevation for drop shadow (Android)
    shadowColor: '#000', // Add shadow color
    shadowOffset: { width: 0, height: 2 }, // Add shadow offset
    shadowOpacity: 0.25, // Add shadow opacity
    shadowRadius: 3.84, // Add shadow radius
  },
  space: {
    height: 10, // Adjust the height of the space between buttons
  },
});
