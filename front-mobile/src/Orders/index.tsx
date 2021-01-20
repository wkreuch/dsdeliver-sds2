import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Alert } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

export default function Orders() {

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert("Houve um erro ao buscar os pedidos!"))
            .finally(() => setIsLoading(false));
    }, [isFocused]);

    const handlerOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', { order });
    };

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <Text style={styles.text}>Buscando pedidos...</Text>
                ) :
                    orders.map(order => (
                        <TouchableWithoutFeedback key={order.id} onPress={() => handlerOnPress(order)}>
                            <OrderCard order={order} />
                        </TouchableWithoutFeedback>
                    ))}
            </ScrollView>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    text: {
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 29,
        letterSpacing: -0.24,
        color: '#9E9E9E',
        fontFamily: 'OpenSans_400Regular'
    }
});
