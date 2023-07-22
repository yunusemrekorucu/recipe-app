import React from 'react';

import images from '@/assets/images';
import {AppIcon, AppImage, Block, Text} from '@/components/Common';
import {useStyledTag} from '@/hooks';
import {COLORS} from '@/theme';
import {ICONS} from '@/utils';

const ProductCard = () => {
  const CardContainer = useStyledTag(Block, 'w-150 rounded-10 mr-16', () => ({
    height: 323,
  }));
  const FavoriteBox = useStyledTag(Block, 'row center bg-white middle w-32 h-32  rounded-50');
  return (
    <CardContainer pressable>
      <Block style={{zIndex: 1}}>
        <AppImage style={{borderRadius: 100}} url={images.images['food-plate']} width={150} height={150} />
      </Block>
      <Block p-12 rounded-10 bottom style={{backgroundColor: '#F1F1F1'}} flex bottom-70>
        <Text text-center semibold>
          Pepper sweetcorn ramen
        </Text>
        <Block mt-18 row center justify-between>
          <Block>
            <Text>Time</Text>
            <Text semibold>10 Mins</Text>
          </Block>
          <FavoriteBox>
            <AppIcon name={ICONS.bookmark2} color={COLORS.black} size={21} />
          </FavoriteBox>
        </Block>
      </Block>
    </CardContainer>
  );
};

export default ProductCard;
