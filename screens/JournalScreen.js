import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function JournalScreen() {
  return (
    <ScrollView style={styles.container}>{

    }
    </ScrollView>
  );
}

JournalScreen.navigationOptions = {
  title: 'Journal',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
