import axios from "axios";

export default {
  createUpdate: function(updateInformation) {
    return axios.post("/api/updates", updateInformation);
  },

  readUpdates: function() {
    return axios.get("/api/updates");
  },

  newBodyText: function(updateId, bodyText) {
    return axios.post("/api/updates/edit/" + updateId, bodyText);
  },

  deleteUpdate: function(updateId) {
    return axios.delete("/api/updates/" + updateId);
  },

  toggleSticky: function(updateId) {
    return axios.put("/api/updates/pin/" + updateId);
  },

  removeSticky: function(updateId) {
    return axios.put("/api/updates/unpin/" + updateId);
  },

  createUser: function() {
    return axios.post("/api/users");
  },

  readUsers: function(userId) {
    return axios.post("/api/users" + userId);
  },

  updateUser: function(userId, userNewInformation) {
    return axios.put("/api/users" + userId, userNewInformation);
  },

  deleteUser: function(userId) {
    return axios.delete("/api/users" + userId);
  },
};
