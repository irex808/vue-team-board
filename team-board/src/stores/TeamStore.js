import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {
  state: () => ({
    name: '',
    spots: 10,
    members: []
  }),

  actions: {
    async fill() {
      let response = await import('@/team.json');

      this.$state = response.default;
    },

    grow(spots) {
      this.spots = spots;
    }
  },

  getters: {
    spotsRemaining() {
      console.log(this.spots - this.members.length)
      return this.spots - this.members.length;
    }
  }
});