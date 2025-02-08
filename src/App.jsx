import Routers from "./routers/Routers.jsx";
import axios from "axios";

const App = () => {
    axios.defaults.baseURL = 'https://api.codinggura.com/'
    axios.defaults.headers.get['Content-Type'] = 'application/json'
    axios.defaults.headers.get['Accept'] = 'application/json'

    axios.interceptors.request.use(function (config) {
        config.headers.Authorization = 'Bearer 871|bysAIPhIVNaMyFHYZguvZT1FsZsLJg8nqyORYz3Aae4b86d0'
        return config;
    })

  return (
      <>
          <Routers />
      </>
  )
}

export default App
