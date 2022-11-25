import { renderFooter } from "../components/footer";
import { renderHead } from "../components/head";
import { renderHeader } from "../components/header";

export function mainLayout(body: string, title: string) {
return `
<!DOCTYPE html>
<html>
    ${renderHead(title)}
    <body>
        ${renderHeader()}
        ${ body }
        ${renderFooter()}
    </body>
</html>`
}