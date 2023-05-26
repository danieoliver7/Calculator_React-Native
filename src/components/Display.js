import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'


const styles = StyleSheet.create({
    display: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
    },
    displaValue :{
        fontSize:60,
        color: '#FFF'
    }


})


export default props => 
    <View style={styles.display}>
        <Text style={styles.displaValue}numberOfLines={1}>{props.value}</Text>
    </View>
