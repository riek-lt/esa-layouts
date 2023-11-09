import { replicantModule, ReplicantModule, ReplicantTypes } from '@esa-layouts/browser_shared/replicant_store';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { TaskMasterContestantList } from '@esa-layouts/types/schemas';

Vue.use(Vuex);

@Module({ name: 'OurModule' })
class OurModule extends VuexModule {
  // Helper getter to return all replicants.
  get reps(): ReplicantTypes {
    return this.context.rootState.ReplicantModule.reps;
  }

  @Mutation
  setPoints(index: number, points: number): void {
    const contestants = replicantModule.repsTyped.taskmasterContestantList;

    contestants[index].currentScore = points;
    contestants[index].visibleScore = points;

    replicantModule.setReplicant<TaskMasterContestantList>({
      name: 'taskmasterContestantList',
      val: contestants,
    });
  }
}

const store = new Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: { ReplicantModule, OurModule },
});
export default store;
export const storeModule = getModule(OurModule, store);
