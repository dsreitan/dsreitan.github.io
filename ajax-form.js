customElements.define(  "ajax-form",
  class extends HTMLElement {
    constructor() {
      super();
      const form = document.querySelector("form");
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
        });
        const html = await response.text();
        form.innerHTML = html;
        form.style = "white-space: pre";
      });
    }
  }
);
