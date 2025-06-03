declare module 'react-native-syntax-highlighter' {
  import * as React from 'react';
  import { StyleProp, ViewStyle } from 'react-native';

  export interface SyntaxHighlighterProps {
    language: string;
    style: any;
    children: string;
    highlighter?: 'hljs' | 'prism';
    customStyle?: StyleProp<ViewStyle>;
  }

  const SyntaxHighlighter: React.FC<SyntaxHighlighterProps>;

  export default SyntaxHighlighter;
}
