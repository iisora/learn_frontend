export const partyNight = {
  data() {
    return {
      title: "Welcome to Party Night! PON!! PON!!",
      subTitle: "Party Night is very Hot so much",
      number: 0,
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    },
  },
  created() {
    console.log("created in mixin");
  },
};
