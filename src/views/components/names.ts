import { NamedItem, renderName } from "./name";

export function renderNames(names: NamedItem[]) {
  return `
<div class="container">
  <h1>List of Names</h1>
  <div class="d-grid col-12 mx-auto">
  <button
    type="button"
    class="btn btn-outline-primary btn-lg active"
  >
  <i class="bi bi-person-fill-add"></i>
  </button>
  </div>
  <div class="row">
    <div class="col">
      <ol class="list-group list-group-numbered">
       ${names.map(renderName).join('\n')}
      </ol>
    </div>
  </div>
</div>
`;
};