import { ReplicantModule, ReplicantTypes } from '@esa-layouts/browser_shared/replicant_store';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

Vue.use(Vuex);

@Module({ name: 'OurModule' })
class OurModule extends VuexModule {
  // Helper getter to return all replicants.
  get reps(): ReplicantTypes {
    return this.context.rootState.ReplicantModule.reps;
  }

  @Mutation
  addParticipant(name: string): void {
    //
  }

  @Mutation
  removeParticipant(name: string): void {
    //
  }

  @Mutation
  addPoints(name: string, points: number): void {
    //
  }

  @Mutation
  sendUpdate(): void {
    //
  }
}

const store = new Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: { ReplicantModule, OurModule },
});
export default store;
export const storeModule = getModule(OurModule, store);
