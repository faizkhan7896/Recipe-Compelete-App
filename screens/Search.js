import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
} from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

import LottieView from "lottie-react-native";


const list = [
    {
        id: 1,
        bookName: "Best French toast",
        bookCover: images.FrenchToast,
        rating: 4.5,
        language: "Eng",
        pageNo: "3 min",
        author: "Jasmine Warga",
        genre: [
            "Delicious", "Nutritious", "tasty"
        ],
        readed: "12k",
        description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
        method: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    },
    {
        id: 2,
        bookName: "Petits Pains Au Chocolat",
        bookCover: images.BreakPetits,
        rating: 4.1,
        language: "Eng",
        pageNo: "35 min",
        author: "Seith Fried",
        genre: [
            "Nutritious", "tasty"
        ],
        readed: "13k",
        description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
        method: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    },
    {
        id: 3,
        bookName: "Crunchy Delicious Waffles",
        bookCover: images.Breakwaffle,
        rating: 3.5,
        language: "Eng",
        pageNo: "20 min",
        author: "Ana C Bouvier",
        genre: [
            "tasty", "Nutritious", "Delicious"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        method: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#FFF"
    },
    {
        id: 4,
        bookName: "Eggs Baked In Potatoes",
        bookCover: images.BreakEggsPotatoes,
        rating: 3.5,
        language: "Eng",
        pageNo: "2 min",
        author: "Ana C Bouvier",
        genre: [
            "tasty", "Nutritious", "Delicious"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        method: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#FFF"
    },
    {
        id: 5,
        bookName: "Honey Wheat Muffins",
        bookCover: images.Breakmuffins,
        rating: 4.5,
        language: "Eng",
        pageNo: "25 min",
        author: "Jasmine Warga",
        genre: [
            "Delicious", "Nutritious", "tasty"
        ],
        readed: "12k",
        description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
        method: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    // Main Recipies
    ,
    {
        id: 6,
        bookName: "Vegetarian VFC",
        bookCover: images.LunchVFC1,
        rating: 4.1,
        language: "Eng",
        pageNo: "45 min",
        author: "Seith Fried",
        genre: [
            "Spicy", "tasty"
        ],
        readed: "13k",
        description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    },
    {
        id: 7,
        bookName: "Butter Chicken",
        bookCover: images.Lunchbutterchicken2,
        rating: 3.5,
        language: "Eng",
        pageNo: "60 min",
        author: "Ana C Bouvier",
        genre: [
            "tasty", "Spicy", "Delicious"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#FFF"
    },
    {
        id: 8,
        bookName: "Chicken Chilly",
        bookCover: images.Lunchchillichicken3,
        rating: 3.5,
        language: "Eng",
        pageNo: "60 min",
        author: "Ana C Bouvier",
        genre: [
            "tasty", "Spicy", "Delicious"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#FFF"
    },
    {
        id: 9,
        bookName: "Chicken Biryani",
        bookCover: images.LunchChickenbiryani4,
        rating: 3.5,
        language: "Eng",
        pageNo: "61 min",
        author: "Ana C Bouvier",
        genre: [
            "tasty", "Spicy", "Delicious"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#FFF"
    },
    {
        id: 10,
        bookName: "Kadai Paneer",
        bookCover: images.LunchKadaiPaneer5,
        rating: 3.5,
        language: "Eng",
        pageNo: "45 min",
        author: "Ana C Bouvier",
        genre: [
            "tasty", "Spicy", "Delicious"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#FFF"
    }

    // Sweets Recipies

    ,
    {
        id: 11,
        bookName: "Rasgulla",
        bookCover: images.sweet1,
        rating: 4.1,
        language: "Eng",
        pageNo: "40 min",
        author: "Seith Fried",
        genre: [
            "Spicy", "tasty"
        ],
        readed: "13k",
        description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    },
    {
        id: 12,
        bookName: "Gulab Jamun",
        bookCover: images.sweet2,
        rating: 3.5,
        language: "Eng",
        pageNo: "37 min",
        author: "Ana C Bouvier",
        genre: [
            "tasty", "Spicy", "Delicious"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#FFF"
    },
    {
        id: 13,
        bookName: "Khopra Paak",
        bookCover: images.sweets3,
        rating: 3.5,
        language: "Eng",
        pageNo: "1 hr 14 min",
        author: "Ana C Bouvier",
        genre: [
            "tasty", "Spicy", "Delicious"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#FFF"
    },
    {
        id: 14,
        bookName: "Ras Malai",
        bookCover: images.sweet4,
        rating: 3.5,
        language: "Eng",
        pageNo: "50 min",
        author: "Ana C Bouvier",
        genre: [
            "tasty", "Spicy", "Delicious"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#FFF"
    },
    {
        id: 15,
        bookName: "Zarda",
        bookCover: images.sweet5,
        rating: 3.5,
        language: "Eng",
        pageNo: "40 min",
        author: "Ana C Bouvier",
        genre: [
            "tasty", "Spicy", "Delicious"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#FFF"
    }


];

const App = ({ navigation }) => {

    const [isLoading, setIsLoading] = React.useState(true);

    setTimeout(() => {
        setIsLoading(false);

    }, 1500);

    if (isLoading) {
        return (
            <View style={{ backgroundColor: COLORS.black, flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <LottieView
                    style={styles.heartLottie}
                    source={require("../assets/lf30_editor_5xhdmp9o.json")}
                    autoPlay />
            </View>
        )
    }

    return (
        <View style={styles.Container}>
            <StatusBar barStyle='light-content' backgroundColor={COLORS.black} />


            <View style={{
                height: 50, width: "90%", alignItems: "center",
                alignSelf: 'center', borderRadius: 10, backgroundColor: COLORS.secondary, flexDirection: "row", marginTop: 40
            }}>

                <Image
                    source={icons.search_icon}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        marginLeft: 14,
                        marginRight: 10
                    }}
                />

                <TextInput style={{
                    height: 50, width: "90%", color: COLORS.lightGray, fontSize: 18,
                }}
                    placeholder="Search Recipe" placeholderTextColor={COLORS.lightGray} />


            </View>

            <Text style={styles.Text}>Cetegorie's</Text>


        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: COLORS.black,
        flex: 1,
    },
    // plusicon: {
    //     marginRight: -15,
    //     paddingLeft: 20,
    //     alignSelf: 'center',
    // },
    SeemoreText: {
        paddingTop: 17,
        fontSize: 17,
        color: "#6e7177",
        textDecorationLine: 'underline',
    },
    graycolum: {
        backgroundColor: "#2a2e37",
        height: 80,
        width: "92%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        alignSelf: 'center',

        borderRadius: 20
    },
    columText: {
        fontSize: 16,
        color: "#fff",
        alignSelf: 'center',
        marginLeft: 10

    },
    Text: {
        paddingTop: 25,
        paddingBottom: 15,
        paddingLeft: 25,
        fontSize: 20,
        fontWeight: '700',
        color: "#cfcfcf"
    },
    HeadingText: {
        paddingTop: 8,
        paddingLeft: 25,
        fontWeight: "bold",
        fontSize: 22,
        color: "#fff"
    },
    Button: {
        backgroundColor: "#f66631",
        borderRadius: 20,
        width: 150,
        height: 45,
        flexDirection: "row"

    },
    ButtonText: {
        paddingLeft: 8,
        fontSize: 19,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: 'center',

    },
    ButtonText2: {
        paddingLeft: 8,
        paddingTop: 5,
        fontSize: 17,
        color: "#fff",
        alignSelf: 'center',


    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    heartLottie: {
        width: 60,
        height: 60,
    },

});

export default App;
