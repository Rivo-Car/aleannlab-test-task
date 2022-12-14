import sanitize from "sanitize-html";

export type NamedItem = {
  name: string;
  rank: number;
};

export function renderName({name, rank}: NamedItem) {
return `
<li class="list-group-item d-flex align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${ sanitize(name) }</div>
    </div>
    <div
      class="btn-toolbar"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      <div class="input-group me-2">
        <button
          type="button"
          class="btn btn-outline-secondary btn-sm disabled"
        >
        <i class="bi bi-chevron-up"></i>
        </button>
        <input
          type="text"
          class="form-control form-control-sm text-center"
          size="3"
          disabled
          value= ${ sanitize(rank.toString()) }
        />
        <button
          type="button"
          class="btn btn-outline-secondary btn-sm"
        >
          <i class="bi bi-chevron-down"></i>
        </button>
      </div>
      <div class="btn-group" role="group" aria-label="First group">
        <button
          type="button"
          class="btn btn-outline-secondary btn-sm"
        >
          <i class="bi bi-pencil"></i>
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary btn-sm"
        >
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    </div>
  </li> 
`};
