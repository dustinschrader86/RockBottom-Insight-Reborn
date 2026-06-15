import * as ImagePicker from 'expo-image-picker';

export const pickScreenshot = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: false,
    quality: 1,
  });

  if (result.canceled) {
    return null;
  }

  return result.assets[0].uri;
};
