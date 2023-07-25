import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {ProfileStats} from 'data';

import images from '@/assets/images';
import {AppButton, AppIcon, AppImage, AppScreen, Block, Text} from '@/components';
import {useStyledTag} from '@/hooks';
import {RootStackNavigationPropsType} from '@/navigation';
import {COLORS} from '@/theme';
import {ICONS} from '@/utils';
import {RenderWhen} from '@/utils/render-when';

function kFormatter(num: number) {
  return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num);
}

const badges = [
  {id: 1, title: 'Recipe'},
  {id: 2, title: 'Video'},
];

const Profile = () => {
  const [selected, setSelected] = useState<'Video' | 'Recipe'>('Video');
  const navigation = useNavigation<RootStackNavigationPropsType>();

  const Divider = useStyledTag(Block, 'border mt-20', () => ({borderColor: COLORS.neutral30, borderWidth: 0.8}));
  const Stats = useStyledTag(Block, ' row center justify-between mt-20');

  const SegmentTab = useStyledTag(Block, 'row center justify-between');
  const SegmentItem = useStyledTag(Block, 'center flex px-12 py-8 rounded-10', ({title}) => ({
    backgroundColor: selected === title ? COLORS.primary : 'transparent',
  }));

  return (
    <AppScreen safe p-0>
      <Block px-20 row center justify-between>
        <Text fs-24 bold>
          {'My profile'}
        </Text>
        <Block pressable onPress={() => navigation.replace('AUTHENTICATION_ROOT')} p-20 absolute right-10>
          <AppIcon name={ICONS.more} color={COLORS.black} />
        </Block>
      </Block>
      <Block px-20 mt-20 row justify-between center>
        <Block rounded-50 w-100 h-100 center middle>
          <AppImage url={images.images['default-avatar']} width={100} height={100} />
        </Block>
        <AppButton w-107 h-36 type="outline" title="Edit Profile" />
      </Block>
      <Block px-20>
        <Text mt-16 semibold fs-20>
          Allessandra Blair
        </Text>
        <Text style={{width: '84%'}}>Hello world I’m Alessandra Blair, I’m from Italy 🇮🇹 I love cooking so much!</Text>
        <Stats>
          {ProfileStats.map(item => (
            <Block key={item?.id} center>
              <Text fs-12>{item?.title}</Text>
              <Text fs-20 semibold>
                {kFormatter(item?.amount)}
              </Text>
            </Block>
          ))}
        </Stats>
      </Block>
      <Divider />
      <SegmentTab px-20 mt-12>
        {badges.map((item, index) => (
          <SegmentItem pressable onPress={() => setSelected(item?.title)} key={index} title={item?.title}>
            <Text style={{color: selected === item?.title ? COLORS.white : COLORS.primary}}>{item?.title}</Text>
          </SegmentItem>
        ))}
      </SegmentTab>
      <Block px-20 mt-20>
        <RenderWhen>
          <RenderWhen.If isTrue={selected === 'Recipe' ? true : false}>
            <Text>Tarifler</Text>
          </RenderWhen.If>
          <RenderWhen.If isTrue={selected === 'Video' ? true : false}>
            <Text>Videolar</Text>
          </RenderWhen.If>
        </RenderWhen>
      </Block>
    </AppScreen>
  );
};

export default Profile;
