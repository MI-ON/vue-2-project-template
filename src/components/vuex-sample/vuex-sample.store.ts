import { ActionContext } from 'vuex';

export interface IVuexSampleState {
  count: number;
}

const state: IVuexSampleState = {
  count: 0,
};

const getters = {
  count(state: IVuexSampleState): number {
    return state.count;
  }
};

const mutations = {
  setMessage(state: IVuexSampleState, count: number): void {
    state.count = count;
  }
};

const actions = {
  increaseCount(context: ActionContext<IVuexSampleState, IVuexSampleState>): void {
    context.commit('setMessage', context.state.count + 1);
  },
  decreaseCount(context: ActionContext<IVuexSampleState, IVuexSampleState>): void {
    context.commit('setMessage', context.state.count - 1);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
