function Service() {
  this.fetchData = function () {
    return axios({
      url: "https://6268df2df2c0cdabac05797f.mockapi.io/api/member",
      method: "GET",
    });
  };
}
