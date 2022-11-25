import { NamedItem } from "../components/name";
import { renderNames } from "../components/names";
import { mainLayout } from "../layouts/main";

export function renderNamesPage(names: NamedItem[]) {
    const body = renderNames(names);
    const title = "List of Names";
    return mainLayout(body, title);
}