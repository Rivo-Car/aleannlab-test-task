export function renderAppendNameForm() {
   return `
<!DOCTYPE html>
<html>
    <head>
        <title>Add a Name</title>
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
        />
    </head>
    <body>        
        <div class="container">
            <h1>Add a new name to the list</h1>
        <form class="form-inline">
        <div class="row g-3">
            <div class="col-sm">
                <label for="InputName">Full Name</label>
                <input type="text" class="form-control" id="InputName" placeholder="Enter Full Name">
            </div>
            <div class="col-sm">
                <label for="InputRank">Rank</label>
                <input type="number" class="form-control" id="InputRank" placeholder="Enter Rank">
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        </form>
        </div>
    </body>
</html>
`}