export default function handleResponseFromAPI(promise) {
    if (promise) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  }
  myPromise.then((result) => {
    console.log("Got a response from the API:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}
