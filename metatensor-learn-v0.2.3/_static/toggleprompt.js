// Copyright PSF. Licensed under the PYTHON SOFTWARE FOUNDATION LICENSE VERSION 2.
// File originates from the Python docs theme python_docs_theme/static/copybutton.js

// ``function*`` denotes a generator in JavaScript, see
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
function* getHideableCopyButtonElements(rootElement) {
    // yield all elements with the "go" (Generic.Output),
    // "gp" (Generic.Prompt), "gt" (Generic.Traceback),
    // or "gh" (ipython) CSS class
    for (const el of rootElement.querySelectorAll('.go, .gp, .gt, .gh')) {
        yield el
    }
    // tracebacks (.gt) contain bare text elements that need to be
    // wrapped in a span to hide or show the element
    for (let el of rootElement.querySelectorAll('.gt')) {
        while ((el = el.nextSibling) && el.nodeType !== Node.DOCUMENT_NODE) {
            // stop wrapping text nodes when we hit the next output or
            // prompt element
            if (el.nodeType === Node.ELEMENT_NODE && el.matches(".gp, .go, .gh")) {
                break
            }
            // if the node is a text node with content, wrap it in a
            // span element so that we can control visibility
            if (el.nodeType === Node.TEXT_NODE && el.textContent.trim()) {
                const wrapper = document.createElement("span")
                el.after(wrapper)
                wrapper.appendChild(el)
                el = wrapper
            }
            yield el
        }
    }
}


const loadCopyButton = () => {
    /* Add a [>>>] button in the top-right corner of code samples to hide
     * the >>> and ... prompts and the output and thus make the code
     * copyable. */
    const hide_text = "Hide the prompts and output"
    const show_text = "Show the prompts and output"

    const button = document.createElement("span")
    button.classList.add("copybutton")
    button.innerText = ">>>"
    button.title = hide_text
    button.dataset.hidden = "false"
    button.style.setProperty('cursor', 'pointer')
    button.style.setProperty('position', 'absolute')
    button.style.setProperty('top', '0')
    button.style.setProperty('right', '0px')
    button.style.setProperty('text-size', '75%')
    button.style.setProperty('font-family', 'monospace')
    button.style.setProperty('padding-left', '0.2em')
    button.style.setProperty('padding-right', '0.2em')
    button.style.setProperty('border-radius', '0 3px 0 0')
    button.style.setProperty('user-select', 'none')

    const buttonClick = event => {
        // define the behavior of the button when it's clicked
        event.preventDefault()
        const buttonEl = event.currentTarget
        const codeEl = buttonEl.nextElementSibling
        if (buttonEl.dataset.hidden === "false") {
            // hide the code output
            for (const el of getHideableCopyButtonElements(codeEl)) {
                el.hidden = true
            }
            buttonEl.title = show_text
            buttonEl.dataset.hidden = "true"
        } else {
            // show the code output
            for (const el of getHideableCopyButtonElements(codeEl)) {
                el.hidden = false
            }
            buttonEl.title = hide_text
            buttonEl.dataset.hidden = "false"
        }
    }

    const highlightedElements = document.querySelectorAll(
        ".highlight-python .highlight,"
        + ".highlight-python3 .highlight,"
        + ".highlight-pycon .highlight,"
        + ".highlight-pycon3 .highlight,"
        + ".highlight-ipython .highlight,"
        + ".highlight-default .highlight"
    )

    // create and add the button to all the code blocks that contain >>>
    highlightedElements.forEach(el => {
        el.style.position = "relative"

        // if we find a console prompt (.gp), prepend the (deeply cloned) button
        const clonedButton = button.cloneNode(true)

        clonedButton.style.setProperty('border-color', el.style.BorderTopColor),
        clonedButton.style.setProperty('border-style', el.style.BorderTopStyle),
        clonedButton.style.setProperty('border-width', el.style.BorderTopWidth),
        clonedButton.style.setProperty('color', el.style.BorderTopColor),

        // the onclick attribute is not cloned, set it on the new element
        clonedButton.onclick = buttonClick
        if (el.querySelector(".gp") !== null) {
            el.prepend(clonedButton)
            if ('false' === 'true') {
                clonedButton.click()  // click once to hide
            }
        }
    })
}

if (document.readyState !== "loading") {
    loadCopyButton()
} else {
    document.addEventListener("DOMContentLoaded", loadCopyButton)
}