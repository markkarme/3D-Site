<template>
  <v-row>
    <v-col>
      <v-autocomplete
        v-model="friends"
        :items="people"
        chips
        closable-chips
        item-title="name"
        item-value="name"
        label="Select"
        multiple
        
      >
        <template v-slot:chip="{ props, item }">
          <v-chip v-bind="props" :text="item.raw.name"></v-chip>
        </template>

        <template v-slot:item="{ props, item }">
          <v-list-item v-bind="props" :title="item?.raw?.name"></v-list-item>
        </template>
      </v-autocomplete>
    </v-col>
  </v-row>
</template>
  <script>
export default {
  data() {
    return {
      autoUpdate: true,
      friends: [],
      people: [
        { name: "SOC Prime" },
        { name: "Threat Bounty" },
        { name: "SigmaHQ" },
        { name: "Microsoft Sentinel" },
      ],
    };
  },
  watch: {
    isUpdating(val) {
      clearTimeout(this.timeout);

      if (val) {
        this.timeout = setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },
  methods: {
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
  },
};
</script>
  