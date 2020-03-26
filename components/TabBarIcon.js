import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={24}
      style={{ marginBottom: -3 }}
      color={props.color}
    />
  );
}
