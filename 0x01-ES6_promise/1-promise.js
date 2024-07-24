export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      const data = {status: 200, body: 'Success'};
      resolve(data);
    } else {
      reject("The fake API is not working currently");
    }
  }); // Returns promise
}
