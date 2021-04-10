import React from "react";
import styled from "styled-components/native";

import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

import { theme } from "../../infrastructure/theme";
import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";
import { RoundedButton } from "../../components/RoundedButton";

const SafeArea = styled(SafeAreaView)`
  flex: 0.5;
  align-items: ${"center"};
`;

const Title = styled.Text`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.h3};
  align-items: ${"center"};
`;

const FlatListStyle = styled(FlatList)`
  flex: 1;
  contentContainerStyle = {
    flex: 1;
    align-items: ${"center"};
  }
`;

const ClearContainer = styled.View`
  align-items: ${"center"};
  padding: ${theme.space[3]};
`;

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeArea>
        <Title>History</Title>
        {!!focusHistory.length && (
          <>
            <FlatListStyle data={focusHistory} renderItem={HistoryItem} />

            <ClearContainer>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </ClearContainer>
          </>
        )}
      </SafeArea>
    </>
  );
};
// TODO: Need to change this but not sure how. Come back later.
const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? "red" : "green",
    fontSize: fontSizes.md,
  }),
});
