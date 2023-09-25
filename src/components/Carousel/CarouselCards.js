import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useSelector } from "react-redux";
import { userBalanceListSelectors } from "../../store/selectors";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "./CarouselCardItem/CarouselCardItem";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);
  const listBalance = useSelector(userBalanceListSelectors);
  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={listBalance}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
      />
    </View>
  );
};

export default CarouselCards;
