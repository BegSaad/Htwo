// packages
import { Dimensions, PixelRatio, Platform, ScaledSize } from 'react-native';

// Retrieve initial screen's width
let screenWidth: number = Dimensions.get('window').width;

// Retrieve initial screen's height
let screenHeight: number = Dimensions.get('window').height;

export const isiPAD: boolean = screenHeight / screenWidth < 1.6;
export const isTablet: boolean = screenHeight / screenWidth < 1.6;

export const isIOS: boolean = Platform.OS === 'ios';
export const isAndroid: boolean = Platform.OS === 'android';
export const isX: boolean = isIphoneXorAbove();

export function isIphoneXorAbove(): boolean {
  const dimen: ScaledSize = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    // @ts-ignore -> Platform has no isPad/isTVOS in RN types
    !Platform.isPad &&
    // @ts-ignore
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.width === 390 ||
      dimen.height === 844 ||
      dimen.width === 428 ||
      dimen.height === 926)
  );
}

/**
 * Converts provided width percentage to independent pixel (dp).
 */
const wp = (widthPercent: string | number): number => {
  const elemWidth: number =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 */
const hp = (heightPercent: string | number): number => {
  const elemHeight: number =
    typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

/**
 * Event listener function that detects orientation change
 */
let orientationChangeListener: { remove: () => void } | undefined;

const listenOrientationChange = (that: { setState: (arg: { orientation: string }) => void }) => {
  orientationChangeListener = Dimensions.addEventListener('change', ({ window }: { window: ScaledSize }) => {
    screenWidth = window.width;
    screenHeight = window.height;

    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
    });
  });
};

/**
 * Wrapper function that removes orientation change listener
 */
const removeOrientationListener = () => {
  if (orientationChangeListener && typeof orientationChangeListener.remove === 'function') {
    orientationChangeListener.remove();
    orientationChangeListener = undefined;
  }
};

export { wp, hp, listenOrientationChange, removeOrientationListener };

