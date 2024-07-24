export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      data = {status: 200, body: 'Success'};
      resolve(data);
    } else {
      reject("The fake API is not working currently");
    }
  }); // Returns promise
}
