import * as React from 'react';
import {Text, View, StyleSheet} from "react-native";

export default function Inbox() {
    return (
        <View style={styles.container}>
            <Text>Inbox</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
