import data from './mockdata/华农.json'

export default [
  {
    url: "/video_info",
    method: "GET",
    response: (req) => {
        console.log(req)
        return data;
    },
  }
]
