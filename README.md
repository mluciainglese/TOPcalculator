# Calculator Project Log
_A developer log for the calculator app, part of The Odin Project's curriculum._

---

## Phase 1: Initial Setup (Mid–Late March 2025)

**Goals**
- Set up the boilerplate: HTML, CSS, and JS files all linked.
- Design a basic UI layout to visualize the calculator and get a feel for how the pieces will connect.


**Challenges**
- Unsure how to break down the logic. I had the layout, but functionality felt out of reach.
- Had some confidence in DOM manipulation and event listeners from other projects, but I knew this would be more challenging.

**Approach**
- Followed The Odin Project up to Step 4.
- Used CSS Flexbox for the layout (WIP, this is just to have a good visualization for now).
- Set up variables to store the first operand, operator, and second operand.
- Set up `add`, `subtract`, `multiply`, `divide` functions.
- Put the project on pause to go strengthen my JS skills through smaller challenges.

**Reflection**
- Hitting pause was frustrating but necessary. I wasn’t ready to tackle the full logic and needed more practice.

---

## Phase 2: Return & Rewire (April 4–5)

**Goals**
- Get number buttons to display input.
- Start building the core logic for handling operations.

**Challenges**
- Knowing what step to take next without getting overwhelmed.

**Approach**
- Made number and operator buttons update the display.
- Began building the logic for tracking operands and operators.
- Began working on event listeners for number and operator buttons. 

**Fixes & Decisions**
- Avoided touching decimals and keyboard input for now to focus on core logic.
- Noticed a potential issue with multiple operator presses, will fix later.
- The clear and delete buttons were working fine at the beginning, but once I started storing numbers and operators into variables, the buttons don't work anymore. Will focus on that after I manage to make actual calculations.

**Reflection**
- This phase felt better. I had more clarity and confidence than last time thanks to the practice I decided to have before resuming the project.
- I'm being more intentional about when I seek help vs when I push through on my own.

---

## Next Steps (To-Do)

- Add support for decimals (only allow one per number).
- Prevent users from clicking multiple operators in a row.
- Handle chained operations.
- Fix clear/delete buttons.
- Add keyboard input support.
