#More pseudo-classes
##There are a number of other pseudo-classes of interest, and we don't have space to write about them all in detail here. Let's talk about a few more that you should take the time to investigate.

###The following are fairly well-supported in modern browsers:

- The :focus-within pseudo-class matches an element that has received focus or contains an element that has received focus. This is useful if you want a whole form to highlight in some way when an input inside it is focused.
- The :focus-visible pseudo-class matches focused elements that received focus via keyboard interaction (rather than touch or mouse) — useful if you want to show a different style for keyboard focus compared to mouse (or other) focus.
- The :placeholder-shown pseudo-class matches "input" and "textarea" elements that have their placeholder showing (i.e. the contents of the placeholder attribute) because the value of the element is empty.

###The following are also interesting, but as yet not well-supported in browsers:

- The :blank pseudo-class selects empty form controls. :empty also matches elements that have no children, like "input", but it is more general — it also matches other empty elements like <br> and <hr>. :empty has reasonable browser support; the :blank pseudo-class's specification is not yet finished, so it not yet supported in any browser.
- The :user-invalid pseudo-class, when supported, will be similar to :invalid, but with better user experience. If the value is valid when the input receives focus, the element may match :invalid as the user enters data if the value is temporarily invalid, but will only match :user-invalid when the element loses focus. If the value was originally invalid, it will match both :invalid and :user-invalid for the whole duration of the focus. In a similar manner to :invalid, it will stop matching :user-invalid if the value does become valid.