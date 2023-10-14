![Plugin Icon](./icon.png)

# Logseq Run JS

Run arbitrary javascript and show output on a page.

[![Screencast of the plugin in use](https://github.com/meain/logseq-plugin-runjs/assets/14259816/92d257e8-d99e-4742-ac73-d7d262473be5)](https://github.com/meain/logseq-plugin-runjs/assets/14259816/92d257e8-d99e-4742-ac73-d7d262473be5)

> [!WARNING]  
> Under the hood, it just does an `eval` of the javascript. So be careful with what you run.

## Usage

Add a `runjs` block to a page and write your javascript inside it. To
set the content of the block, you can call `setOutput` function with
the output string as the argument.

``` javascript
setOutput("Hello LogSeq!")
```

Here is an example use case. You can use the below code snippet to
fetch and show a random quote. This can maybe go into the daily page
template so that you have a new quote in your journal.

``` javascript
fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
        setOutput(data.content + "\n  -" + data.author);
    });
```

*You can make use of all the things you know and love from js and
browsers here, as I am just doing an `eval` of the javascript within
the plugin.*

Here is an example of using LogSeq graph data. You can learn more
about it [here](https://plugins-doc.logseq.com/).

``` javascript
logseq.Editor.getCurrentPage().then((page) => {
    setOutput(page.originalName + "\nLast updated: " + new Date(page.updatedAt).toDateString());
});
```

Or you can use it to show the current weather.

``` javascript
fetch("https://wttr.in/?format=%t")
    .then((resp) => resp.text())
    .then((data) => setOutput("Current temperature: " + data));
```

### TODOs

- [ ] Support of outputting more than just text
- [ ] Persisting output of a run across page loads

---

### Thanks

- Took a lot of inspiration from [xyhp915/logseq-fenced-code-plus](https://github.com/xyhp915/logseq-fenced-code-plus)

- <a target="_blank" href="https://icons8.com/icon/IRL1LOOrpdYO/program">Program</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
