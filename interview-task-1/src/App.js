var ApiMixinFactory = require("./mixins/apiMixin").default;
var tableMixin = require("./mixins/tableMixin").default;
var paginationMixin = require("./mixins/paginationMixin");
var React = require("react");
var createReactClass = require("create-react-class");
var Pagination = require("./Pagination").default;
var $ = require("jquery");

const apiMixin = new ApiMixinFactory().getApiMixin($.ajax);
var App = createReactClass({
  mixins: [tableMixin, paginationMixin, apiMixin],

  render() {
    var start = this.state.itemsPerPage * (this.state.activePage - 1);
    var end = start + this.state.itemsPerPage;
    var universities = this.state.universities.slice(start, end);
    var table = this.renderTable(universities);

    return (
      <div>
        <label htmlFor="search">Поиск</label>
        <br />
        <input
          id="search"
          onChange={this.handleSearchChange}
          type="text"
          value={this.state.value}
        />
        <div>{table}</div>
        <Pagination
          itemsPerPage={this.state.itemsPerPage}
          totalItems={this.state.universities.length}
          onPageChange={this.handleClick}
        />
      </div>
    );
  },
});

export { App };
