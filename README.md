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

## Phase 2: Return & Rewire (April 4)

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

---

## Phase 3: Building Core Functionality & Debugging (April 5)

**Goals**
- Implement the core calculation logic for the calculator.
- Refactor the code to ensure variables interact with the calculation functions correctly.
- Ensure that the operate function can handle the operations and update the display with the result.
- Implement the clear and delete buttons to reset the calculator and remove the last input, respectively.
- Track which part of the calculation is being edited (first number, operator, or second number).

**Challenges**
- Understanding how to make sure that the delete and clear buttons worked as expected without breaking the flow of inputs.
- Managing the flow of the calculation, making sure that each operator and operand interacts correctly, especially when chained operations are involved.
- Struggling with cases where the display wouldn't update or show the correct values after input, particularly when handling multiple operators in sequence.

**Approach**
- Handling delete and clear buttons:
    - Implemented the delete functionality that updates the elements based on which part of the equation is currently active.
- Both the delete and clear buttons generally work, but there are still some cases where they display errors.
- Fixing errors: I need to revisit how the buttons interact with the display in certain sequences and investigate how to prevent errors in these situations. 

**Fixes & Decisions**
- Delete button fix: After refining the delete functionality, it generally updates the first, second number, or operator correctly. However, I still need to make sure it doesn't produce errors in certain sequences.
- Clear Button: The clear button works as expected, but similar to the delete button, I need to address specific cases where pressing the button in particular scenarios still results in an error.

**Reflection**
- This phase felt smoother than the last, as I was able to build the core functionality and troubleshoot some of the bugs.
- I'm getting better at identifying which parts of the code need refinement.

---

## Next Steps (To-Do)

- Investigate edge cases: Review the scenarios where the delete and clear buttons are still causing the error message to show up, and find a way to fix those issues.
- Prevent division by zero and ensure the calculator handles decimals and multiple operator presses.
- Finalizing UI: Now that the logic is more stable, I'll focus on fine tuning the layout and making sure the UI looks good, especially for cases like long numbers or multiple operations.
- Keyboard input support: Add the ability for users to control the calculator with keyboard inputs for a more user friendly experience.
- Overall design refinement.

---

## Phase 4: Wrapping Up Core Features (April 6)

**Goals**

- Make sure all the operations work as intended.
- Handle decimal input properly.
- Fix issues with overflowing the display.
- Prevent errors when users keep pressing operators.
- Make sure dividing by zero doesn't crash the app, and show a funny error message instead.
- Get the clear and backspace buttons working perfectly.
- Reset everything after hitting the equals button.

**Challenges**

- Figuring out what was causing an error when clearing the display.
- Making sure the user can do chained calculations without causing any issues. There were a few bugs around this functionality, I had to find how and what was causing it.
- Solving how to avoid appending a new number to the previous result when trying to make a new calculation without clearing the display.
- Handling the logic around decimals, especially with all the states (like whether it's the first or second number) was a bit more complicated than expected.
- Making sure that error handling didn't prevent future calculations.

**Approach**

- Started by making sure all the basic operations (add, subtract, multiply, divide) worked properly, while allowing for decimals.
- Made sure the display only shows up to 10 characters per number or part of the equation, and when results get longer, they’re trimmed with an ellipsis (“…”) to avoid overflowing issues.
- Handled the divide-by-zero scenario by displaying a message that makes it clear the operation can’t be done, but doesn’t break the app.
- After you hit the equals button, I ensured that everything resets so you can start a new calculation cleanly.
- Finally, fixed the clear button so it wipes everything correctly, and the backspace button deletes the last input like it should.

**Fixes & Decisions**

- Decimals: I added the rule that only one decimal is allowed per number, which makes things easier to track and prevents people from accidentally typing things like 12.3.5.
- Clear & Backspace: The clear button wipes everything clean and starts fresh, while backspace deletes one digit at a time, which is exactly what users expect.
- Had some unexpected bugs after creating new functionalities, like not being able to properly chain calculations. When I fixed that, then the display wasn't showing the result, meaning I had to go back to the code and figure out how to fix the new bug.

**Reflection**

It was very challenging because it felt like every time I tried to fix a bug, a new one was showing up. So there was a lot of trial and error, debugging, and trying to reproduce the bugs to find out exactly how and why they happened to be able to fix them. I feel pretty good about where things are right now. I’m confident the main functionalities are solid.

---

**Next Steps**

- Styling the calculator: Now that the logic is mostly working, it’s time to focus on making it look nice. I’ll work on button styles, fonts and colors.
- Keyboard support: I’ll add support for keyboard input so users can type in their calculations. The buttons will work just like they do when clicked, but with keyboard events instead.
- Testing across devices: Once styling is in place, I’ll make sure it looks good on mobile and desktop devices, and adjust things if needed.
