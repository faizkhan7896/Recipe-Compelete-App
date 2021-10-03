import { ActivityIndicator, View, Image, StatusBar, StyleSheet } from "react-native"
import * as React from 'react';
import Tabs from "../navigation/Tabs";
// import Onboarding from "../Slider/Onboarding";
// import * as Animatable from 'react-native-animatable';
import LottieView from "lottie-react-native";

import { COLORS, FONTS, SIZES, icons, images } from '../constants';


const Load = ({ navigation }) => {
    const [isLoading, setIsLoading] = React.useState(true);

    setTimeout(() => {
        setIsLoading(false);

    }, 1300);

    if (isLoading) {

        return (
            <View
                style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: COLORS.black, }}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor={COLORS.black} />
                {/* <ActivityIndicator size="large" color="white" /> */}
                <LottieView
                    style={styles.heartLottie}
                    source={require("../assets/lf30_editor_2xxd6uex.json")}
                    autoPlay
                />

            </View>
        )
    }
    return (
        <View style={{ flex: 1, }}>
            <Tabs navigation={navigation} />

        </View>
    )

}
export default Load;

const styles = StyleSheet.create({

    heartLottie: {
        width: 250,
        height: 250,
    },

});