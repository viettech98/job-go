import { Dimensions } from "react-native";
import { Colors } from "values/colors";
var width = Dimensions.get("window").width; //full width
const styles = {
    searchBox: {
        top: 0,
        position: "absolute",
        width: width
    },
    inputWrapper: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
        marginBottom: 0,
        backgroundColor: "#fff",
        opacity: 0.9,
        borderRadius: 7
    },
    secondInputWrapper: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 0,
        backgroundColor: "#fff",
        opacity: 0.9,
        borderRadius: 7
    },
    inputSearch: {
        fontSize: 14
    },
    label: {
        fontSize: 10,
        fontStyle: "italic",
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 0
    }
};

export default styles;