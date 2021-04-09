import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";

import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";

const FocusContainer = styled.View`
  flex: 0.5;
`;

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <FocusContainer>
      <View style={styles.innerContainer}>
        <Text style={styles.title}> What would you like to focus on?</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={{
              flex: 1,
              marginRight: spacing.md,
              backgroundColor: colors.grey,
            }}
            onSubmitEditing={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </FocusContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: "center",
  },
  title: {
    color: colors.offWhite,
    fontWeight: "bold",
    fontSize: 24,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: "row",
    alignItems: "center",
  },
});
