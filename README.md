![Plugin Icon](./icon.png)

# Logseq Run JS

Run arbitrary javascript and show output on a page.

[![Screencast of the plugin in use](https://github.com/meain/logseq-plugin-runjs/assets/14259816/92d257e8-d99e-4742-ac73-d7d262473be5)](https://github.com/meain/logseq-plugin-runjs/assets/14259816/92d257e8-d99e-4742-ac73-d7d262473be5)

## Usage

Add a `runjs` block to a page and write your javascript inside it. To
set the content of the block, you can call `setOutput` function with
the output string as the argument.

Here is an example use case. This sets the block as a random quote. I
would maybe put in the journal template so that there is nice quote
there. To get this, you will just have to add this as a runjs block.

``` javascript
fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
        setOutput(data.content + "\n  -" + data.author);
    });
```

---

### Thanks

- Took a lot of inspiration from https://github.com/xyhp915/logseq-fenced-code-plus

- <a target="_blank" href="https://icons8.com/icon/IRL1LOOrpdYO/program">Program</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
