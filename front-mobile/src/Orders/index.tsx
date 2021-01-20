import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Header from '../Header';
import OrderCard from '../OrderCard';

export default function Orders() {
    const handlerOnPress = () => {

    };
    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
            </ScrollView>
        </>

    );
}

const styles = StyleSheet.create({
   container: {
       paddingRight: '5%',
       paddingLeft: '5%'
   }
});
