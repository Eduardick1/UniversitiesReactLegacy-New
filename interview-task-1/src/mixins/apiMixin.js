function ApiMixinFactory() {
  if (new.target === undefined) {
    return undefined;
  }
}

ApiMixinFactory.prototype.getApiMixin = function (httpClient) {
  return {
    getInitialState() {
      return {
        universities: [],
        value: "Russian Federation",
      };
    },
    componentWillMount() {
      this.apiClient = httpClient;
      this.search();
    },
    componentDidUpdate(_, nextState) {
      if (nextState.value !== this.state.value) this.search();
    },
    search() {
      const value = this.state.value;
      this.apiClient({
        url: `http://universities.hipolabs.com/search?country=${value}`,
        method: "GET",
      })
        .then((res) => this.setTable(res))
        .catch((err) => console.error(err));
    },

    handleSearchChange(event) {
      this.setState({
        value: event.target.value,
      });
    },
  };
};

export default ApiMixinFactory;
