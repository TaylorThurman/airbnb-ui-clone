import * as React from 'react';
import {Text, View, StyleSheet} from "react-native";

export default function Saved() {
    return (
        <View style={styles.container}>
            <Text>Saved</Text>
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
