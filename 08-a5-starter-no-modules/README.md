1,2.)
The modules added are
-main.js
Own: Event listener as well as calling render after state changes

-render.js
Own: UI updates 
Exports: render()

-state.js
Own: The app state and filtering / selected Items
Exports: getFilteredItems() getSelectedItem()

-api.js
Own: loading JSON, fetch erros
Exports: loadItems()

3.) How to run it
python3 -m http.server 6412
and on chrome 
http://localhost:6412

4.)
App loads items from item.json
search filters works by title
clicking and items show information
clearing the search bar brings back all the other items
Retry button reloads the data
Error message shows if the fetch fails
