main_page = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Todo List</title>
        <style>
            @import url('https://fonts.googleapis.com/css?family=Slabo+27px');
            body
            {
                filter: drop-shadow(0 0 0.25rem blueviolet);
                text-shadow: 0 0 1px rgba(0, 0, 0, .5);
                user-select: none;
                color: azure;
                font-family: 'Slabo 27px', serif;
                font-size: 15px;
                background: midnightblue radial-gradient(circle, transparent 50%, black 150%) no-repeat fixed;
                height: 100%;
            }
            img
            {
                display: block;
                transition: filter 1s, transform .5s;
                box-shadow: blueviolet;
            }
            .add_button
            {
                filter: hue-rotate(140deg);
                transform: rotate(-45deg);
            }
            .add_button, .del_button
            {
                clip-path: circle(50% at 50% 50%);
            }
            .del_button:hover
            {
                filter: hue-rotate(-40deg);
                transform: rotate(-90deg);
            }
            .del_button
            {
            }
            .add_button:hover
            {
                filter: hue-rotate(190deg);
                transform: rotate(45deg);
            }
            .reminder
            {
                user-select: text;
                background: rgba(47%, 53%, 60%, .5);
                padding: 2px 5px;
                border-radius: 12px;
                transition: 1s;
            }
            .reminder:focus
            {
                transition: 1s;
                background: rgba(47%, 53%, 60%, .5);
                outline: none;
            }
        </style>
        <template id="Entry">
            <tr id=UUID>
                <td>
                    <a href="javascript:removeElement('UUID')">
                        <img class="del_button" draggable="false" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSI+CiAgICA8ZGVmcz4KICAg%0D%0AICAgICA8c3R5bGU+LmNscy0xe2ZpbGw6I2ZmMmQwMDt9LmNscy0ye2ZpbGw6I2Q5MDAwMDt9LmNs%0D%0Acy0ze2ZpbGw6bm9uZTtzdHJva2U6IzYwMzgxMztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2Ut%0D%0AbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4O30uY2xzLTR7ZmlsbDojZWQxZTc5O30uY2xz%0D%0ALTV7ZmlsbDojNjAzODEzO308L3N0eWxlPgogICAgPC9kZWZzPgogICAgPHRpdGxlPlhJbkNpcmNs%0D%0AZTwvdGl0bGU+CiAgICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjE0LjE3IiBjeT0iMTQuMTci%0D%0AIHI9IjEzLjY3Ii8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNC4xNywxQTEzLjE4LDEz%0D%0ALjE4LDAsMSwxLDEsMTQuMTcsMTMuMTksMTMuMTksMCwwLDEsMTQuMTcsMW0wLTFBMTQuMTgsMTQu%0D%0AMTgsMCwxLDAsMjguMzUsMTQuMTcsMTQuMTgsMTQuMTgsMCwwLDAsMTQuMTcsMFoiIHRyYW5zZm9y%0D%0AbT0idHJhbnNsYXRlKDAgMCkiLz4KICAgIDxsaW5lIGNsYXNzPSJjbHMtMyIgeDE9IjcuOTgiIHkx%0D%0APSIyMC4zNyIgeDI9IjIwLjM3IiB5Mj0iNy45OCIvPgogICAgPGxpbmUgY2xhc3M9ImNscy00IiB4%0D%0AMT0iNy45OCIgeTE9IjIwLjM3IiB4Mj0iMjAuMzciIHkyPSI3Ljk4Ii8+CiAgICA8bGluZSBjbGFz%0D%0Acz0iY2xzLTMiIHgxPSI3Ljk4IiB5MT0iNy45OCIgeDI9IjIwLjM3IiB5Mj0iMjAuMzciLz4KICAg%0D%0AIDxsaW5lIGNsYXNzPSJjbHMtNSIgeDE9IjcuOTgiIHkxPSI3Ljk4IiB4Mj0iMjAuMzciIHkyPSIy%0D%0AMC4zNyIvPgo8L3N2Zz4=" width="28" alt=""/>
                    </a>
                </td>
                <td>
                    <div class="reminder">
                        Replace
                    </div>
                </td>
            </tr>
        </template>
        <!--suppress JSUnusedLocalSymbols -->
        <script>
            entryNumber = 0;
            function addEntry()
            {
                function f(id)
                {
                    return document.getElementById(id);
                }
                function g(id)
                {
                    return f(id).innerHTML;
                }
                if(g("Input") !== "")
                {
                    entryNumber++;
                    let innerHTML = g("Entry")
                        .replace("Replace", g("Input"))
                        .replace("UUID", "Entry #" + entryNumber)
                        .replace("UUID", "Entry #" + entryNumber);
                    f("Table").innerHTML += innerHTML;
                }
            }
            function removeElement(elementId)
            {
                // From: https://www.abeautifulsite.net/adding-and-removing-elements-on-the-fly-using-javascript
                // Removes an element from the document
                const element = document.getElementById(elementId);
                element.parentNode.removeChild(element);
            }
            function getHtml()
            {
                return document.documentElement.innerHTML;
            }
            function sendAMessage(msg)
            {
                // Source: https://stackoverflow.com/questions/7318962/node-js-send-message-to-server
                alert(12333333);
                const net=require("net");
                alert(1111111);
                const c = net.createConnection(2345,'localhost');
                alert(2222222222222222);
                c.on("connect", function()
                {
                    // connected to TCP server.
                    alert(123123123);
                    c.write(msg);
                });
            }
        </script>
    </head>
    <body>
        <p style="font-size: 40px;text-align: center">
            Todo List
        </p>
        <table id="Table">
            <tr>
                <td>
                    <a href="javascript:addEntry();">
                        <img class="add_button" draggable="false" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSI+CiAgICA8ZGVmcz4KICAg%0D%0AICAgICA8c3R5bGU+LmNscy0xe2ZpbGw6I2ZmMmQwMDt9LmNscy0ye2ZpbGw6I2Q5MDAwMDt9LmNs%0D%0Acy0ze2ZpbGw6bm9uZTtzdHJva2U6IzYwMzgxMztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2Ut%0D%0AbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4O30uY2xzLTR7ZmlsbDojZWQxZTc5O30uY2xz%0D%0ALTV7ZmlsbDojNjAzODEzO308L3N0eWxlPgogICAgPC9kZWZzPgogICAgPHRpdGxlPlhJbkNpcmNs%0D%0AZTwvdGl0bGU+CiAgICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjE0LjE3IiBjeT0iMTQuMTci%0D%0AIHI9IjEzLjY3Ii8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNC4xNywxQTEzLjE4LDEz%0D%0ALjE4LDAsMSwxLDEsMTQuMTcsMTMuMTksMTMuMTksMCwwLDEsMTQuMTcsMW0wLTFBMTQuMTgsMTQu%0D%0AMTgsMCwxLDAsMjguMzUsMTQuMTcsMTQuMTgsMTQuMTgsMCwwLDAsMTQuMTcsMFoiIHRyYW5zZm9y%0D%0AbT0idHJhbnNsYXRlKDAgMCkiLz4KICAgIDxsaW5lIGNsYXNzPSJjbHMtMyIgeDE9IjcuOTgiIHkx%0D%0APSIyMC4zNyIgeDI9IjIwLjM3IiB5Mj0iNy45OCIvPgogICAgPGxpbmUgY2xhc3M9ImNscy00IiB4%0D%0AMT0iNy45OCIgeTE9IjIwLjM3IiB4Mj0iMjAuMzciIHkyPSI3Ljk4Ii8+CiAgICA8bGluZSBjbGFz%0D%0Acz0iY2xzLTMiIHgxPSI3Ljk4IiB5MT0iNy45OCIgeDI9IjIwLjM3IiB5Mj0iMjAuMzciLz4KICAg%0D%0AIDxsaW5lIGNsYXNzPSJjbHMtNSIgeDE9IjcuOTgiIHkxPSI3Ljk4IiB4Mj0iMjAuMzciIHkyPSIy%0D%0AMC4zNyIvPgo8L3N2Zz4=" width="28" alt=""/>
                    </a>
                </td>
                <td>
                    <div class="reminder" contenteditable="true" id="Input">
                        Add Stuff!
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>`;
const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 2345;
const server = http.createServer((req, res) =>
                                 {
                                     res.end(main_page)
                                 });
server.listen(port, hostname, () =>
{
    console.log(`Server running at http://${hostname}:${port}/`);
});

