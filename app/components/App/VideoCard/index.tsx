import React from 'react';
import {StyleSheet} from 'react-native';

import images from '@/assets/images';
import {AppIcon, AppImage, AppImageBackground, Block, Text} from '@/components/Common';
import {useStyledTag} from '@/hooks';
import {COLORS, window} from '@/theme';
import {heightPixel, ICONS} from '@/utils';

const VideoCard = () => {
  const FavoriteBox = useStyledTag(Block, 'absolute row center bg-white right-8 top-8 middle w-32 h-32  rounded-50');
  const PlayButton = useStyledTag(Block, 'center middle flex');
  const RatingBox = useStyledTag(Block, 'absolute center middle left-8 top-8 w-58 h-28  rounded-8 bg-neutral30');
  const MinutesBox = useStyledTag(Block, 'absolute center middle right-8 bottom-8 w-58 h-28  rounded-8  bg-neutral30');
  const VideoContent = useStyledTag(Block, 'mt-12');

  return (
    <Block pressable mt-16 relative style={styles.container}>
      <AppImageBackground style={{borderRadius: 10}} source={images.images['video-image']}>
        <React.Fragment>
          <RatingBox row center>
            <AppIcon name={ICONS.star} color={COLORS.white} size={16} />
            <Text white semibold ml-4>
              4,5
            </Text>
          </RatingBox>
          <FavoriteBox>
            <AppIcon name={ICONS.bookmark2} color={COLORS.black} size={21} />
          </FavoriteBox>
          <MinutesBox row center>
            <Text white semibold ml-4>
              15:10
            </Text>
          </MinutesBox>
          <PlayButton>
            <Block center middle h-48 w-48 bg-primary rounded-50 bg-neutral30>
              <AppIcon name={ICONS.play} color={COLORS.white} size={21} />
            </Block>
          </PlayButton>
        </React.Fragment>
      </AppImageBackground>
      <VideoContent>
        <Block row justify-between>
          <Text fs-15 semibold>
            How to make sushi at home
          </Text>
          <AppIcon name={ICONS.edit} />
        </Block>
        <Block row center mt-8>
          <AppImage url={images.images['profile-photo']} width={32} height={32} />
          <Text ml-8>By Niki Samantha</Text>
        </Block>
      </VideoContent>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {height: heightPixel(244), width: window.width - 80, paddingRight: 20},
});

export default VideoCard;
