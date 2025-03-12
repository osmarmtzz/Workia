import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { View } from 'react-native';
//Tabs

export default function Menu({ route }) {
    // Asegúrate de que el índice inicial esté dentro del rango de rutas
    const initialIndex = route?.params && route.params >= 0 && route.params < 4 ? route.params : 0;
    const [index, setIndex] = React.useState(initialIndex);
    const [routes] = React.useState([
        { key: 'account', title: 'Mi Cuenta', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
        { key: 'agenda', title: 'Agenda', focusedIcon: 'calendar', unfocusedIcon: 'calendar-outline' },
        { key: 'notifications', title: 'Notificaciones', focusedIcon: 'chat', unfocusedIcon: 'chat-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        account: CuentaTab,
        agenda: Calendario,
        notifications: NotificacionesTab,
    });

    return (
        <View style={{ flex: 1 }}>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                barStyle={{ backgroundColor: '#0086FF' }}
            />
        </View>
    );
};