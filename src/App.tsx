/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {styled, withExpoSnack} from 'nativewind';
import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledTextInput = styled(TextInput);

function App(): JSX.Element {
  return (
    <StyledView className="flex-1 flex justify-start items-center">
      <StyledText className="text-red-400">Try editing me! 🎉</StyledText>
      <StyledTextInput
        className="border-[1px] border-gray-400 rounded-md p-1 w-[500px] text-center"
        defaultValue="Hello World"
      />
      <Pressable onPress={() => console.log('oi')}>
        <Text>I'm pressable!</Text>
      </Pressable>
    </StyledView>
  );
}

export default withExpoSnack(App);
