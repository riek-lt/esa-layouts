import {
  companionWaitingSingleCropConfirm,
  selectedCropItem,
} from '@esa-layouts/util/replicants';
import { changeCropFromFromStreamDeck } from '@esa-layouts/layouts';

let timeout: NodeJS.Timeout | undefined;

export default async function actionResetCropSelected(): Promise<void> {
  if (selectedCropItem.value < 0) {
    return;
  }

  if (!companionWaitingSingleCropConfirm.value) {
    companionWaitingSingleCropConfirm.value = true;

    // reset after 10 seconds in case of accidental press
    timeout = setTimeout(() => {
      companionWaitingSingleCropConfirm.value = false;
    }, 10 * 1000);
    return;
  }

  clearTimeout(timeout);
  timeout = undefined;

  companionWaitingSingleCropConfirm.value = false;
  await changeCropFromFromStreamDeck(undefined, undefined);
}
