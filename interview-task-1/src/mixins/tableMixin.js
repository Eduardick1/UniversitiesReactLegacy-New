var React = require("react");

var tableMixin = {
  setTable: function (res) {
    this.setState({
      universities: res,
      totalItems: res.length,
      itemsPerPage: 10,
      activePage: 1,
    });
  },

  handleClick: function (page) {
    this.setState({
      activePage: page,
    });
  },
  renderTable: function (rows = []) {
    if (!this.state.universities.length) {
      return <h1>Not found</h1>;
    }
    return (
      <table>
        <thead>
          <tr>
            <th>University name</th>
            <th>Country code</th>
            <th>Domains</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ name, alpha_two_code, domains }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{alpha_two_code}</td>
              <td>
                {domains.map((domain) => (
                  <a key={domain} href={`https://${domain}`} target="_blank">
                    {domain}
                  </a>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};

export default tableMixin;
