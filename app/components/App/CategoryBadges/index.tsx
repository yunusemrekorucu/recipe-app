import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import {Block, Text} from '@/components/Common';
import {useStyledTag} from '@/hooks';
import {COLORS} from '@/theme';

interface BadgeItem {
  id: number;
  title: string;
}

interface ICategoryBadges {
  data: Array<BadgeItem>;
}

const CategoryBadges = (props: ICategoryBadges) => {
  const {data, ...rest} = props;
  const [selected, setSelected] = useState<number>(1);

  const Badge = useStyledTag(Block, 'mx-4 px-12 py-8 rounded-10', ({item}) => ({
    backgroundColor: selected === item.id ? COLORS.primary : 'transparent',
  }));
  const BadgeTitle = useStyledTag(Text, '', ({item}) => ({
    color: selected === item.id ? COLORS.white : COLORS.primary,
  }));

  return (
    <Block {...rest}>
      <ScrollView horizontal nestedScrollEnabled showsHorizontalScrollIndicator={false}>
        {data?.map(item => (
          <Badge pressable onPress={() => setSelected(item?.id)} key={item.id} item={item}>
            <BadgeTitle semibold item={item}>
              {item.title}
            </BadgeTitle>
          </Badge>
        ))}
      </ScrollView>
    </Block>
  );
};

export default CategoryBadges;
