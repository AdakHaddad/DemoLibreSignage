// CCTVView.js

var BaseComponent = require("libresignage/ui/components/BaseComponent");
var CCTVController = require("./CCTVController.js");

/**
 * View class for the CCTV dashboard.
 */
class CCTVView extends BaseComponent {
  /**
   * Construct a new CCTVView object.
   *
   * @param {APIInterface} api An APIInterface object.
   */
  constructor(api) {
    super();
    this.api = api;
    this.controller = new CCTVController(api);

    this.init_state({
      ready: false,
      loading: false,
      viewersData: [],
    });
  }

  /**
   * Initialize the view.
   */
  async init() {
    this.state("loading", true);

    try {
      const data = await this.controller.getViewersData();
      this.state("viewersData", data);
    } catch (e) {
      console.error("Failed to fetch viewers data:", e);
    } finally {
      this.state("loading", false);
      this.state("ready", true);
      this.render();
    }
  }

  /**
   * Render the CCTV dashboard.
   */
  render() {
    if (!this.state("ready")) return;

    const container = document.querySelector("#cctv-dashboard");
    container.innerHTML = "";

    const table = document.createElement("table");
    table.classList.add("viewer-table");

    // Create table headers
    const header = document.createElement("tr");
    ["Signage ID", "Viewer", "Time"].forEach((title) => {
      const th = document.createElement("th");
      th.textContent = title;
      header.appendChild(th);
    });
    table.appendChild(header);

    // Populate table rows with data
    this.state("viewersData").forEach((entry) => {
      const row = document.createElement("tr");
      [row.signageId, row.viewer, row.time].forEach((text) => {
        const td = document.createElement("td");
        td.textContent = text;
        row.appendChild(td);
      });
      table.appendChild(row);
    });

    container.appendChild(table);
  }
}

module.exports = CCTVView;
