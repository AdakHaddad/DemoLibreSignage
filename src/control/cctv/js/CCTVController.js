// CCTVController.js

class CCTVController {
  /**
   * Construct a new CCTVController.
   *
   * @param {APIInterface} api An APIInterface object.
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Fetch data for who is viewing each signage.
   * This is a dummy implementation.
   *
   * @returns {Array} A list of dummy data indicating people viewing each signage.
   */
  async getViewersData() {
    // Dummy data simulating API response
    return [
      { signageId: 1, viewer: "John Doe", time: "10:00 AM" },
      { signageId: 2, viewer: "Jane Smith", time: "10:05 AM" },
      { signageId: 3, viewer: "Alex Johnson", time: "10:10 AM" },
    ];
  }
}

module.exports = CCTVController;
