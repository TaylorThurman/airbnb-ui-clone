import * as React from 'react';
import {Text, View, StyleSheet} from "react-native";

export default function Trips() {
    return (
        <View style={styles.container}>
            <Text>Trips</Text>
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
