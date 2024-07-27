import {uploadPhoto, createUser} from "./utils.js";

export default handleProfileSignup() {
  Promise.all([uploadPhoto, createUser])
    .then(user => {
      console.log(body,firstName,lastName)
        })
    .catch(error => {
      console.error("Signup system offline");
};
