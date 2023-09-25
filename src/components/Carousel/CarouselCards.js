import React, { useRef, useState } from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useSelector } from "react-redux";
import { userBalanceListSelectors } from "../../store/selectors";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "./CarouselCardItem/CarouselCardItem";

const CarouselCards = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const isCarousel = useRef(null);
  const listBalance = useSelector(userBalanceListSelectors);
  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={listBalance}
        renderItem={({ item }) => {
          return <CarouselCardItem item={item} activeSlide={activeSlide} />;
        }}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => {
          setActiveSlide(index);
        }}
        useScrollView={true}
      />
    </View>
  );
};

export default CarouselCards;
