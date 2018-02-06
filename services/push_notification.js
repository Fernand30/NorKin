import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

export default async (email) => {
    // await AsyncStorage.removeItem('kinderID_pushnotification')
    let previousToken = await AsyncStorage.getItem('kinderID_pushnotification');

    if (previousToken) {
        return;
    } else {
        let {status} = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
        console.log('status', status);
        
        if (status !== 'granted') {
            return;
        }

        let pushNotificationToken = await Notifications.getExpoPushTokenAsync();

        await axios.post("https://api.kinder-id.com/mobile/registerpushnotificationtoken", {email, pushNotificationToken});

        AsyncStorage.setItem('kinderID_pushnotification', pushNotificationToken)
         
    }
}

// ExponentPushToken[MCi87NHiHkdILZNmaFKiEc]