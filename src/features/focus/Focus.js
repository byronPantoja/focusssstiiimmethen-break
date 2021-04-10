import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";

import { theme } from "../../infrastructure/theme";
import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";

const OuterContainer = styled.View`
  flex: 0.5;
`;

const InnerContainer = styled.View`
  flex: 1;
  padding: ${theme.space[4]};
  justify-content: ${"center"};
`;

const Title = styled.Text`
  color: ${theme.colors.text.primary};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.h5};
`;

const InputContainer = styled.View`
  padding-top: ${theme.space[3]};
  flex-direction: ${"row"};
  align-items: ${"center"};
`;

const TextInputStyle = styled(TextInput)`
  flex: 1;
  margin-right: ${theme.space[3]};
  background-color: ${theme.colors.bg.secondary};
`;

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <OuterContainer>
      <InnerContainer>
        <Title> What would you like to focus on?</Title>

        <InputContainer>
          <TextInputStyle
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
        </InputContainer>
      </InnerContainer>
    </OuterContainer>
  );
};
