import React, { useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useSelector } from "react-redux";
import { userBalanceListSelectors } from "../../store/selectors";
import CarouselCardItem from "./CarouselCardItem/CarouselCardItem";

const CarouselCards = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const isCarousel = useRef(null);
  const listBalance = useSelector(userBalanceListSelectors);
  return (
    <View style={style.container}>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={listBalance}
        renderItem={({ item }) => {
          return <CarouselCardItem item={item} activeSlide={activeSlide} />;
        }}
        sliderWidth={250}
        itemWidth={250}
        onSnapToItem={(index) => {
          setActiveSlide(index);
        }}
        useScrollView={true}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "yellow",
    height: "25%",
  },
});
export default CarouselCards;
