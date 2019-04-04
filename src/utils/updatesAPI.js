import axios from "axios";

export default {
  createUpdate: function(updateInformation) {
    return axios.post("/api/updates" + updateInformation);
  },

  readUpdates: function() {
    return axios.get("/api/updates");
  },

  updateUpdate: function(updateId, updateNewInformation) {
    return axios.get("/api/updates" + updateId, updateNewInformation);
  },

  deleteUpdate: function(updateId) {
    return axios.post("/api/updates" + updateId);
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
    return axios.post("/api/users" + userId);
  },
};
