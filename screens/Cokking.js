import React from "react";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    Animated,
    StyleSheet
} from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";
import LottieView from "lottie-react-native";
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';



const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const BookDetail = ({ item, route, navigation }) => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [book, setBook] = React.useState(null);
    const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
    const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = React.useState(0);

    const indicator = new Animated.Value(0);

    React.useEffect(() => {
        var book = route.params
        setBook(book)
    }, [])



    setTimeout(() => {
        setIsLoading(false);

    }, 1500);

    if (isLoading) {
        return (
            <View style={{ backgroundColor: COLORS.black, flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <LottieView
                    style={styles.heartLottie}
                    source={require("../assets/lf30_editor_pwlh8kpl.json")}
                    autoPlay />
            </View>
        )
    }



    function renderBookInfoSection() {
        return (
            <View style={{ flex: 1 }}>


                <ImageBackground
                    source={book.bookCover}
                    resizeMode="cover"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        opacity: 0.5,
                        backgroundColor: 'transparent',


                    }}
                />




                {/* Color Overlay */}
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        // backgroundColor: book.backgroundColor

                    }}
                >
                </View>

                {/* Navigation header */}
                <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 80, alignItems: 'flex-end' }}>
                    <TouchableOpacity
                        style={{ marginLeft: SIZES.base }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.back_arrow_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: book.navTintColor
                            }}
                        />
                    </TouchableOpacity>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        {/* <Text style={{ ...FONTS.h3, color: book.navTintColor }}>Book Detail</Text> */}
                    </View>

                    <TouchableOpacity
                        style={{ marginRigth: SIZES.base }}
                        onPress={() => console.log("Click More")}
                    >
                        <Image
                            source={icons.more_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: book.navTintColor,
                                alignSelf: 'flex-end'
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/* Book Cover */}
                <View style={{ flex: 5, paddingTop: SIZES.padding2, alignItems: 'center' }}>
                    <Image
                        source={book.bookCover}
                        resizeMode="contain"
                        style={{
                            flex: 1,
                            width: 150,
                            height: 150,
                        }}
                    />
                </View>

                {/* Book Name and Author */}
                <View style={{ flex: 1.8, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>{book.bookName}</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.white }}>{book.author}</Text>
                </View>

                {/* Book Info */}
                <View
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        margin: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: "rgba(0,0,0,0.3)"
                    }}
                >
                    {/* Rating */}
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.rating}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Rating</Text>
                    </View>

                    <LineDivider />

                    {/* Pages */}
                    <View style={{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.pageNo}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>How Time take</Text>
                    </View>

                    <LineDivider />

                    {/* Language */}
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.language}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Language</Text>
                    </View>
                </View>


            </View>

        )
    }

    function renderBookDescription() {

        const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ? scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight

        const difference = scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1

        return (
            <View style={{ flex: 1, flexDirection: 'row', padding: SIZES.padding }}>
                {/* Custom Scrollbar */}
                <View style={{ width: 4, height: "100%", backgroundColor: COLORS.gray1 }}>
                    <Animated.View
                        style={{
                            width: 4,
                            height: indicatorSize,
                            backgroundColor: COLORS.lightGray4,
                            transform: [{
                                translateY: Animated.multiply(indicator, scrollViewVisibleHeight / scrollViewWholeHeight).interpolate({
                                    inputRange: [0, difference],
                                    outputRange: [0, difference],
                                    extrapolate: 'clamp'
                                })
                            }]
                        }}
                    />
                </View>

                {/* Description */}
                <ScrollView
                    contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onContentSizeChange={(width, height) => {
                        setScrollViewWholeHeight(height)
                    }}
                    onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => {
                        setScrollViewVisibleHeight(height)
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: indicator } } }],
                        { useNativeDriver: false }
                    )}
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding, }}>Brief description</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>{book.description}</Text>

                    <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding, marginTop: SIZES.paddingtop, }}>Ingerediants</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>{book.description}</Text>

                    <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding, marginTop: SIZES.paddingtop, }}>Directions</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>{book.description}</Text>
                </ScrollView>
            </View>
        )
    }

    function renderBottomButton(item, index) {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {/* Bookmark */}
                <TouchableOpacity
                    style={{
                        width: 60,
                        backgroundColor: COLORS.secondary,
                        marginLeft: SIZES.padding,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => ("Save to Bookmark")}
                >
                    <Image
                        source={icons.bookmark_icon}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.lightGray2
                        }}
                    />
                </TouchableOpacity>

                {/* Start Reading */}
                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.primary,
                        marginHorizontal: SIZES.base,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>Thanks for Reading</Text>
                </TouchableOpacity>
            </View>
        )
    }

    if (book) {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: COLORS.black }}>
                {/* Book Cover Section */}
                <View style={{ flex: 4 }}>
                    {renderBookInfoSection()}
                </View>

                {/* Description */}
                <View style={{ flex: 2 }}>
                    {renderBookDescription()}
                </View>

                {/* Buttons */}
                <View style={{ height: 70, marginBottom: 30 }}>
                    {renderBottomButton()}
                </View>

            </ScrollView>
        )
    } else {
        return (
            <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
                <Text style={{ alignSelf: 'center' }}>
                    Hello form indore!

                </Text>

            </View>

        )
    }

}

export default BookDetail;


const styles = StyleSheet.create({

    heartLottie: {
        width: 80,
        height: 80,
    },

});
