// axios connect the front with back
// service setup the config for the connection
import axios from "axios";

export default class UserService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/users`,
      // withCredentials=true create cookies so cors (server) can reconize with user is in session
      withCredentials: true,
    });
  }

  // same methods from backend
  get = () => this.instance.get("/");
  getOne = (id) => this.instance.get(`/${id}`);
}
