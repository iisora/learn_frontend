export default {
  // 非同期的な処理
  updateMessage({ commit }, newMessage) {
    commit("updateMessage", newMessage);
  },
};
