import styles from "./styles";
import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import CardComponent from "../card/CardComponent";

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Settings",
    headerLeft: Platform.select({
      ios: (
        <Icon name="ios-log-out" type="ionicon" containerStyle={styles.icon} onPress={() => {}} />
      ),
      android: (
        <Icon
          name="md-menu"
          type="ionicon"
          containerStyle={styles.icon}
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the SettingsScreen. Please add heres</Text>
        <CardComponent></CardComponent>
      </View>
    );
  }
}

export default SettingsScreen;
