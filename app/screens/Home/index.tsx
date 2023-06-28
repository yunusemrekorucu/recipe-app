import React from 'react';

import {PopulerCategoryData} from 'data';

import {AppFlatList, AppIcon, AppInput, AppScreen, Block, Text} from '@/components';
import {CategoryBadges, ProductCard, VideoCard} from '@/components/App';
import {useStyledTag} from '@/hooks';
import {COLORS} from '@/theme';
import {ICONS} from '@/utils';

const HomeScreen = () => {
  const TrendingContent = useStyledTag(Block, ' mt-8');
  const PopulerCategoryContent = useStyledTag(Block, 'mt-18');

  return (
    <AppScreen safe scroll>
      <Text fs-24 bold>
        {'Find best recipes\nfor cooking'}
      </Text>
      <AppInput placeholder="Search recipes" iconLeft={ICONS.search} />
      {/* Ternding Now Section */}
      <TrendingContent>
        <Block row center justify-between>
          <Text fs-20 bold>
            Trending now 🔥
          </Text>
          <Block row center>
            <Text mr-4 semibold primary>
              See all
            </Text>
            <AppIcon name={ICONS.arrowRight} color={COLORS.primary} />
          </Block>
        </Block>
      </TrendingContent>
      <AppFlatList data={[1, 2, 3]} nestedScrollEnabled horizontal scrollEnabled renderItem={() => <VideoCard />} />
      {/* Populer Category Section */}
      <PopulerCategoryContent>
        <Text fs-20 bold>
          Popular category
        </Text>
        <CategoryBadges mt-12 data={PopulerCategoryData} />
        <AppFlatList data={[3]} nestedScrollEnabled horizontal scrollEnabled renderItem={() => <ProductCard />} />
      </PopulerCategoryContent>
    </AppScreen>
  );
};

export default HomeScreen;
