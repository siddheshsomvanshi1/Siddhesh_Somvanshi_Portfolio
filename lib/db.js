const { username, password } = process.env;
const connectionSrt =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.nqsc6.mongodb.net/siddheshportfolio?retryWrites=true&w=majority&appName=Cluster0";
