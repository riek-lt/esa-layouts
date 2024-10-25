import { changeCropFromFromStreamDeck } from '@esa-layouts/layouts';
import { companionFastCropEnabled, selectedCropItem as companionSelectedCropItem } from '../util/replicants';

export default async function actionStreamDeckModifyCrop(
  name: string,
  value: unknown,
): Promise<void> {
  if (companionSelectedCropItem.value < 0) {
    return;
  }

  const settings = value as {
    side: number;
    inc_dec: number;
  };

  if (companionFastCropEnabled.value) {
    settings.inc_dec *= 20;
  }

  await changeCropFromFromStreamDeck(settings.side, settings.inc_dec);
}
