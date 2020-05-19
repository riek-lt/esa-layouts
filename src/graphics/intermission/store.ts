import clone from 'clone';
import type { ReplicantBrowser } from 'nodecg/types/browser';
import type { Bids, DonationReader, MusicPlayer, Prizes, SponsorLogos, UpcomingRunID } from 'schemas'; // eslint-disable-line object-curly-newline, max-len
import SpeedcontrolUtil from 'speedcontrol-util/browser';
import { RunData, RunDataArray, TwitchCommercialTimer } from 'speedcontrol-util/types';
import type { Asset, Tracker } from 'types';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

const sc = new SpeedcontrolUtil(nodecg);
Vue.use(Vuex);

// Replicants and their types
const reps: {
  upcomingRunID: ReplicantBrowser<UpcomingRunID>;
  musicPlayer: ReplicantBrowser<MusicPlayer>;
  donationReader: ReplicantBrowser<DonationReader>;
  sponsorLogoAssets: ReplicantBrowser<Asset[]>;
  sponsorLogos: ReplicantBrowser<SponsorLogos>;
  bids: ReplicantBrowser<Bids>;
  prizes: ReplicantBrowser<Prizes>;
  intermissionSlides: ReplicantBrowser<Asset[]>;
  runDataArray: ReplicantBrowser<RunDataArray>;
  twitchCommercialTimer: ReplicantBrowser<TwitchCommercialTimer>;
  [k: string]: ReplicantBrowser<unknown>;
} = {
  upcomingRunID: nodecg.Replicant('upcomingRunID'),
  musicPlayer: nodecg.Replicant('musicPlayer'),
  donationReader: nodecg.Replicant('donationReader'),
  sponsorLogoAssets: nodecg.Replicant('assets:sponsor-logos'),
  sponsorLogos: nodecg.Replicant('sponsorLogos'),
  bids: nodecg.Replicant('bids'),
  prizes: nodecg.Replicant('prizes'),
  intermissionSlides: nodecg.Replicant('assets:intermission-slides'),
  runDataArray: sc.runDataArray,
  twitchCommercialTimer: sc.twitchCommercialTimer,
};

interface StateTypes {
  nextRuns: RunData[];
  currentBid?: Tracker.FormattedBid;
  currentPrize?: Tracker.FormattedPrize;
  currentMedia?: Asset;
  upcomingRunID: UpcomingRunID;
  bids: Bids;
  prizes: Prizes;
  intermissionSlides: Asset[];
}

export const store = new Vuex.Store({
  state: {
    nextRuns: [],
    upcomingRunID: null,
    bids: [],
    prizes: [],
    intermissionSlides: [],
  } as StateTypes,
  mutations: {
    setState(state, { name, val }): void {
      Vue.set(state, name, val);
    },
    setCurrentBid(state, bid?: Tracker.FormattedBid): void {
      Vue.set(state, 'currentBid', bid);
    },
    setCurrentPrize(state, prize?: Tracker.FormattedPrize): void {
      Vue.set(state, 'currentPrize', prize);
    },
    setCurrentMedia(state, media?: Asset): void {
      Vue.set(state, 'currentMedia', media);
    },
    setNextRuns(state, runs: RunData[]): void {
      Vue.set(state, 'nextRuns', runs);
    },
  },
});

Object.keys(reps).forEach((key) => {
  reps[key].on('change', (val) => {
    store.commit('setState', { name: key, val: clone(val) });
  });
});

export default async function (): Promise<Store<StateTypes>> {
  return NodeCG.waitForReplicants(
    ...Object.keys(reps).map((key) => reps[key]),
  ).then(() => store);
}
