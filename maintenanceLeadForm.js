class MaintenanceLeadFormG extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<div>TESTING</div>";
  }
}

customElements.define('maintenance-lead-form-g', MaintenanceLeadFormG);
