import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";
import Colors from "../../constants/Colors";
import Card from "../UI/Card";
const ProductItem = props => {
  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableNativeFeedback onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.detail}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>{props.children}</View>
          </View>
        </TouchableNativeFeedback>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  product: {
    height: 300,
    margin: 20
  },
  touchable: {
    overflow: "hidden",
    borderRadius: 10
  },
  image: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontFamily: "nunito-bold"
  },
  price: {
    fontSize: 14,
    color: "#888"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: "25%"
  },
  detail: {
    alignItems: "center",
    height: "15%",
    padding: 10
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  }
});
export default ProductItem;
