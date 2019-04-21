var config = {
  apiKey: "AIzaSyAuV5-48NTyoy1rQsgMLasyewqkzxXCFhI",
  authDomain: "mysite-454d0.firebaseapp.com",
  databaseURL: "https://mysite-454d0.firebaseio.com",
  projectId: "mysite-454d0",
  storageBucket: "mysite-454d0.appspot.com",
  messagingSenderId: "1019197266630"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;
