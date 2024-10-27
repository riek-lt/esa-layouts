import { companionWaitingAllCropConfirm } from '@esa-layouts/util/replicants';
import { resetAllCropFromStreamDeck } from '@esa-layouts/layouts';

let timeout: NodeJS.Timeout | undefined;

export default async function actionResetCropAll(): Promise<void> {
  if (!companionWaitingAllCropConfirm.value) {
    companionWaitingAllCropConfirm.value = true;

    // reset after 10 seconds in case of accidental press
    timeout = setTimeout(() => {
      companionWaitingAllCropConfirm.value = false;
    }, 10 * 1000);
    return;
  }

  clearTimeout(timeout);
  timeout = undefined;

  companionWaitingAllCropConfirm.value = false;
  await resetAllCropFromStreamDeck();
}
