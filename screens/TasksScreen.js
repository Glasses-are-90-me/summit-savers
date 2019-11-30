
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  Button,
  TextInput,
  Keyboard,
  Platform
} from "react-native";
import { tsAsExpression } from "@babel/types";
<<<<<<< HEAD:screens/TasksScreen.js
import { Button, CheckBox } from "react-native-elements";
import '@expo/vector-icons';
=======
>>>>>>> master:screens/JournalScreen.js

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

export default class TasksScreen extends Component {
  state = {
    tasks: [],
    text: "",
    checked: false,
  };

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;

    if (notEmpty) {
      this.setState(
        prevState => {
          let { tasks, text, reward } = prevState;
          return {
            tasks: tasks.concat({ key: tasks.length, text: text, reward: reward }),
            text: ""
          };
        },
        () => Tasks.save(this.state.tasks)
      );
    }
  };

  deleteTask = i => {
    this.setState(
      prevState => {
        let tasks = prevState.tasks.slice();

        tasks.splice(i, 1);

        return { tasks: tasks };
      },
      () => Tasks.save(this.state.tasks)
    );
  };

  clearTasks = () => {
    this.setState(
      prevState => {
        let tasks = prevState.tasks.slice()

        tasks.splice(0, tasks.length);

        return { tasks: tasks };
      },
      () => Tasks.save(this.state.tasks)
    );
  }

  componentDidMount() {
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
    );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ viewPadding: viewPadding })
    );

    Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
  }

  render() {
    return (
      <View
        style={[styles.container, { paddingBottom: this.state.viewPadding }]}
      >
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          keyExtractor = { (item, index) => index.toString() }
          renderItem={({ item, index }) =>
            <View>
<<<<<<< HEAD:screens/TasksScreen.js
              <View style={[styles.balloon, {backgroundColor: '#1F5595'}]}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <CheckBox
                  style={{flex: 1, padding: 10}}
                  onPress={()=>{
                    this.setState({
                        isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                  leftText={"CheckBox"}
                />
              </View>
=======
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <Text style={styles.listItem}>
                  {item.reward}
                </Text>
                <Button title="x" color="#07ADDA" onPress={() => this.deleteTask(index)} />
              </View>
              <View style={styles.hr} />
>>>>>>> master:screens/JournalScreen.js
            </View>}
        />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 350,
          }}>
          <TextInput
            style={styles.textInput}
            onChangeText={this.changeTextHandler}
            onSubmitEditing={this.addTask}
            value={this.state.text}
            justifyContent='center'
            placeholder="Add Tasks"
            returnKeyType="done"
            returnKeyLabel="done"
          />
          <Button
            title="Clear all"
            onPress={() => this.clearTasks()}
            buttonStyle={{ backgroundColor: "#A8BFCA" }}
          />
        </View>
      </View>
    );
  }
}

let Tasks = {
  convertToArrayOfObject(tasks, callback) {
    return callback(
      tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(tasks) {
    return tasks.map(task => task.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("TASKS", (err, tasks) =>
      this.convertToArrayOfObject(tasks, callback)
    );
  },
  save(tasks) {
    AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9F7FF",
    padding: viewPadding,
    paddingTop: 20
  },
  list: {
    width: "100%"
  },
  listItem: {
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 22,
    color: '#ffffff',
    borderRadius: 16
  },
  hr: {
    height: 1,
    backgroundColor: "blue"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    height: 40,
    backgroundColor: "#A8BFCA",
    borderRadius: 16,
    color: '#ffffff',
    width: 100,
    justifyContent: 'center'
  },
<<<<<<< HEAD:screens/TasksScreen.js
  balloon: {
    paddingHorizontal: 15,
    marginVertical: 10,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    borderRadius: 16
  },  
  text: {
    color: "#ffffff"
  }
=======
>>>>>>> master:screens/JournalScreen.js
  
});

TasksScreen.navigationOptions = {
  title: 'Tasks',
};


