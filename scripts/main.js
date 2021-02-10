// Tabs
const tabs             = document.querySelectorAll(".tabs__item"),
      tabsCloseButtons = document.querySelectorAll(".tabs__item .close-sm"),
      tabsContainer    = document.querySelector(".tabs");

if (isOverflownX(tabsContainer)) {
    tabsContainer.classList.add("overflown");
}

tabs.forEach((elem, index) => {
    elem.onclick = function(event) {
        if (index == 0 || event.target != elem.children[1]) {
            tabs.forEach(elem => elem.classList.remove("active"));
            elem.classList.add("active");
        }
    };
});

tabsCloseButtons.forEach(elem => {
    elem.onclick = function(event) {
        elem.parentElement.remove();
    };
});




// Graph tabs
const graphTabs = document.querySelectorAll(".detaildata__tab");

graphTabs.forEach(elem => {
    elem.onclick = function(event) {
        graphTabs.forEach(elem => elem.classList.remove("active"));
        elem.classList.add("active");
    };
});




// Functions
function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    return div.firstChild; 
}
function isOverflownX(element) {
    return element.scrollWidth > element.clientWidth;
}

const compiled = _.template(`
<div class="windows__item detaildata">
    <header class="windows__header">
        <h2 class="windows__heading">Detailed analysis of the "population" field</h2>
        <span class="hide"></span>
        <div class="close-lg"></div>
    </header>
    <table class="detaildata__table">
        <tr class="detaildata__row">
            <% _.forEach(users, function(user) { %><td><%- user %></td><% }); %>
        </tr>
        <tr class="detaildata__row">
            <td>Population</td>
            <td>135.89</td>
            <td>189.06</td>
            <td>189.06</td>
            <td>189.06</td>
            <td>189.06</td>
        </tr>
        <tr class="detaildata__row">
            <td>Fieldname</td>
            <td>100</td>
            <td>99</td>
            <td>98</td>
            <td>97</td>
            <td>96</td>
        </tr>
    </table>
    <h3 class="detaildata__heading">Graph parameters</h3>
    <div class="detaildata__parameters">
        <div class="detaildata__parameter">
            <div class="detaildata__field">
                <label for="detaildata__select">Start with:</label>
                <select name="region_name" class="windows__select windows__select_detaildata" id="detaildata__select">
                    <option value="1">2015</option>
                    <option value="1">2016</option>
                    <option value="1">2017</option>
                    <option value="1">2018</option>
                    <option value="1">2019</option>
                </select>
            </div>
        </div>
        <div class="detaildata__parameter">
            <div class="detaildata__field">
                <label for="detaildata__forward">Forecast forward:</label>
                <input type="number" class="windows__field-value windows__field-value_detaildata" id="detaildata__forward"value="1">
            </div>
            <div class="detaildata__field">
                <label for="detaildata__backward">Forecast back:</label>
                <input type="number" class="windows__field-value windows__field-value_detaildata" id="detaildata__backward"value="5">
            </div>
        </div>
        <div class="detaildata__parameter">
            <div class="detaildata__field">
                <label for="detaildata__data-for-graph">Data for graph:</label>
                <select name="region_name" class="windows__select windows__select_detaildata windows__select_data-for-graph" id="detaildata__data-for-graph">
                    <option value="1">Row 2</option>
                    <option value="1">Row 3</option>
                </select>
            </div>
        </div>
    </div>
    <div class="windows__data">
        <div class="detaildata__tabs">
            <div class="detaildata__tab active">Linear</div>
            <div class="detaildata__tab">Power</div>
            <div class="detaildata__tab">Logarithmic</div>
            <div class="detaildata__tab">Exponential</div>
            <div class="detaildata__tab">Polygonal</div>
        </div>
        <button class="button detaildata__button">Build</button>
    </div>
</div>`);