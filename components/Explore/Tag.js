import React, {Component} from 'react';
import {Text, View} from "react-native";

class Tag extends Component {
    render() {
        return (
            <View style={{minHeight: 20, minWidth: 40, padding: 5,
                backgroundColor: 'white', borderColor: '#ddd',
                borderWidth: 0.2, borderRadius: 2, marginRight: 5}}>
                <Text style={{fontWeight: '700', fontSize: 10}}>{this.props.title}</Text>
            </View>
        );
    }
}

export default Tag;
