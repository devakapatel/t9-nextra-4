# Unit 3 & 4

## UNIT 3

### <mark> 1. What are the fundamentals or characteristics of Software Testing? Explain Internal & External view of Testing. </mark>

**Fundamentals/Characteristics of Software Testing:**
These are core principles that guide effective software testing:

1.  **Testing shows presence of defects, not their absence:** Testing can only reveal that bugs exist, not prove that there are no remaining bugs.
2.  **Exhaustive testing is impossible:** It's practically impossible to test all possible inputs, paths, and conditions for any non-trivial software.
3.  **Early testing (Shift Left):** Testing activities should start as early as possible in the SDLC (e.g., reviewing requirements, design). The earlier defects are found, the cheaper they are to fix.
4.  **Defect clustering:** A small number of modules or components often contain the majority of defects. Testing efforts should focus on these high-risk areas.
5.  **Pesticide paradox:** If the same tests are repeated over and over, they will eventually stop finding new defects. Test cases must be reviewed, updated, and new tests created to remain effective.
6.  **Testing is context dependent:** The approach to testing varies based on the application type, industry, and project risks (e.g., medical software needs different testing than a game).
7.  **Absence of errors fallacy:** Finding and fixing a lot of defects doesn't guarantee a successful product if the software doesn't meet the user's actual needs or expectations.

**Internal (White-Box) and External (Black-Box) View of Testing:**

These represent two fundamental approaches to designing and executing software tests, differing in their knowledge of the system under test.

**1. Internal View of Testing (White-Box Testing / Glass-Box Testing):**

- **Definition:** White-box testing involves examining the internal structure, design, and implementation of the software. The tester has full knowledge of the source code, internal logic, algorithms, and data structures.
- **Focus:** It aims to verify the internal workings of the system rather than just its external behavior.
- **Purpose:** To ensure that all internal paths are exercised, code logic is correct, loops terminate properly, and data flows are accurate.
- **Techniques:** Statement Coverage, Branch Coverage, Path Coverage, Loop Testing, Condition Testing.
- **Who performs:** Typically developers, but sometimes specialized white-box testers.
- **When:** Usually performed at lower levels of testing (Unit Testing, sometimes Integration Testing).
- **Analogy:** Testing a transparent box where you can see all the gears, wires, and internal mechanisms.

**2. External View of Testing (Black-Box Testing / Functional Testing):**

- **Definition:** Black-box testing treats the software as a "black box" where the internal structure, code, and implementation details are unknown to the tester. Tests are designed solely based on the functional requirements, specifications, and external behavior of the system.
- **Focus:** It aims to verify that the software meets its specified functional and non-functional requirements from a user's perspective.
- **Purpose:** To ensure the software behaves correctly for various inputs and scenarios, without concern for _how_ it achieves that behavior internally.
- **Techniques:** Equivalence Partitioning, Boundary Value Analysis, Decision Table Testing, State Transition Testing, Use Case Testing, Graph-Based Testing.
- **Who performs:** Independent testing teams, QA engineers, end-users (in UAT).
- **When:** Usually performed at higher levels of testing (System Testing, Acceptance Testing).
- **Analogy:** Testing a black box where you only interact with its inputs and observe its outputs, without knowing what's inside.

### <mark> 2. Describe the working process of white box testing. Explain Path Testing, Loop testing and condition testing in white box testing. </mark>

**Working Process of White Box Testing:**
The general working process of white-box testing involves:

1.  **Source Code Analysis:** The tester gains access to the source code, design documents, and architecture diagrams of the component or system to be tested.
2.  **Control Flow Graph (CFG) Creation:** For the code segment, a Control Flow Graph is created. This graph represents all possible execution paths through the code. Nodes represent processing blocks (e.g., statements), and edges represent flow of control.
3.  **Test Case Design:** Based on the CFG and chosen coverage criteria (e.g., statement, branch, path), test cases are designed to exercise specific parts of the code. This involves determining inputs that will force the execution of desired paths or conditions.
4.  **Test Execution:** The designed test cases are executed, and the actual output is compared with the expected output. Coverage tools are often used to measure the percentage of code covered by tests.
5.  **Coverage Measurement:** Tools help measure the percentage of statements, branches, or paths covered by the tests.
6.  **Defect Identification:** Any discrepancies or unexecuted code paths indicate potential defects or insufficient testing.
7.  **Refinement:** If coverage is insufficient, new test cases are designed to cover the remaining logic.

**Types of White Box Testing Techniques:**

1.  **Path Testing:**

    - **Description:** Path testing aims to ensure that every independent path through the program's control flow graph is executed at least once. An "independent path" is a path that introduces at least one new processing statement or new condition.
    - **Goal:** To exercise all possible execution sequences of a program, thereby uncovering logic errors, incorrect computations, and unintended functionality.
    - **How:** This often involves calculating **Cyclomatic Complexity** (a metric of complexity and the minimum number of independent paths) and then designing test cases to cover each identified path.
    - **Example:** For a simple `if-else` block, there are two paths: one for `if` (true) and one for `else` (false). For nested `if`s or loops, the number of paths increases significantly.

2.  **Loop Testing:**

    - **Description:** Loop testing focuses specifically on the validity of loop constructs (e.g., `for`, `while`, `do-while` loops). It aims to uncover defects related to loop initialization, termination, conditions, and boundaries.
    - **Types of tests for loops:**
      - **Simple Loops:**
        - Zero iterations (skip the loop).
        - One iteration.
        - Two iterations.
        - `n` iterations (where `n` is a typical value).
        - `n-1`, `n+1` iterations (boundary conditions).
        - Maximum number of iterations allowed.
      - **Nested Loops:** Test the innermost loop first, then the next level out, and so on. Keep outer loops at minimum iterations while testing inner ones.
      - **Concatenated Loops:** Test independently if they are independent, or as nested if they share variables.
      - **Unstructured Loops:** Avoided in structured programming, but if present, design tests to ensure controlled exit.
    - **Goal:** Ensure that loops execute correctly, avoid infinite loops, and handle edge cases for iteration counts.

3.  **Condition Testing:**
    - **Description:** Condition testing focuses on verifying the logical conditions in the code (e.g., `if` statements, `while` loop conditions, `case` statements). It aims to ensure that Boolean expressions evaluate correctly and that all possible outcomes of a condition are tested.
    - **Goal:** To detect errors in logical operators (`AND`, `OR`, `NOT`), relational operators (`>`, `<`, `==`), and arithmetic expressions that form conditions.
    - **How:**
      - **Branch Coverage:** A basic form of condition testing, ensuring both true and false outcomes of each condition are executed.
      - **Condition Coverage:** Every Boolean sub-expression within a compound condition takes on both true and false values.
      - **Multiple Condition Coverage:** All possible combinations of outcomes of conditions in a Boolean expression are tested. This is the most thorough but most expensive.
    - **Example:** For a condition `(A AND B) OR C`:
      - Branch coverage might test (T,T,T) and (F,F,F).
      - Condition coverage would ensure A is T/F, B is T/F, C is T/F independently.
      - Multiple condition coverage would test all 8 combinations (TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF).

### <mark> 3. Explain Statement Coverage, Branch Coverage and Statement Coverage in White Box Testing. </mark>

_Self-correction: The question asks for Statement Coverage twice. I will assume the second "Statement Coverage" is a typo and should be "Condition Coverage" or "Path Coverage" to cover distinct types. I will explain Statement, Branch, and Condition Coverage._

**Coverage Criteria in White Box Testing:**
Coverage criteria define the extent to which the source code has been tested. They help quantify the thoroughness of testing.

1.  **Statement Coverage (SC):**

    - **Definition:** Statement coverage ensures that every executable statement in the source code has been executed at least once during testing.
    - **Goal:** To verify that no line of code is left untested.
    - **How Measured:** (Number of executed statements / Total number of executable statements) \* 100%.
    - **Example:**
      ```
      int x = 10;          // Statement 1
      if (x > 5) {         // Statement 2 (condition)
          System.out.println("Greater"); // Statement 3
      } else {
          System.out.println("Smaller"); // Statement 4
      }
      System.out.println("Done"); // Statement 5
      ```
      - If `x=10` is tested, statements 1, 2, 3, 5 are executed. Statement 4 is not. SC is 4/5 = 80%.
      - To achieve 100% SC, we need one test case where `x > 5` is true (e.g., `x=10`) and another where it's false (e.g., `x=2`).

2.  **Branch Coverage (Decision Coverage / DC):**

    - **Definition:** Branch coverage ensures that every possible outcome from each decision point (e.g., `if`, `else`, `while`, `for`, `switch`, `case`) in the code has been executed at least once. This means testing both the `true` and `false` branches of every condition.
    - **Goal:** To ensure that all logical paths within decision structures are exercised. Branch coverage implies 100% statement coverage.
    - **How Measured:** (Number of executed branches / Total number of branches) \* 100%.
    - **Example (using above code):**
      - The `if (x > 5)` condition has two branches: `true` (executes "Greater") and `false` (executes "Smaller").
      - To achieve 100% Branch Coverage, we need at least two test cases:
        1.  `x=10`: covers the `true` branch.
        2.  `x=2`: covers the `false` branch.

3.  **Condition Coverage (CC):**
    - **Definition:** Condition coverage ensures that every boolean sub-expression within a compound condition (e.g., `if (A AND B)`) evaluates to both `true` and `false` at least once. It's a stronger form than branch coverage for complex conditions.
    - **Goal:** To reveal errors in the logical operators within a condition.
    - **How Measured:** (Number of true/false outcomes for all sub-conditions / Total number of possible true/false outcomes for all sub-conditions) \* 100%.
    - **Example:**
      ```
      if (A || (B && C)) { // Compound condition
          // ...
      }
      ```
      - To achieve 100% Condition Coverage, we need test cases such that:
        - `A` evaluates to `true` at least once.
        - `A` evaluates to `false` at least once.
        - `B` evaluates to `true` at least once.
        - `B` evaluates to `false` at least once.
        - `C` evaluates to `true` at least once.
        - `C` evaluates to `false` at least once.
      - Example test cases:
        1.  `A=T, B=F, C=F` (A is T)
        2.  `A=F, B=T, C=T` (A is F, B is T, C is T)
        3.  `A=F, B=T, C=F` (C is F)
        4.  `A=F, B=F, C=T` (B is F)
      - This ensures each primitive condition gets its `true` and `false` values. Note that this doesn't necessarily cover all combinations or even 100% branch coverage for the overall condition.

### <mark> 4. What is Basis Path Testing in white box testing? Explain the steps with cyclomatic complexity. </mark>

**Basis Path Testing:**
Basis Path Testing is a white-box testing technique developed by Tom McCabe. It focuses on identifying and testing all linearly independent paths through the program's control flow graph. This ensures that every statement in the program is executed at least once and that every branch is taken at least once.

- **Linear Independent Path:** A path through the control flow graph that introduces at least one new edge not included in other linearly independent paths.
- **Goal:** To derive a set of test cases that guarantees the execution of every independent path, thereby achieving good statement and branch coverage.

**Steps of Basis Path Testing with Cyclomatic Complexity:**

1.  **Draw the Control Flow Graph (CFG):**

    - Represent the program's logic as a directed graph.
    - **Nodes:** Represent processing statements or groups of statements (e.g., sequential code blocks, conditions).
    - **Edges:** Represent the flow of control between nodes.
    - **Compound Condition:** A compound condition (e.g., `if (A AND B)`) should be represented as two nodes for each condition (A and B), as each creates a path. A single entry and exit node should be used.

2.  **Calculate the Cyclomatic Complexity (V(G)):**

    - Cyclomatic Complexity is a quantitative measure of the number of linearly independent paths in a program's source code. It indicates the complexity of the program and the minimum number of test cases required for basis path testing.
    - **Formulas:**
      - `V(G) = E - N + 2`
        - `E`: Number of edges in the control flow graph.
        - `N`: Number of nodes in the control flow graph.
      - `V(G) = P + 1`
        - `P`: Number of predicate nodes (nodes containing conditions, e.g., `if`, `while`, `for`, `case`). A compound condition (e.g., `A AND B`) counts as two predicate nodes.
      - `V(G) = Number of regions` in the graph. (This is by drawing the graph with nodes and edges and counting enclosed areas plus the outer area).

3.  **Identify the Basis Set of Independent Paths:**

    - Based on the cyclomatic complexity `V(G)`, identify `V(G)` linearly independent paths. This is the minimum number of paths that must be tested to ensure all logic is covered.
    - Start with a baseline path (e.g., the most common or 'happy' path).
    - Systematically derive new paths by traversing one new unvisited edge at a time, relative to the paths already identified.

4.  **Design Test Cases for Each Independent Path:**
    - For each path identified in the basis set, determine the input data that will force the execution of that specific path.
    - Define expected output for each test case.

**Example (for Cyclomatic Complexity calculation):**

```
1. IF (condition_A) THEN
2.    statement_1
3. ELSE
4.    statement_2
5. ENDIF
6. WHILE (condition_B)
7.    statement_3
8. ENDWHILE
9. statement_4
```

**Step 1: Control Flow Graph (conceptual):**

- Node 1 (entry to IF)
- Node 2 (statement_1)
- Node 3 (statement_2)
- Node 4 (entry to WHILE)
- Node 5 (statement_3)
- Node 6 (statement_4)
- Edges: (1,2), (1,3), (2,4), (3,4), (4,5), (4,6), (5,4).

**Step 2: Calculate Cyclomatic Complexity:**

- **Using `P + 1`:**
  - Predicate nodes: `condition_A` (Node 1) and `condition_B` (Node 4). So, `P = 2`.
  - `V(G) = 2 + 1 = 3`.
- **Using `E - N + 2` (assuming a proper graph):**
  - Let's redraw a formal CFG:
    - Nodes: `n1 (entry)`, `n2 (cond_A)`, `n3 (stmt_1)`, `n4 (stmt_2)`, `n5 (cond_B)`, `n6 (stmt_3)`, `n7 (stmt_4)`, `n8 (exit)`.
    - Edges: `(n1,n2)`, `(n2,n3)`, `(n2,n4)`, `(n3,n5)`, `(n4,n5)`, `(n5,n6)`, `(n5,n7)`, `(n6,n5)`, `(n7,n8)`.
    - `E = 9`, `N = 8`.
    - `V(G) = 9 - 8 + 2 = 3`.
- **Using Regions:** If you draw this, you'll see 3 enclosed regions (including the outer region).

**Step 3: Identify Basis Set of Independent Paths:** (Since V(G)=3, we need 3 independent paths)

- **Path 1:** (condition_A is TRUE) -> statement_1 -> (condition_B is FALSE) -> statement_4
- **Path 2:** (condition_A is FALSE) -> statement_2 -> (condition_B is FALSE) -> statement_4
- **Path 3:** (condition_A is TRUE) -> statement_1 -> (condition_B is TRUE) -> statement_3 -> (condition_B is FALSE) -> statement_4 (This involves the loop taking at least one iteration)

(Note: For exhaustive loop testing, Path 3 might need multiple variants for 0, 1, n iterations of the loop).

### <mark> 5. How to calculate Independent Path in Path Testing? Write the formulas with example. </mark>

Calculating independent paths in path testing is directly linked to the **Cyclomatic Complexity (V(G))** of the software module. The cyclomatic complexity value is the _minimum number of linearly independent paths_ that guarantee every statement and decision point in the program is executed at least once.

**Formulas for Cyclomatic Complexity (V(G)):**

1.  **V(G) = E - N + 2**

    - `E`: Number of edges in the control flow graph.
    - `N`: Number of nodes in the control flow graph.

2.  **V(G) = P + 1**

    - `P`: Number of predicate nodes (nodes containing conditions/decisions, e.g., `if`, `while`, `for`, `case` statements). A compound condition (e.g., `A AND B`) counts as multiple predicate nodes, one for each logical part (e.g., two for `A AND B`).

3.  **V(G) = Number of regions**
    - If the control flow graph is drawn on a plane, the number of independent paths is equal to the number of enclosed regions plus the outer region.

**How to Identify Independent Paths (after calculating V(G)):**

1.  **Choose a Baseline Path:** Start by identifying a simple, common, or "happy" path through the program. This will be your first independent path.
2.  **Derive Additional Paths:** For each subsequent independent path, you modify one of the existing paths by traversing a new (unvisited) edge from a decision point (predicate node) that has not been traversed yet by the existing set of paths.
3.  **Repeat:** Continue this process until you have identified `V(G)` independent paths. Each new path should introduce at least one new branch or condition evaluation not covered by previous paths.

**Example (using `P + 1` for simplicity):**

Consider a function to calculate a discount based on customer type and purchase amount.

```
function calculateDiscount(customerType, amount) {
    let discount = 0;
    if (customerType === "Premium") {  // Predicate 1
        if (amount >= 1000) {          // Predicate 2
            discount = 0.15; // 15%
        } else {
            discount = 0.10; // 10%
        }
    } else if (customerType === "Regular") { // Predicate 3
        if (amount >= 500) {           // Predicate 4
            discount = 0.05; // 5%
        } else {
            discount = 0;    // No discount
        }
    }
    return discount;
}
```

**Step 1: Identify Predicate Nodes (P):**

- `customerType === "Premium"` (Predicate 1)
- `amount >= 1000` (Predicate 2)
- `customerType === "Regular"` (Predicate 3)
- `amount >= 500` (Predicate 4)
- Total predicate nodes `P = 4`.

**Step 2: Calculate Cyclomatic Complexity (V(G)):**

- `V(G) = P + 1 = 4 + 1 = 5`.
- This means we need to identify at least 5 independent paths.

**Step 3: Identify Basis Set of Independent Paths:**

1.  **Path 1 (Baseline - Premium, High Amount):**

    - `customerType = "Premium"` (TRUE) -> `amount >= 1000` (TRUE)
    - Input: `("Premium", 1200)` -> `discount = 0.15`

2.  **Path 2 (Premium, Low Amount):**

    - `customerType = "Premium"` (TRUE) -> `amount >= 1000` (FALSE)
    - Input: `("Premium", 500)` -> `discount = 0.10`

3.  **Path 3 (Regular, High Amount):**

    - `customerType = "Premium"` (FALSE) -> `customerType = "Regular"` (TRUE) -> `amount >= 500` (TRUE)
    - Input: `("Regular", 600)` -> `discount = 0.05`

4.  **Path 4 (Regular, Low Amount):**

    - `customerType = "Premium"` (FALSE) -> `customerType = "Regular"` (TRUE) -> `amount >= 500` (FALSE)
    - Input: `("Regular", 300)` -> `discount = 0`

5.  **Path 5 (Other Customer Type):**
    - `customerType = "Premium"` (FALSE) -> `customerType = "Regular"` (FALSE)
    - Input: `("Guest", 200)` -> `discount = 0`

These 5 paths cover all decision outcomes and ensure that every statement and branch is executed at least once, providing a comprehensive set of test cases for this function.

### <mark> 6. What is Test Scenario? Why we create test scenario? Explain it with an example. </mark>

**Test Scenario:**
A Test Scenario is a high-level representation of a possible usage of the software or a functionality to be tested. It describes "what" needs to be tested from a business or user perspective, rather than "how" it will be tested. A single test scenario can cover multiple test cases.

- **Focus:** User goals, business processes, and end-to-end functionality.
- **Format:** Usually a single line or a short paragraph describing a user action or system behavior.
- **Example:** "Verify that a user can successfully log in to the application."

**Why We Create Test Scenarios:**

1.  **Broad Coverage:** Helps ensure that all important functionalities and workflows are covered at a high level, without getting bogged down in minute details too early.
2.  **Clarity for Stakeholders:** Easier for non-technical stakeholders (e.g., product owners, business analysts) to understand and review the test coverage, fostering better collaboration.
3.  **Basis for Test Cases:** Each scenario serves as a foundation from which detailed test cases can be derived. It provides context for the subsequent "how to test" steps.
4.  **Risk Identification:** By outlining scenarios, potential risks and critical paths can be identified early in the testing process.
5.  **Test Planning:** Aids in estimating testing effort, resource allocation, and scheduling by giving a high-level view of what needs to be tested.
6.  **Traceability:** Provides a link between high-level requirements and actual testing activities.

**Example:**

Consider an **Online Bookstore Application**.

**Requirement:** "Users should be able to search for books by title, author, and ISBN."

**Test Scenarios derived from this requirement:**

1.  **Scenario 1:** Verify that a user can successfully search for a book by its full title.

    - (This scenario might later be broken down into test cases like: exact match, case-sensitive match, search with special characters, search with leading/trailing spaces, search with very long title).

2.  **Scenario 2:** Verify that a user can successfully search for a book by a partial title.

    - (Test cases: search using first few words, middle words, last few words, search with single character).

3.  **Scenario 3:** Verify that a user can successfully search for a book by author's full name.

    - (Test cases: search for existing author, non-existing author, author with multiple books, author with no books).

4.  **Scenario 4:** Verify that a user can successfully search for a book by its ISBN.

    - (Test cases: valid ISBN, invalid ISBN, 10-digit, 13-digit, ISBN with hyphens, ISBN without hyphens).

5.  **Scenario 5:** Verify that the search functionality handles no results gracefully.
    - (Test cases: search for non-existent book, empty search query, search with special characters only).

Each of these scenarios, while high-level, points to a clear area of functionality that needs detailed testing.

### <mark> 7. Differentiate Test Case and Test Scenario. </mark>

| Feature            | Test Scenario                                                | Test Case                                                                                                                                                                                                                                                                                                                                                                  |
| :----------------- | :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Level**          | High-level, abstract.                                        | Low-level, detailed.                                                                                                                                                                                                                                                                                                                                                       |
| **What/How**       | Describes _what_ to test (a functionality or user goal).     | Describes _how_ to test (specific steps).                                                                                                                                                                                                                                                                                                                                  |
| **Granularity**    | Broad coverage of a feature or module.                       | Specific input, action, and expected outcome.                                                                                                                                                                                                                                                                                                                              |
| **Quantity**       | One scenario can have multiple test cases.                   | Focuses on a single executable test.                                                                                                                                                                                                                                                                                                                                       |
| **Purpose**        | Ensures all high-level functionalities are covered.          | Verifies specific steps and conditions for a functionality.                                                                                                                                                                                                                                                                                                                |
| **Format**         | Usually a short phrase or sentence.                          | Detailed steps, input data, expected results, preconditions, post-conditions.                                                                                                                                                                                                                                                                                              |
| **Creation Phase** | Often created during requirements analysis or test planning. | Created during test design phase.                                                                                                                                                                                                                                                                                                                                          |
| **Example**        | "Verify user can log in."                                    | **Test Case:** <br> - **ID:** TC_LOGIN_001 <br> - **Description:** Valid login with correct username and password. <br> - **Preconditions:** User is registered, application is open. <br> - **Steps:** 1. Enter valid username. 2. Enter valid password. 3. Click "Login" button. <br> - **Expected Result:** User is successfully logged in and redirected to dashboard. |

### <mark> 8. What is Graph Matrix in White Box Testing? How to make Connection Matrix? Write the steps to compute cyclomatic complexity with example. </mark>

**Graph Matrix in White Box Testing:**
A Graph Matrix (or Adjacency Matrix) is a square matrix used in white-box testing (specifically for control flow graphs) to represent the connections (edges) between the nodes in a graph. It's an alternative, more formal representation of a control flow graph, which can be useful for automated analysis and for calculating cyclomatic complexity.

- **Structure:** If a graph has `N` nodes, the graph matrix will be an `N x N` matrix.
- **Elements:** An entry `matrix[i][j]` is 1 if there is an edge from node `i` to node `j`, and 0 otherwise. Sometimes, instead of 1, it might store the weight of the edge (e.g., if conditions are associated with edges).

**How to Make a Connection Matrix (Adjacency Matrix):**

1.  **Identify all nodes:** Assign a unique number to each node (statement or decision point) in the control flow graph.
2.  **Create an N x N matrix:** Where N is the total number of nodes.
3.  **Populate the matrix:** For each node `i` and `j`:
    - Place a `1` (or `true`) in `matrix[i][j]` if there is a direct edge (connection) from node `i` to node `j`.
    - Place a `0` (or `false`) otherwise.

**Example for Connection Matrix:**

Consider this simple code snippet and its CFG:

```
1. start
2. IF (A) THEN
3.    X = 1
4. ELSE
5.    X = 2
6. ENDIF
7. print X
8. end
```

**Control Flow Graph (Nodes & Edges):**

- Nodes: 1 (start), 2 (IF A), 3 (X=1), 4 (X=2), 5 (print X), 6 (end)
- Edges:
  - (1,2)
  - (2,3) (if A is true)
  - (2,4) (if A is false)
  - (3,5)
  - (4,5)
  - (5,6)

**Connection Matrix (6x6):**

| Node  | 1   | 2   | 3   | 4   | 5   | 6   |
| :---- | :-- | :-- | :-- | :-- | :-- | :-- |
| **1** | 0   | 1   | 0   | 0   | 0   | 0   |
| **2** | 0   | 0   | 1   | 1   | 0   | 0   |
| **3** | 0   | 0   | 0   | 0   | 1   | 0   |
| **4** | 0   | 0   | 0   | 0   | 1   | 0   |
| **5** | 0   | 0   | 0   | 0   | 0   | 1   |
| **6** | 0   | 0   | 0   | 0   | 0   | 0   |

_(Note: In some variations, the diagonal might be 1 if a node can loop back to itself, but typically 0 for simple flow.)_

**Steps to Compute Cyclomatic Complexity (V(G)) using Graph Matrix (specifically for `E - N + 2`):**

The graph matrix helps in directly counting `E` (number of edges) and `N` (number of nodes).

1.  **Count Nodes (N):** Count the number of rows (or columns) in the connection matrix. This gives you `N`.

    - In the example above, `N = 6`.

2.  **Count Edges (E):** Sum all the `1`s in the connection matrix. This gives you `E`.

    - In the example above, `E = 1+1+1+1+1 = 5`.

3.  **Apply the Formula:** Use the formula `V(G) = E - N + 2`.
    - `V(G) = 5 - 6 + 2 = 1`.
    - _Self-correction:_ The example calculation of V(G) is incorrect if using the graph matrix based on simple statements. For a correct CFG for cyclomatic complexity, predicate nodes typically have 2 outgoing edges. Let's adjust for the classic approach or use the `P+1` method.

**Revised Example for Cyclomatic Complexity with `P+1` method (more common for manual calculation):**

Let's use the code from Q4's example:

```
1. IF (condition_A) THEN
2.    statement_1
3. ELSE
4.    statement_2
5. ENDIF
6. WHILE (condition_B)
7.    statement_3
8. ENDWHILE
9. statement_4
```

**Step 1: Draw the Control Flow Graph (conceptual, identifying predicate nodes):**

- Node 1: Entry, contains `condition_A` (Predicate 1)
- Node 2: `statement_1`
- Node 3: `statement_2`
- Node 4: Join point after `IF`
- Node 5: Contains `condition_B` (Predicate 2)
- Node 6: `statement_3`
- Node 7: Join point after `WHILE`
- Node 8: `statement_4`
- Node 9: Exit

Edges:
(1,2), (1,3) (from `condition_A` true/false)
(2,4), (3,4) (merge after `IF`)
(4,5) (flow to `WHILE`)
(5,6), (5,7) (from `condition_B` true/false)
(6,5) (loop back from `statement_3`)
(7,8) (flow after `WHILE`)

**Step 2: Calculate V(G) using `P + 1`:**

- Count the predicate nodes (decision points):
  - `IF (condition_A)` is one predicate node.
  - `WHILE (condition_B)` is another predicate node.
- So, `P = 2`.
- `V(G) = P + 1 = 2 + 1 = 3`.

**Explanation:** The cyclomatic complexity of 3 indicates that there are 3 linearly independent paths that need to be tested to achieve comprehensive coverage of this code snippet. These paths would be:

1.  Path through `IF` (True) and `WHILE` (False).
2.  Path through `IF` (False) and `WHILE` (False).
3.  Path through `IF` (True) and `WHILE` (True, then False).

### <mark> 9. Explain Data Flow Testing with an example. Also write advantages and disadvantages. </mark>

**Data Flow Testing:**
Data Flow Testing is a white-box testing technique that focuses on the points where variables are defined and used within a program. It aims to identify paths that traverse all possible "definition-use pairs" for each variable. This ensures that variables are correctly initialized, used, and that no anomalies occur in their data flow.

- **Definition (def):** A point in the program where a variable is assigned a value.
- **Use (use):** A point where the value of a variable is accessed or used.
  - **Computation Use (c-use):** The variable's value is used in a computation (e.g., `x = y + 5`).
  - **Predicate Use (p-use):** The variable's value is used in a predicate (condition) that influences the program's flow (e.g., `if (x > 0)`).

**Goal:** To test paths from the definition of a variable to all its subsequent uses, uncovering anomalies like:

- **Def-Def Anomaly:** A variable is defined, then redefined without being used in between (potentially redundant code or logic error).
- **Def-Undef Anomaly:** A variable is defined, then undefined (e.g., goes out of scope) without being used.
- **Undef-Use Anomaly:** A variable is used before it has been defined or initialized (a common bug).

**Working Principle:**

1.  **Identify all variables:** In the code segment.
2.  **Identify Def-Use pairs:** For each variable, determine where it's defined and where its value is subsequently used.
3.  **Construct Data Flow Graph:** Nodes are basic blocks, edges represent flow. Annotate nodes with `def` and `use` sets for variables.
4.  **Design Test Cases:** Create test paths that cover all interesting definition-use paths for all variables. Criteria include:
    - **All-Defs:** Every definition must reach at least one use.
    - **All-Uses:** Every definition must reach all its possible uses.
    - **All-Paths (Def-Use):** Every definition-use path is traversed (strongest criteria).

**Example:**

```
1.  int x, y, z;
2.  x = 10;
3.  y = x + 5;
4.  if (y > 10) {
5.      z = y * 2;
6.  } else {
7.      z = y / 2;
8.  }
9.  print(z);
```

**Variables and their Def-Use pairs:**

- **x:**
  - `def`: Statement 2 (`x=10`)
  - `use`: Statement 3 (`y = x + 5`)
  - **Def-Use Path:** 2 -> 3
- **y:**
  - `def`: Statement 3 (`y = x + 5`)
  - `use` (p-use): Statement 4 (`if (y > 10)`)
  - `use` (c-use): Statement 5 (`z = y * 2`)
  - `use` (c-use): Statement 7 (`z = y / 2`)
  - **Def-Use Paths:**
    - 3 -> 4 (for `if` condition)
    - 3 -> 4 -> 5 (if true)
    - 3 -> 4 -> 7 (if false)
- **z:**
  - `def`: Statement 5 (`z = y * 2`)
  - `def`: Statement 7 (`z = y / 2`)
  - `use`: Statement 9 (`print(z)`)
  - **Def-Use Paths:**
    - 5 -> 9
    - 7 -> 9

**Test Cases (to cover All-Uses for 'y'):**

1.  **Input:** (leads to `y > 10` is TRUE) e.g., no direct input, x is 10, so y becomes 15.
    - **Path:** 1 -> 2 -> 3 -> 4 (true) -> 5 -> 9
    - This covers `def(y)` at 3 to `p-use(y)` at 4, and `c-use(y)` at 5.
2.  **Input:** (leads to `y > 10` is FALSE) e.g., if `x` could be manipulated such that `y` becomes less than or equal to 10. (In this specific example, `y` is always 15, so the `else` branch is unreachable. This indicates a potential bug or dead code, which data flow testing could highlight!)

Let's assume the example was designed for a different `x` or `y` calculation:

- If `y` was `x-5`, then for `x=10`, `y=5`.
  - **Test Case 2:** Path: 1 -> 2 -> 3 -> 4 (false) -> 7 -> 9
  - This covers `def(y)` at 3 to `p-use(y)` at 4, and `c-use(y)` at 7.

**Advantages of Data Flow Testing:**

- **Detects Data Anomalies:** Excellent at finding subtle bugs related to uninitialized variables, redundant definitions, or dead code.
- **Complements Control Flow:** Provides a different perspective than control flow testing, often uncovering different types of errors.
- **Focuses on Variable Usage:** Directs testing effort to ensure variables are used correctly throughout their lifetime.
- **Improves Code Quality:** By highlighting data flow issues, it encourages cleaner and more robust code.

**Disadvantages of Data Flow Testing:**

- **Complexity:** Can be very complex and time-consuming for large programs due to the exponential number of definition-use paths.
- **Tool Dependent:** Requires sophisticated tools to automate the identification of def-use pairs and path generation. Manual application is tedious.
- **Does Not Guarantee Complete Coverage:** Does not necessarily cover all control flow paths or all possible values of variables.
- **Less intuitive:** Compared to control flow or functional testing, it can be harder to explain the test cases to non-technical stakeholders.

### <mark> 10. What is Black Box Testing? Describe the generic steps of Black Box Testing. </mark>

**Black Box Testing:**
Black Box Testing, also known as functional testing or specification-based testing, is a software testing method in which the internal structure, design, implementation, and code of the system under test are **unknown** to the tester. The tester interacts with the software solely through its external interfaces, providing inputs and observing outputs to verify that the software meets its specified functional and non-functional requirements.

- **Analogy:** Treating the software like a "black box" – you can see what goes in and what comes out, but you cannot see what's happening inside.
- **Focus:** Functionality, behavior, user experience, and compliance with external specifications.
- **Purpose:** To ensure the software behaves as expected from a user's perspective.

**Generic Steps of Black Box Testing:**

1.  **Requirements Analysis and Test Basis Understanding:**

    - **Activity:** Thoroughly review and understand the software's functional and non-functional requirements, specifications (e.g., SRS, Use Cases, User Stories), and design documents (from an external perspective).
    - **Goal:** To identify all features, modules, and behaviors that need to be tested. This defines "what" the system is supposed to do.

2.  **Test Scenario Identification:**

    - **Activity:** Based on the requirements, identify high-level test scenarios. These describe broad functionalities or user workflows.
    - **Goal:** To ensure comprehensive coverage of all major functionalities and user paths.

3.  **Test Case Design:**

    - **Activity:** For each test scenario, design detailed test cases using various black-box testing techniques (e.g., Equivalence Partitioning, Boundary Value Analysis, Decision Tables, State Transition diagrams).
    - **Elements of a Test Case:** Test Case ID, Test Objective, Preconditions, Test Steps (inputs), Expected Result, Post-conditions.
    - **Goal:** To create specific, actionable steps and inputs that will trigger a particular behavior and verify its output.

4.  **Test Data Preparation:**

    - **Activity:** Create or obtain the necessary input data required for executing the designed test cases. This includes valid, invalid, and boundary data.
    - **Goal:** To ensure tests can be executed effectively and realistically.

5.  **Test Environment Setup:**

    - **Activity:** Configure the necessary hardware, software, network, and system settings to create an environment suitable for testing, ideally mirroring the production environment.
    - **Goal:** To provide a stable and accurate platform for test execution.

6.  **Test Execution:**

    - **Activity:** Run the prepared test cases in the test environment.
    - Record the actual results for each test step.
    - Compare actual results with expected results.
    - Log any discrepancies as defects.
    - Track test execution progress.

7.  **Defect Reporting and Management:**

    - **Activity:** Report defects with clear, reproducible steps, actual vs. expected results, screenshots, and severity/priority.
    - Track defects through their lifecycle (open, fixed, retest, closed).
    - Collaborate with the development team for defect resolution.

8.  **Test Reporting and Closure:**
    - **Activity:** Generate test summary reports, detailing coverage, number of defects found, passed/failed tests, and overall quality assessment.
    - Evaluate against exit criteria.
    - Conduct lessons learned sessions.
    - **Goal:** To provide stakeholders with an informed decision about software release readiness.

### <mark> 11. Write short Description on Various types of Black Box Testing Techniques. </mark>

Black box testing techniques are methods for deriving test cases based on the system's external specifications, without knowledge of its internal implementation.

1.  **Equivalence Partitioning (EP):**

    - **Description:** Divides the input domain of a component into "equivalence classes" where all values in a class are expected to behave similarly. Test cases are selected with one representative value from each valid and invalid equivalence class.
    - **Purpose:** Reduces the number of test cases while maintaining good coverage, assuming values within a partition are equivalent.
    - **Example:** For an age input field (18-60), equivalence classes would be: (Less than 18), (18-60), (Greater than 60).

2.  **Boundary Value Analysis (BVA):**

    - **Description:** An extension of Equivalence Partitioning, BVA focuses on values at the boundaries of equivalence classes. It tests values just inside and just outside the valid range.
    - **Purpose:** Errors often occur at boundaries, so testing these specific values (min, max, min-1, max+1) is highly effective.
    - **Example:** For age (18-60), test cases: 17, 18, 19, 59, 60, 61.

3.  **Decision Table Testing (Cause-Effect Graphing):**

    - **Description:** Used for complex functionalities with multiple input conditions and corresponding actions. It creates a table (decision table) that maps combinations of conditions to actions.
    - **Purpose:** Ensures all possible combinations of conditions are considered, reducing ambiguity and finding missing or redundant rules.
    - **Example:** Online store discount system: Conditions (Customer Status: New/Returning, Purchase Amount: >$100/<$100), Actions (Apply 10% discount, Apply 5% discount, No discount).

4.  **State Transition Testing:**

    - **Description:** Used for systems whose behavior changes based on their current state and specific events. It models the system as a finite state machine, with states, transitions, events, and actions.
    - **Purpose:** Ensures all states are visited, all transitions are correctly triggered, and the system behaves as expected in each state.
    - **Example:** Testing a login system: States (Logged Out, Authenticating, Logged In, Locked), Events (Enter credentials, Correct/Incorrect password, Timeout).

5.  **Use Case Testing:**

    - **Description:** Derives test cases from use cases, which describe how users interact with the system to achieve specific goals.
    - **Purpose:** Ensures that the system's end-to-end functionality meets user needs from a real-world perspective.
    - **Example:** A "Place Order" use case would generate tests for selecting items, adding to cart, checkout, and payment.

6.  **Error Guessing:**

    - **Description:** An intuitive technique where testers use their experience, knowledge of common errors, and understanding of the system to "guess" where defects might reside and design test cases accordingly.
    - **Purpose:** Effective for finding defects that might be missed by formal techniques, especially for common vulnerabilities or tricky areas.
    - **Example:** Guessing that entering negative numbers into a quantity field might cause issues, or leaving mandatory fields blank could lead to errors.

7.  **Exploratory Testing:**
    - **Description:** A simultaneous learning, test design, and test execution technique. Testers explore the application, learn its features, design tests on the fly, and execute them concurrently.
    - **Purpose:** Good for finding unexpected bugs, discovering usability issues, and gaining a quick understanding of the system's weak points.
    - **Example:** A tester might spontaneously try to copy-paste special characters into all text fields to see what happens.

### <mark> 12. Define the steps of graph based testing method in Black Box testing with example. </mark>

**Graph-Based Testing Method (Black Box Context):**
In black box testing, graph-based methods focus on modeling the relationships and interactions within the system from an external, behavioral perspective, rather than internal code logic. This helps visualize scenarios, identify paths, and design comprehensive test cases. Common types include **Cause-Effect Graphing** (leading to Decision Tables) and **State Transition Diagrams**.

**Steps of Graph-Based Testing (using State Transition Diagram as an example):**

1.  **Identify States of the System:**

    - **Activity:** Analyze the system's requirements and behavior to identify all possible discrete states the system or an object can be in. A state is a condition or mode of behavior that is distinguishable from other conditions.
    - **Example (Online Order System):**
      - `Empty Cart`
      - `Cart with Items`
      - `Checkout Initiated`
      - `Payment Pending`
      - `Order Placed`
      - `Order Cancelled`

2.  **Identify Events (Transitions) that Cause State Changes:**

    - **Activity:** Determine all events or inputs that cause the system to move from one state to another. An event triggers a transition.
    - **Example:**
      - `Add Item`
      - `Remove Item`
      - `Proceed to Checkout`
      - `Enter Payment Details`
      - `Payment Successful`
      - `Payment Failed`
      - `Cancel Order`

3.  **Draw the State Transition Diagram:**

    - **Activity:** Create a directed graph where:
      - **Nodes (Circles):** Represent the identified states.
      - **Edges (Arrows):** Represent the transitions between states.
      - **Labels on Edges:** Indicate the event that triggers the transition and the action/output that occurs during the transition (Event / Action).
    - **Diagram Description:**
      `[Empty Cart]` --Add Item/Display Item Count--> `[Cart with Items]`
      `[Cart with Items]` --Remove Item/Update Count--> `[Empty Cart]`
      `[Cart with Items]` --Proceed to Checkout/Show Order Summary--> `[Checkout Initiated]`
      `[Checkout Initiated]` --Enter Payment Details/Process Payment--> `[Payment Pending]`
      `[Payment Pending]` --Payment Successful/Confirm Order--> `[Order Placed]`
      `[Payment Pending]` --Payment Failed/Show Error--> `[Checkout Initiated]`
      `[Order Placed]` --Cancel Order/Notify User--> `[Order Cancelled]`
      `[Order Cancelled]` (Terminal State)

4.  **Derive Test Cases (Test Paths):**

    - **Activity:** Design test cases by tracing different paths through the state transition diagram. The goal is to cover all states and transitions, and ideally, all valid and invalid sequences of events.
    - **Common Coverage Strategies:**
      - **All States Coverage:** Visit every state at least once.
      - **All Transitions Coverage:** Execute every transition at least once.
      - **Specific Path Coverage:** Test critical or complex sequences of transitions.
      - **Invalid Transition Testing:** Attempt transitions that should not be allowed.
    - **Example Test Cases based on the diagram:**

    - **Test Case 1 (Happy Path - Successful Order):**

      - **Steps:** `Start -> Add Item -> Proceed to Checkout -> Enter Payment Details (Successful)`
      - **States Visited:** `Empty Cart -> Cart with Items -> Checkout Initiated -> Payment Pending -> Order Placed`
      - **Expected:** Order successfully placed.

    - **Test Case 2 (Payment Failure & Retry):**

      - **Steps:** `Start -> Add Item -> Proceed to Checkout -> Enter Payment Details (Failed) -> Enter Payment Details (Successful)`
      - **States Visited:** `Empty Cart -> Cart with Items -> Checkout Initiated -> Payment Pending (Failed) -> Checkout Initiated -> Payment Pending (Successful) -> Order Placed`
      - **Expected:** Order placed after initial payment failure.

    - **Test Case 3 (Cancel Order):**

      - **Steps:** `Start -> Add Item -> Proceed to Checkout -> Enter Payment Details (Successful) -> Cancel Order`
      - **States Visited:** `Empty Cart -> Cart with Items -> Checkout Initiated -> Payment Pending -> Order Placed -> Order Cancelled`
      - **Expected:** Order cancelled.

    - **Test Case 4 (Invalid Transition - Empty Cart to Checkout):**
      - **Steps:** From `Empty Cart`, try to `Proceed to Checkout`.
      - **Expected:** System prevents transition, shows error "Cart is empty".

5.  **Review and Refine:**
    - **Activity:** Review the generated test cases with stakeholders to ensure they accurately reflect business rules and cover critical scenarios.

### <mark> 13. How we perform Equivalence Partitioning method in black box testing? Explain it with two different examples. </mark>

**Equivalence Partitioning (EP):**
Equivalence Partitioning is a black-box test case design technique that divides the input data for a program into various "equivalence classes" or "partitions." The assumption is that if one test case from a partition works correctly, all other test cases in that partition will also work correctly. Similarly, if one test case from a partition fails, all other test cases in that partition will likely also fail. This technique helps reduce the number of test cases required without compromising test coverage.

**How to Perform Equivalence Partitioning:**

1.  **Identify Input Fields/Conditions:** Look at the input fields, parameters, or conditions of the software component being tested.
2.  **Divide into Equivalence Classes:** For each input, identify distinct sets of values (partitions) that are expected to be processed similarly by the software.
    - **Valid Equivalence Classes:** Ranges of input that are considered valid and should lead to expected behavior.
    - **Invalid Equivalence Classes:** Ranges of input that are considered invalid and should lead to error messages or specific negative behavior.
3.  **Select Test Cases:** Choose one representative value from each identified valid and invalid equivalence class to be used as a test input. It's generally a good practice to pick a value roughly in the middle of the range, but any value within the class is theoretically sufficient for EP. (Boundary Value Analysis typically picks the edges).

**Example 1: Age Verification for a Website**

**Requirement:** A user must be between 18 and 60 years old (inclusive) to register on the website.

**Step 1: Identify Input:** `Age` (an integer).

**Step 2: Divide into Equivalence Classes:**

- **Valid Equivalence Class (VEC):**
  - `VEC1`: Ages between 18 and 60 (inclusive).
- **Invalid Equivalence Classes (IEC):**
  - `IEC1`: Ages less than 18.
  - `IEC2`: Ages greater than 60.

**Step 3: Select Test Cases:**

- From `VEC1 (18-60)`: Choose a representative value, e.g., `35`.
  - **Test Case:** Input Age = `35` -> Expected: Successful registration.
- From `IEC1 (<18)`: Choose a representative value, e.g., `10`.
  - **Test Case:** Input Age = `10` -> Expected: Error message "You must be at least 18 years old."
- From `IEC2 (>60)`: Choose a representative value, e.g., `70`.
  - **Test Case:** Input Age = `70` -> Expected: Error message "You must be 60 years old or younger."

**Example 2: Password Field Length**

**Requirement:** The password field should accept 8 to 15 characters.

**Step 1: Identify Input:** `Password Length` (number of characters).

**Step 2: Divide into Equivalence Classes:**

- **Valid Equivalence Class (VEC):**
  - `VEC1`: Passwords with length between 8 and 15 characters (inclusive).
- **Invalid Equivalence Classes (IEC):**
  - `IEC1`: Passwords with length less than 8 characters.
  - `IEC2`: Passwords with length greater than 15 characters.

**Step 3: Select Test Cases:**

- From `VEC1 (8-15 chars)`: Choose a representative value, e.g., a 12-character password.
  - **Test Case:** Input Password = `"testpassword"` (12 chars) -> Expected: Password accepted.
- From `IEC1 (<8 chars)`: Choose a representative value, e.g., a 5-character password.
  - **Test Case:** Input Password = `"short"` (5 chars) -> Expected: Error message "Password must be at least 8 characters long."
- From `IEC2 (>15 chars)`: Choose a representative value, e.g., a 20-character password.
  - **Test Case:** Input Password = `"thisisareallylongpassword"` (25 chars) -> Expected: Error message "Password must be at most 15 characters long."

Equivalence partitioning significantly reduces the number of test cases while ensuring that all valid and invalid input behaviors are covered effectively.

### <mark> 14. Explain the concept of Boundary Value Analysis in Black Box Testing with example. </mark>

**Boundary Value Analysis (BVA):**
Boundary Value Analysis is a black-box test case design technique that focuses on values at the "boundaries" of input domains or equivalence classes. It is based on the observation that defects often occur at the edges or boundaries of valid input ranges. BVA is often used in conjunction with Equivalence Partitioning.

- **Concept:** For an input range defined as `[Min, Max]`, BVA suggests creating test cases for:
  - `Min` (minimum valid value)
  - `Min + 1` (just above the minimum valid value)
  - `Max - 1` (just below the maximum valid value)
  - `Max` (maximum valid value)
  - `Min - 1` (just below the minimum valid value, an invalid value)
  - `Max + 1` (just above the maximum valid value, an invalid value)

**Why BVA is Effective:**
Many programming errors are related to incorrect handling of boundaries (e.g., "off-by-one" errors, incorrect use of `<` vs. `<=`). BVA systematically targets these common error points.

**How to Perform Boundary Value Analysis:**

1.  **Identify Input Ranges:** For each input field or parameter, identify its valid range of values.
2.  **Determine Boundary Values:** For each range `[Min, Max]`, identify the six key boundary values (Min, Min+1, Max-1, Max, Min-1, Max+1).
3.  **Create Test Cases:** Design test cases using these boundary values as inputs.

**Example: Quantity Input for an Online Store**

**Requirement:** Users can order a quantity of an item from 1 to 99 (inclusive).

**Step 1: Identify Input Range:** `Quantity` (integer), valid range is `[1, 99]`.

**Step 2: Determine Boundary Values:**

- Min = `1`
- Min + 1 = `2`
- Max - 1 = `98`
- Max = `99`
- Min - 1 (invalid) = `0`
- Max + 1 (invalid) = `100`

**Step 3: Create Test Cases:**

| Test Case | Input (Quantity) | Type      | Expected Result (Behavior)            |
| :-------- | :--------------- | :-------- | :------------------------------------ |
| TC_QTY_01 | `0`              | Invalid   | Error: "Quantity must be at least 1." |
| TC_QTY_02 | `1`              | Valid Min | Item added to cart with quantity 1.   |
| TC_QTY_03 | `2`              | Valid     | Item added to cart with quantity 2.   |
| TC_QTY_04 | `98`             | Valid     | Item added to cart with quantity 98.  |
| TC_QTY_05 | `99`             | Valid Max | Item added to cart with quantity 99.  |
| TC_QTY_06 | `100`            | Invalid   | Error: "Quantity cannot exceed 99."   |

In addition to these, you might also consider very large negative numbers (e.g., `-5`), very large positive numbers (e.g., `999`), non-numeric inputs (e.g., `"abc"`), and decimal numbers (e.g., `5.5`) if the input field is susceptible to these. BVA focuses on the specific numeric boundaries.

By using BVA, you can effectively uncover bugs that might occur at the edges of valid data ranges, which are common sources of errors.

### <mark> 15. What is Orthogonal Array Testing Technique (OATS)? Explain its Terminologies & Steps with an example. </mark>

**Orthogonal Array Testing Technique (OATS):**
Orthogonal Array Testing Technique (OATS), also known as Orthogonal Design (OD) or Pairwise Testing, is a systematic, statistical black-box test case design technique used to test systems with a large number of parameters (inputs or factors) where many of these parameters can take multiple values (levels). The goal is to generate a minimal set of test cases that covers all possible _combinations_ of each parameter with every other parameter (pairwise coverage), rather than exhaustive testing of all combinations.

- **Benefit:** Reduces the number of test cases significantly while still providing high confidence that major interaction defects (especially two-way interactions) will be found. Exhaustive testing is `levels^factors`, OATS is much smaller.
- **Foundation:** Based on orthogonal arrays from combinatorial mathematics. An orthogonal array ensures that for any two columns (factors), every combination of their levels appears an equal number of times.

**Terminologies in OATS:**

1.  **Factor (Parameter):** An input variable or a configurable option of the system under test.
    - _Example:_ Browser, Operating System, Payment Method, Account Type.
2.  **Level:** A specific value or state that a factor can take.
    - _Example:_
      - Browser: Chrome, Firefox, Edge
      - Operating System: Windows, macOS, Linux
      - Payment Method: Credit Card, Debit Card, PayPal
3.  **Orthogonal Array (OA):** A table (matrix) represented as `L_rows (levels^factors_per_factor)`. It's a specific type of array where the columns are arranged such that for any pair of columns, all combinations of their values occur an equal number of times. This property ensures pairwise coverage.
    - _Notation:_ `L_N(N_Factors^N_Levels)` where `N` is the number of rows (test cases), `N_Factors` is the number of factors, and `N_Levels` is the maximum number of levels any factor can have. Example: `L_9(3^4)` means 9 test cases for 4 factors, each with 3 levels.

**Steps of Orthogonal Array Testing:**

1.  **Identify Factors (Input Parameters):**

    - List all the independent input variables or parameters that affect the software's behavior.
    - _Example:_ Browser, OS, Payment Type, User Role.

2.  **Identify Levels for Each Factor:**

    - For each factor, determine all the distinct values or states it can take.
    - _Example:_
      - Browser: Chrome (1), Firefox (2), Edge (3) -> 3 levels
      - OS: Windows (1), macOS (2), Linux (3) -> 3 levels
      - Payment Type: Credit Card (1), PayPal (2) -> 2 levels
      - User Role: Admin (1), Guest (2) -> 2 levels

3.  **Select the Appropriate Orthogonal Array:**

    - Based on the number of factors and the maximum number of levels among them, choose a suitable orthogonal array from pre-defined OA tables (these are mathematical constructs).
    - **Rule of thumb:** Choose an array that can accommodate at least `N_Factors` columns and the largest `N_Levels`.
    - _Continuing example:_ We have 4 factors, with max 3 levels. An `L_9(3^4)` array (9 test cases for 4 factors, each with up to 3 levels) would be a good fit. (We'd map the 2-level factors to 3-level columns).

4.  **Map Factors and Levels to the Orthogonal Array:**

    - Assign each factor to a column in the chosen orthogonal array.
    - Map the specific levels of your factors to the numeric representations (e.g., 1, 2, 3) in the array. If a factor has fewer levels than the array's column (e.g., 2 levels to a 3-level column), assign the 2 levels to two of the array's levels and ignore or repeat the third.
    - _Example:_
      - Browser: 1=Chrome, 2=Firefox, 3=Edge
      - OS: 1=Windows, 2=macOS, 3=Linux
      - Payment Type: 1=Credit Card, 2=PayPal (map 3 to 1 or 2)
      - User Role: 1=Admin, 2=Guest (map 3 to 1 or 2)

5.  **Generate Test Cases:**
    - Each row in the filled orthogonal array represents a distinct test case, specifying the combination of levels for each factor.

**Example Walkthrough (Simplified `L_4(2^3)` array):**

Let's assume we have 3 factors, each with 2 levels.

- **Factor A:** Login Status (Logged In, Not Logged In)
- **Factor B:** Browser (Chrome, Firefox)
- **Factor C:** Internet Connection (Connected, Disconnected)

- Levels:

  - A: 1=Logged In, 2=Not Logged In
  - B: 1=Chrome, 2=Firefox
  - C: 1=Connected, 2=Disconnected

- We need an `L_N(2^3)` array. A common one is `L_4(2^3)`, meaning 4 test cases for 3 factors with 2 levels.

**L_4(2^3) Orthogonal Array Table:**

| Test Case | Factor A | Factor B | Factor C |
| :-------- | :------- | :------- | :------- |
| 1         | 1        | 1        | 1        |
| 2         | 1        | 2        | 2        |
| 3         | 2        | 1        | 2        |
| 4         | 2        | 2        | 1        |

**Mapping to generate actual Test Cases:**

| Test Case | Login Status  | Browser | Internet Connection |
| :-------- | :------------ | :------ | :------------------ |
| 1         | Logged In     | Chrome  | Connected           |
| 2         | Logged In     | Firefox | Disconnected        |
| 3         | Not Logged In | Chrome  | Disconnected        |
| 4         | Not Logged In | Firefox | Connected           |

**Verification:**

- Total combinations if exhaustive: `2^3 = 8` test cases.
- OATS provides 4 test cases.
- Check pairwise coverage:
  - A & B: (LI, Chr), (LI, FF), (NLI, Chr), (NLI, FF) - all 4 pairs covered.
  - A & C: (LI, Conn), (LI, Disc), (NLI, Disc), (NLI, Conn) - all 4 pairs covered.
  - B & C: (Chr, Conn), (FF, Disc), (Chr, Disc), (FF, Conn) - all 4 pairs covered.

OATS provides an efficient way to achieve high-quality test coverage for combinatorial inputs, significantly reducing test effort.

### <mark> 16. Explain Model Based Testing with advantages & Disadvantages. </mark>

**Model-Based Testing (MBT):**
Model-Based Testing is a software testing technique where test cases are automatically generated from an abstract, formal model of the system under test (SUT) or its environment. Instead of writing test cases manually, testers or tools create models that describe the desired behavior of the software. These models then serve as a basis for generating optimal test suites.

- **Model:** Can be in various forms: State machines, UML diagrams (statechart, activity, sequence diagrams), flowcharts, formal specifications, or domain-specific languages. The model acts as a "specification" of the expected system behavior.
- **Automation:** MBT heavily relies on tools to parse the model, generate test paths, and derive executable test cases.

**Working Principle:**

1.  **Model Creation:** Develop a formal model representing the system's functional and non-functional behavior, interactions, states, transitions, or data flow.
2.  **Test Generation:** Use an MBT tool to automatically generate test cases (sequences of inputs and expected outputs) from the model. Different test generation strategies (e.g., covering all states, all transitions, specific paths) can be applied.
3.  **Test Execution:** Execute the generated test cases against the SUT. This can be manual or automated.
4.  **Test Evaluation:** Compare the actual results with the expected results (derived from the model) to identify defects.
5.  **Model Maintenance:** Update the model as the system's requirements or design evolve.

**Advantages of Model-Based Testing:**

1.  **Reduced Test Design Effort:** Automates the creation of test cases, significantly saving time and effort compared to manual test case writing.
2.  **Improved Test Coverage:** Tools can generate test cases to achieve specific coverage criteria (e.g., all states, all transitions, specific paths) systematically, leading to more thorough testing.
3.  **Early Defect Detection:** The process of creating a formal model itself can uncover ambiguities, inconsistencies, and errors in requirements and design before coding even begins.
4.  **Higher Quality Test Cases:** Automatically generated test cases are less prone to human error or oversight in design.
5.  **Easier Test Maintenance:** When requirements change, updating the model can automatically update the test cases, reducing maintenance effort.
6.  **Better Documentation:** The model serves as living documentation of the system's behavior, which is always consistent with the generated tests.
7.  **Support for Complex Systems:** Particularly beneficial for complex systems with many states, transitions, or interacting components.

**Disadvantages of Model-Based Testing:**

1.  **High Initial Investment:** Requires an upfront investment in learning modeling languages, tools, and training testers/developers in MBT.
2.  **Model Creation Complexity:** Building accurate, detailed, and executable models can be challenging, time-consuming, and requires specialized skills. If the model is flawed, the generated tests will also be flawed ("garbage in, garbage out").
3.  **Tool Dependency:** Heavy reliance on specific MBT tools, which might have limitations or a steep learning curve.
4.  **Not Suitable for All Projects:** Less cost-effective for small, simple, or short-lived projects where the overhead of modeling outweighs the benefits.
5.  **Oracle Problem:** While MBT generates test inputs, determining the _expected output_ (the "test oracle") still often requires human intelligence or a trusted reference implementation, which can be a bottleneck.
6.  **Integration Challenges:** Integrating MBT tools into existing development and testing pipelines can be complex.
7.  **Model Maintenance Overhead:** While maintenance is easier than manual tests, keeping the model synchronized with an evolving system still requires effort.

### <mark> 17. Why do we need to perform GUI Testing? Define its types & Features. Also Explain GUI Testing Techniques/Methods and tools. </mark>

**Why Do We Need to Perform GUI Testing?**
GUI (Graphical User Interface) testing is essential because the GUI is the primary point of interaction between the user and the software application. A well-designed and functional GUI is critical for user experience, usability, and overall customer satisfaction. The need for GUI testing arises from:

1.  **User Experience (UX):** A buggy or poorly designed GUI frustrates users, leading to low adoption and poor perception of the software's quality, even if the backend logic is perfect.
2.  **Functionality through UI:** Most user-facing functionalities are initiated or performed via the GUI. Testing ensures these interactions (e.g., clicking buttons, entering text, navigating menus) work correctly.
3.  **Usability:** Verifies that the interface is intuitive, easy to learn, and efficient to use.
4.  **Aesthetics and Consistency:** Ensures that the layout, colors, fonts, and overall visual design are consistent across the application and adhere to design guidelines.
5.  **Accessibility:** For critical applications, ensures the GUI is usable by people with disabilities (e.g., screen readers compatibility).
6.  **Error Handling:** Checks how the GUI responds to invalid inputs, system errors, or unexpected user actions.
7.  **Responsiveness/Adaptability:** For web and mobile applications, ensuring the GUI adapts correctly to different screen sizes, resolutions, and orientations.

**Types of GUI Testing:**

1.  **Functional GUI Testing:** Verifies that the GUI elements (buttons, text boxes, menus, links) trigger the correct backend actions and display appropriate results. (e.g., clicking "Submit" on a form correctly saves data).
2.  **Usability Testing:** Focuses on the user-friendliness, learnability, efficiency, and satisfaction of the GUI. Often involves real users.
3.  **Performance Testing (GUI-focused):** Measures the responsiveness and speed of GUI elements (e.g., how quickly a page loads, how fast a dropdown appears).
4.  **Compatibility Testing:** Checks if the GUI renders and behaves correctly across different browsers, operating systems, resolutions, and devices.
5.  **Localization Testing:** Ensures the GUI correctly displays text, dates, currencies, and images for different languages and regions.
6.  **Accessibility Testing:** Verifies that the GUI is usable by individuals with disabilities (e.g., keyboard navigation, screen reader compatibility).

**Features to Test in GUI Testing:**

- **Layout and Design:** Position, size, alignment of elements.
- **Fonts and Colors:** Consistency and readability.
- **Navigation:** Menu structures, links, breadcrumbs, back/forward buttons.
- **Interactive Elements:** Buttons, checkboxes, radio buttons, dropdowns, text fields, sliders – ensuring they are clickable/editable and respond correctly.
- **Input Validation:** Proper display of error messages for invalid inputs.
- **Tooltips and Help:** Correct and informative tooltips/help text.
- **Error Messages:** Clear, concise, and user-friendly error messages.
- **Data Display:** Correct display of data retrieved from the backend.
- **Responsiveness:** How the UI adapts to different screen sizes.

**GUI Testing Techniques/Methods:**

1.  **Manual Testing:**

    - **Method:** Testers manually interact with the GUI, clicking, typing, navigating, and visually inspecting.
    - **Use:** Effective for exploratory testing, usability testing, and aesthetic checks.

2.  **Record and Playback (Automated):**

    - **Method:** A testing tool records user interactions (mouse clicks, keyboard inputs) and then can play them back to re-execute tests.
    - **Use:** Quick for creating simple regression test scripts.
    - **Limitations:** Often brittle; minor UI changes can break scripts. Not robust for complex applications.

3.  **Object-Based/Image-Based Recognition (Automated):**

    - **Method:** Tools identify GUI elements either by their underlying object properties (e.g., ID, name, class) or by capturing images/coordinates.
    - **Use:** More robust than record-playback, especially object-based recognition.
    - **Challenges:** Image-based can be fragile; object properties might change.

4.  **Data-Driven Testing:**

    - **Method:** Test scripts are designed to run with multiple sets of input data, read from an external source (e.g., Excel, CSV).
    - **Use:** Efficient for testing forms with various valid/invalid inputs.

5.  **Keyword-Driven Testing:**
    - **Method:** Tests are defined using high-level keywords (e.g., "Login", "EnterText", "ClickButton"), which map to underlying automation scripts.
    - **Use:** Allows non-technical users to define tests, improves reusability.

**GUI Testing Tools:**

- **Web Applications:**

  - **Selenium WebDriver:** Open-source, supports multiple languages, widely used for cross-browser web automation.
  - **Cypress:** Modern, fast, JavaScript-based testing framework for web.
  - **Playwright:** Microsoft's framework for reliable end-to-end testing across browsers.
  - **TestComplete:** Commercial, supports web, desktop, and mobile.
  - **QTP/UFT (Unified Functional Testing):** Commercial, widely used for enterprise applications.

- **Desktop Applications:**

  - **QTP/UFT:** (as above)
  - **TestComplete:** (as above)
  - **Ranorex:** Commercial, supports desktop, web, and mobile.
  - **Squish:** Commercial, supports various GUI technologies (Qt, Java, Web, Windows).
  - **WinAppDriver (Microsoft):** Open-source tool for automating Windows applications.

- **Mobile Applications:**
  - **Appium:** Open-source, cross-platform (iOS, Android) mobile automation tool.
  - **Espresso (Android), XCUITest (iOS):** Native mobile automation frameworks.

### <mark> 18. Write the difference between Desktop Application Testing, Client-Server Architecture Testing and Web Application Testing. </mark>

These three categories represent different architectural paradigms, each with unique testing considerations.

| Feature               | Desktop Application Testing                                                                      | Client-Server Architecture Testing                                                                                             | Web Application Testing                                                                                        |
| :-------------------- | :----------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| **Architecture**      | **Stand-alone/Thick Client:** All components (UI, business logic, data) run on a single machine. | **Client-Server:** Client (UI/some logic) on user's machine, Server (business logic, database) on a separate machine.          | **Web-based:** Client (browser) and Server (web server, app server, DB server) communicate over HTTP(S).       |
| **Deployment**        | Installation on each user's machine.                                                             | Client component installed on user's machine; server components deployed centrally.                                            | No installation needed on client (browser is client); application deployed on web servers.                     |
| **User Interface**    | Rich GUI (e.g., WinForms, WPF, Swing). Often platform-specific.                                  | Rich/Thin client GUI; client side logic.                                                                                       | Web browser-based GUI (HTML, CSS, JS). Dependent on browser rendering.                                         |
| **Connectivity**      | Generally no constant network connection to external services (unless specifically designed).    | Requires stable network connection between client and server.                                                                  | Requires continuous and stable internet connection.                                                            |
| **Performance Focus** | Application responsiveness, resource usage on client machine.                                    | Network latency between client-server, server response time, database performance.                                             | Page load time, server response time, concurrent user handling, CDN performance, client-side rendering speed.  |
| **Security Focus**    | Local file system access, data storage on client, local user permissions.                        | Data transmission security (encryption), authentication/authorization across network, server-side security, database security. | Cross-Site Scripting (XSS), SQL Injection, CSRF, session management, sensitive data exposure, API security.    |
| **Compatibility**     | Operating system versions, hardware configurations on client machine.                            | OS and hardware for both client and server; network protocols.                                                                 | Cross-browser, cross-OS, cross-device (responsive design), different screen resolutions.                       |
| **Updates**           | Manual or auto-update mechanisms required for client-side components.                            | Client-side updates needed; server-side updates managed centrally.                                                             | Updates are central on the server; client (browser) automatically gets latest version.                         |
| **Testing Tools**     | Ranorex, UFT/QTP, TestComplete, WinAppDriver.                                                    | SoapUI/Postman (API), JMeter (load), specific client-side automation tools.                                                    | Selenium, Cypress, Playwright, JMeter, Browser DevTools, OWASP ZAP.                                            |
| **Key Challenges**    | Environment variations, installation/uninstallation issues.                                      | Network reliability, distributed logging, complex integrations, synchronization issues.                                        | Browser/device fragmentation, responsiveness, network latency, security vulnerabilities, quick release cycles. |

---

## UNIT 4

### <mark> 19. What is a Test Document? Why Documentation is needed? Explain Various types of test document with Benefits & Drawbacks of using test documents. </mark>

**What is a Test Document?**
A Test Document is any formal record or artifact created during the software testing process. It serves to describe, plan, track, execute, and report on the testing activities. These documents ensure clarity, consistency, and traceability throughout the testing lifecycle.

**Why Documentation is Needed?**

1.  **Clarity and Communication:** Provides a clear, unambiguous reference for all stakeholders (testers, developers, project managers, clients) regarding testing scope, strategy, progress, and results.
2.  **Traceability:** Establishes a link between requirements, test cases, and defects, ensuring that all requirements are tested and all issues are tracked.
3.  **Process Standardization:** Helps standardize the testing process, ensuring consistency across projects and teams.
4.  **Knowledge Transfer:** Facilitates knowledge transfer to new team members or for future maintenance and regression testing.
5.  **Accountability and Auditability:** Provides a record of testing activities, allowing for accountability, compliance auditing, and post-project analysis.
6.  **Decision Making:** Offers objective data and insights to project managers and stakeholders for informed release decisions.
7.  **Maintenance and Regression:** Serves as a baseline for future testing cycles (e.g., regression testing), reducing rework.

**Various Types of Test Documents:**

1.  **Test Plan:**

    - **Purpose:** High-level document outlining the scope, objectives, strategy, resources, schedule, and environment for the entire testing project. (e.g., IEEE 829 Test Plan).
    - **Benefits:** Provides a roadmap, aligns expectations, facilitates resource planning, risk identification.
    - **Drawbacks:** Can become outdated quickly if not maintained, upfront effort can be significant for small projects.

2.  **Test Strategy:**

    - **Purpose:** A high-level document, sometimes part of the Test Plan, describing the generic approach to testing (e.g., types of testing, levels, tools). Often applies across multiple projects.
    - **Benefits:** Promotes consistency in testing practices, provides a reusable template.
    - **Drawbacks:** Can be too generic, may not capture project-specific nuances.

3.  **Test Scenario:**

    - **Purpose:** High-level description of a functionality or user goal to be tested. (e.g., "Verify user login functionality").
    - **Benefits:** Ensures broad coverage, easy for stakeholders to understand.
    - **Drawbacks:** Lacks detail for actual execution, needs to be elaborated into test cases.

4.  **Test Case:**

    - **Purpose:** Detailed steps, input data, and expected results for a specific testable condition.
    - **Benefits:** Precise, repeatable, aids in execution, allows for clear pass/fail criteria.
    - **Drawbacks:** Can be numerous and time-consuming to create and maintain, rigid for agile contexts.

5.  **Test Data:**

    - **Purpose:** The input data used to execute test cases. Can be a separate document or part of test cases.
    - **Benefits:** Ensures consistency of tests, covers various data conditions (valid, invalid, boundary).
    - **Drawbacks:** Data creation can be complex, data privacy issues might arise.

6.  **Traceability Matrix:**

    - **Purpose:** A table that maps requirements to test cases (and sometimes to defects or design elements).
    - **Benefits:** Ensures all requirements are tested, identifies untraceable requirements, aids in impact analysis.
    - **Drawbacks:** Can be tedious to maintain manually for large projects.

7.  **Defect/Bug Report:**

    - **Purpose:** Documents information about identified defects (steps to reproduce, actual/expected results, environment, severity, priority).
    - **Benefits:** Essential for defect tracking and resolution, provides historical record of issues.
    - **Drawbacks:** Requires clear communication and adherence to format for effectiveness.

8.  **Test Summary Report (Test Closure Report):**
    - **Purpose:** Summarizes the testing activities, results, coverage, number of defects found, and overall quality assessment. Provides a recommendation for release.
    - **Benefits:** Crucial for release decisions, provides final status, facilitates lessons learned.
    - **Drawbacks:** Only as good as the underlying data, may be produced too late to influence major decisions.

**Overall Benefits of Test Documents:**

- **Improved Quality:** Leads to more structured and thorough testing.
- **Risk Mitigation:** Helps identify and address risks early.
- **Transparency:** Provides visibility into the testing process for all involved.
- **Efficiency:** Reduces miscommunication and rework.

**Overall Drawbacks of Using Test Documents:**

- **Overhead:** Creating and maintaining detailed documentation can be time-consuming and costly, especially in agile environments where rapid iteration is key.
- **Staleness:** Documents can quickly become outdated if not rigorously updated with every change in requirements or code.
- **Bureaucracy:** Excessive documentation can lead to unnecessary bureaucracy and slow down the development process.
- **Focus Shift:** Teams might prioritize documentation over actual testing or delivering working software.
- **Limited Value for Simple Projects:** For very small or simple projects, the overhead might outweigh the benefits.

### <mark> 20. Write Short Notes on: (a) Real Time System Testing & its tools (b) Design Patterns of Software Testing. </mark>

**(a) Real-Time System Testing & its tools:**

**Real-Time Systems (RTS):**
Real-time systems are computer systems that respond to inputs within a strict, time-critical deadline. The correctness of an RTS depends not only on the logical result of computation but also on the time at which the results are produced. Failure to meet timing constraints can lead to system failure, which can be catastrophic (e.g., in avionics, industrial control, medical devices).

**Characteristics of RTS impacting Testing:**

- **Time Constraints:** Strict deadlines for processing inputs and producing outputs.
- **Concurrency/Parallelism:** Often involve multiple concurrent tasks.
- **Event-Driven:** React to external and internal events.
- **Embedded Nature:** Often embedded within larger hardware systems.
- **High Reliability/Safety:** Failure can have severe consequences.

**Challenges in RTS Testing:**

- **Timing Verification:** Hard to test precise timing behavior.
- **Concurrency Issues:** Race conditions, deadlocks, synchronization problems.
- **Hardware-Software Interaction:** Tightly coupled with hardware.
- **Non-Determinism:** Behavior can vary due to environmental factors.
- **Resource Constraints:** Limited memory, processing power.
- **Test Environment:** Difficult to replicate real-world scenarios.

**Real-Time System Testing Focus Areas:**

- **Functional Correctness:** Does it do what it's supposed to do?
- **Timing Correctness:** Does it meet deadlines? (e.g., response times, throughput).
- **Performance Under Load:** How does it behave under peak and stress conditions?
- **Concurrency/Synchronization:** Proper handling of shared resources and simultaneous operations.
- **Exception Handling/Recovery:** How does it react to and recover from failures or unexpected events.
- **Reliability and Stability:** Long-term operation without degradation.
- **Resource Utilization:** Efficient use of CPU, memory, network bandwidth.

**Tools for Real-Time System Testing:**
Specialized tools are often required due to the unique challenges:

1.  **Hardware-in-the-Loop (HIL) Simulators:**
    - **Description:** A simulation technique where the physical hardware components of the system are connected to a virtual environment that simulates the rest of the system or its environment. Allows testing software against real hardware stimuli.
    - **Example:** Testing flight control software with actual flight computers connected to a simulator that provides sensor inputs and simulates actuator responses.
2.  **Logic Analyzers/Oscilloscopes:**
    - **Description:** Hardware tools used to monitor and analyze digital signals, timing, and communication protocols. Essential for low-level hardware-software interface debugging.
3.  **Real-Time Operating System (RTOS) Specific Tools:**
    - **Description:** Debuggers, profilers, and schedulers specifically designed for the RTOS being used (e.g., VxWorks, FreeRTOS).
4.  **Modeling and Simulation Tools:**
    - **Description:** Tools like MATLAB/Simulink, LabVIEW used for modeling system behavior, simulating real-time scenarios, and generating test vectors.
5.  **Performance and Load Testing Tools (Specialized):**
    - **Description:** Tools that can generate high-frequency, time-critical loads and measure precise response times (often custom-built or highly specialized versions of generic tools).
6.  **Formal Verification Tools:**
    - **Description:** Tools that use mathematical techniques to prove the correctness of algorithms and properties (e.g., timing constraints) in critical parts of the code.

**(b) Design Patterns of Software Testing:**

**Design Patterns:** Reusable solutions to commonly occurring problems in software design.
**Design Patterns of Software Testing:** Similar concept, but applied to common problems encountered in designing, implementing, and maintaining software tests. They offer proven structures and approaches for building robust, maintainable, and efficient test automation frameworks and test suites.

**Purpose of Test Design Patterns:**

- **Improve Test Maintainability:** Make tests easier to update when the application changes.
- **Enhance Test Readability:** Make tests easier to understand by other team members.
- **Promote Reusability:** Encourage reusing test components and code.
- **Reduce Test Duplication:** Minimize redundant test code.
- **Increase Test Robustness:** Make tests less brittle and more reliable.
- **Improve Test Scalability:** Allow test suites to grow without becoming unmanageable.

**Key Design Patterns in Software Testing:**

1.  **Page Object Model (POM):**

    - **Problem:** UI changes often break test scripts, and test code becomes cluttered with UI locators.
    - **Solution:** Create separate classes (Page Objects) for each page or major section of the UI. Each Page Object encapsulates the UI elements (locators) and the services/methods that can be performed on that page.
    - **Benefit:** Tests interact with methods of the Page Object, not directly with UI elements. If the UI changes, only the Page Object needs updating, not all the test cases. Improves maintainability, readability, and reusability.
    - **Example:** A `LoginPage` class with methods like `enterUsername()`, `enterPassword()`, `clickLoginButton()`, and properties for username input, password input, login button locators.

2.  **Test Data Builders (or Object Mother/Factory):**

    - **Problem:** Creating complex test data manually for each test can be repetitive, verbose, and error-prone.
    - **Solution:** Provide a fluent API for building test data objects incrementally.
    - **Benefit:** Makes test data creation cleaner, more readable, and easier to manage, especially for complex entities.
    - **Example:** `new UserBuilder().withName("Alice").withEmail("alice@example.com").build()`

3.  **Singleton Pattern (for WebDriver/Appium Instances):**

    - **Problem:** Multiple test classes might need access to a single instance of a browser (WebDriver) or mobile app driver.
    - **Solution:** Ensure that only one instance of the driver is created and that all test classes share this single instance.
    - **Benefit:** Manages driver resources efficiently, prevents issues with multiple browser instances.

4.  **Strategy Pattern (for Different Validation Rules):**

    - **Problem:** When testing a feature that has different validation rules or algorithms based on certain conditions.
    - **Solution:** Define a family of algorithms, encapsulate each one, and make them interchangeable.
    - **Benefit:** Allows tests to dynamically select and apply different validation strategies without changing the core test logic.

5.  **Facade Pattern (for Complex API Interactions):**
    - **Problem:** Interacting with a complex API or system can involve many low-level calls.
    - **Solution:** Create a simpler, unified interface (Facade) over a set of complex API interactions.
    - **Benefit:** Simplifies test scripts by abstracting away complex backend interactions.

These patterns are not exhaustive but illustrate how applying established software design principles can lead to more robust and maintainable test automation.

### <mark> 21. What is Quality Assurance? Define Quality Attributes of a software and components of software quality Assurance. </mark>

**Quality Assurance (QA):**
Quality Assurance (QA) is a proactive and systematic process focused on preventing defects throughout the software development life cycle. It is a set of activities designed to ensure that the development process itself is efficient and effective, leading to the creation of a high-quality product. QA focuses on the "how" – building processes, methods, and standards to prevent errors.

- **Focus:** Process-oriented.
- **Goal:** Prevent defects from occurring in the first place.
- **Nature:** Proactive.

**Quality Attributes of a Software:**
Software quality attributes (also known as non-functional requirements or "ilities") are characteristics that describe _how_ well the software performs, rather than _what_ it does. They are crucial for customer satisfaction and system success.

1.  **Functionality:**

    - **Definition:** The degree to which the software provides functions which meet stated and implied needs when used under specified conditions.
    - **Sub-attributes:** Suitability, accuracy, interoperability, security, functional compliance.
    - **Example:** An e-commerce site allowing users to add items to a cart and check out.

2.  **Reliability:**

    - **Definition:** The ability of the software to perform its required functions under stated conditions for a specified period or number of operations without failure.
    - **Sub-attributes:** Maturity, fault tolerance, recoverability, availability.
    - **Example:** A banking system operating 24/7 with minimal downtime.

3.  **Usability:**

    - **Definition:** The ease with which users can learn, operate, prepare input, and interpret output from a system.
    - **Sub-attributes:** Understandability, learnability, operability, attractiveness, accessibility.
    - **Example:** A mobile app with an intuitive navigation and clear instructions.

4.  **Efficiency:**

    - **Definition:** The degree to which the software performs its functions with optimal resource utilization (e.g., time, CPU, memory).
    - **Sub-attributes:** Time behavior (response time, throughput), resource utilization.
    - **Example:** A search engine returning results within milliseconds using minimal server resources.

5.  **Maintainability:**

    - **Definition:** The ease with which a software system can be modified to correct faults, improve performance or other attributes, or adapt to a changed environment.
    - **Sub-attributes:** Analyzability, changeability, stability, testability.
    - **Example:** Code that is well-structured, commented, and modular, making it easy for new developers to understand and modify.

6.  **Portability:**

    - **Definition:** The ease with which software can be transferred from one environment to another (e.g., different hardware, OS, software environments).
    - **Sub-attributes:** Adaptability, installability, co-existence, replaceability.
    - **Example:** An application that runs seamlessly on Windows, macOS, and Linux.

7.  **Security:**
    - **Definition:** The ability of the software to protect information and data so that persons or other products or systems have the degree of data access appropriate to their types and levels of authorization.
    - **Example:** An application preventing unauthorized access or data breaches.

**Components of Software Quality Assurance (SQA):**
SQA activities are integrated throughout the SDLC to ensure quality.

1.  **Quality Management Plan:**

    - **Component:** Defines the overall quality objectives, policies, procedures, and responsibilities for quality assurance within an organization or project.
    - **Activity:** Creation and adherence to an SQA Plan (see Q32).

2.  **Process Definition and Adherence:**

    - **Component:** Establishing and documenting standard development and testing processes (e.g., SDLC models, coding standards, documentation standards).
    - **Activity:** Ensuring all team members follow these defined processes. This is often checked through audits.

3.  **Reviews and Audits:**

    - **Component:** Systematic examination of software work products (e.g., requirements, design, code, test plans) by peers or independent teams.
    - **Activities:** Formal Technical Reviews (FTRs), Inspections, Walkthroughs (see Q24-27). Process audits to check compliance.

4.  **Testing (as part of QA):**

    - **Component:** While testing finds defects (QC), designing effective test strategies, writing comprehensive test plans, and ensuring proper test execution processes are part of QA.
    - **Activity:** Defining test levels, types, and criteria.

5.  **Configuration Management:**

    - **Component:** Managing changes to software artifacts (code, documents, tests) throughout the SDLC to maintain consistency and integrity.
    - **Activity:** Version control, change control (see Q33).

6.  **Defect Prevention and Analysis:**

    - **Component:** Analyzing root causes of defects found to prevent similar defects in future projects or future phases of the current project.
    - **Activity:** Root Cause Analysis (RCA), implementing corrective and preventive actions.

7.  **Training and Skill Development:**

    - **Component:** Ensuring that development and QA teams have the necessary skills and knowledge to produce high-quality software.
    - **Activity:** Providing training on tools, processes, and technologies.

8.  **Metrics and Measurement:**

    - **Component:** Collecting and analyzing data related to quality (e.g., defect density, test coverage, requirements volatility) to assess process effectiveness and product quality.
    - **Activity:** Establishing key performance indicators (KPIs) and quality gates.

9.  **Tools and Automation:**
    - **Component:** Utilizing appropriate tools for various QA activities (e.g., static analysis, test automation, defect tracking, configuration management).
    - **Activity:** Selecting, implementing, and integrating quality tools.

### <mark> 22. How to do Quality Assurance? Explain the phases of PDCA cycle of Quality Assurance. </mark>

**How to Do Quality Assurance:**
Quality Assurance is achieved by implementing a systematic approach that integrates quality-focused activities throughout the entire software development life cycle, not just at the end. It involves defining, implementing, and monitoring processes to ensure that quality is built into the software from the ground up.

Key practices involved:

- **Establish Standards & Processes:** Define clear, documented processes for requirements, design, coding, testing, configuration management, etc.
- **Reviews & Audits:** Conduct regular reviews (requirements, design, code) and process audits to ensure adherence to standards and early detection of flaws.
- **Training:** Ensure personnel are trained in quality processes and tools.
- **Metrics & Analysis:** Collect data on quality (e.g., defect rates) to identify areas for improvement.
- **Tool Adoption:** Utilize tools for static analysis, automated testing, configuration management, etc.
- **Continuous Improvement:** Regularly evaluate and refine processes based on lessons learned.

**The PDCA Cycle of Quality Assurance:**
The **Plan-Do-Check-Act (PDCA)** cycle, also known as the Deming Cycle, is a fundamental iterative four-step management method used in business for the control and continuous improvement of processes and products. In Quality Assurance, it provides a framework for managing quality processes.

**Phases of the PDCA Cycle:**

1.  **PLAN (Establish Objectives and Processes):**

    - **Activity:** This phase involves defining the problem, setting goals, and developing a plan to achieve them. For QA, this means:
      - **Identify Quality Objectives:** What are the desired quality standards for the software? (e.g., target defect density, performance benchmarks).
      - **Define Processes:** Establish or refine the software development and testing processes, standards, and procedures to achieve those objectives. This includes selecting appropriate SDLC models, coding standards, test strategies, etc.
      - **Resource Planning:** Determine the necessary resources (people, tools, environment).
      - **Risk Assessment:** Identify potential quality risks and plan mitigation strategies.
    - **Example:** Planning to reduce production bugs by 20% by implementing mandatory code reviews and increasing automated test coverage.

2.  **DO (Implement the Plan):**

    - **Activity:** Execute the plan developed in the previous phase. For QA, this involves:
      - **Implement Processes:** Put the defined development and testing processes into practice.
      - **Perform Activities:** Carry out the planned activities, such as requirements gathering, design, coding, unit testing, integration testing, code reviews, and process audits.
      - **Collect Data:** Gather relevant data throughout the process (e.g., defect metrics, review findings, test results).
    - **Example:** Developers conduct code reviews before merging, and testers write and execute more automated tests as per the plan.

3.  **CHECK (Monitor and Measure Results):**

    - **Activity:** Monitor the implemented processes and measure the results against the planned objectives. Analyze the collected data to identify deviations and root causes.
    - **Activity:**
      - **Monitor Process Adherence:** Are the defined processes being followed? (e.g., conducting process audits).
      - **Analyze Metrics:** Review quality metrics (e.g., defect density, test coverage, review effectiveness).
      - **Identify Issues:** Are the quality objectives being met? Are there any new problems or bottlenecks?
      - **Root Cause Analysis:** Investigate why deviations or defects occurred.
    - **Example:** Analyzing defect reports, finding that the number of production bugs hasn't reduced, and identifying that code reviews are often skipped or done superficially.

4.  **ACT (Take Corrective and Preventive Actions):**
    - **Activity:** Based on the insights from the "Check" phase, take action to improve the process. This involves standardizing successful changes or revising the plan if it wasn't effective.
    - **Activity:**
      - **Corrective Actions:** Address identified problems (e.g., provide more training on code review best practices).
      - **Preventive Actions:** Implement changes to prevent recurrence of issues (e.g., integrate code review into CI/CD pipeline as a mandatory gate).
      - **Standardize Improvements:** If a change is successful, formalize it as a new standard process.
      - **Replan:** If the objectives are not met, or new objectives arise, restart the cycle from the "Plan" phase with a revised approach.
    - **Example:** Mandating code review tools, providing specific checklists for reviews, and updating the definition of "done" to include a successful code review.

The PDCA cycle is continuous, ensuring that QA is an ongoing process of improvement rather than a one-time activity.

### <mark> 23. What is Quality Control? Differentiate Quality Control and Quality Assurance. </mark>

**Quality Control (QC):**
Quality Control (QC) is a reactive process focused on identifying and correcting defects in the actual software product after it has been created. It is primarily concerned with verifying that the final product meets specified quality standards and requirements. QC focuses on the "what" – inspecting the product to find and fix errors.

- **Focus:** Product-oriented.
- **Goal:** Identify defects in the software product.
- **Nature:** Reactive.

**Differentiate Quality Control and Quality Assurance:**

| Feature                      | Quality Assurance (QA)                                                                                                  | Quality Control (QC)                                                                                                  |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **Primary Goal**             | **Prevention:** Prevent defects from occurring.                                                                         | **Detection:** Identify defects in the product.                                                                       |
| **Focus**                    | **Process-oriented:** Focuses on the _process_ used to create the product.                                              | **Product-oriented:** Focuses on the _product_ itself.                                                                |
| **Nature**                   | **Proactive:** Implemented early in the SDLC to avoid errors.                                                           | **Reactive:** Implemented after the product (or a part of it) has been created.                                       |
| **Activities**               | Defining standards, process documentation, training, audits, reviews (requirements, design, code), process improvement. | Testing (unit, integration, system, acceptance), inspections of finished products, defect identification, bug fixing. |
| **"Are we building the..."** | "...product _right_?" (Verification)                                                                                    | "..._right_ product?" (Validation)                                                                                    |
| **Responsibility**           | Typically the entire development team, including a dedicated QA team/manager.                                           | Often handled by testers, inspection teams, and developers (for bug fixing).                                          |
| **Example**                  | Creating a coding standard, conducting a design review meeting, defining test entry/exit criteria.                      | Executing test cases, performing a final system test, identifying a bug during user acceptance testing.               |
| **Timing**                   | Throughout the entire Software Development Life Cycle (SDLC).                                                           | Primarily during the testing phases of the SDLC.                                                                      |

**Analogy:**

- **QA:** Like a chef ensuring the ingredients are fresh, the kitchen is clean, and the cooking methods are precise _before_ cooking. It's about setting up the conditions for a good meal.
- **QC:** Like a food critic tasting the cooked meal to check if it's delicious and meets expectations. It's about inspecting the final dish.

Both QA and QC are essential for delivering a high-quality software product. QA sets up the framework for quality, while QC ensures that the actual output adheres to that framework.

### <mark> 24. Explain Software Technical Review (FTR) with Review Guidelines. </mark>

**Software Technical Review (FTR):**
A Formal Technical Review (FTR) is a systematic examination of a software work product (e.g., requirements specification, design document, source code, test plan) by a team of peers to uncover errors, ambiguities, and inconsistencies. FTRs are a crucial Quality Assurance activity aimed at improving product quality and reducing development costs by identifying defects early in the software development lifecycle.

- **Formal:** Implies a structured process with defined roles, clear objectives, and documented outputs.
- **Technical:** Focuses on the technical correctness and adherence to standards.
- **Peer Review:** Conducted by colleagues (peers) of the author, not by managers or superiors.

**Objectives of an FTR:**

1.  **Uncover Defects:** Find errors in logic, function, or implementation early.
2.  **Verify Adherence to Standards:** Ensure the work product conforms to predefined standards (e.g., coding standards, design principles).
3.  **Improve Quality:** Enhance the overall quality of the software work product.
4.  **Promote Consistency:** Ensure consistency across different parts of the system.
5.  **Identify Omissions & Ambiguities:** Find missing requirements or unclear specifications.
6.  **Knowledge Transfer:** Educate participants about the product and potential errors.
7.  **Training:** Provide a learning opportunity for junior team members.

**Typical FTR Participants:**

- **Producer/Author:** The person who created the work product.
- **Review Leader (Moderator):** Organizes and facilitates the meeting, ensures adherence to rules.
- **Reviewers/Inspectors:** Peers who examine the work product, identify defects, and prepare for the meeting.
- **Recorder:** Documents all defects, issues, and action items during the meeting.

**Review Guidelines (for effective FTRs):**

1.  **Define clear objectives:** State what specific issues the review aims to address (e.g., "verify correctness of database schema design," "check compliance with coding standards").
2.  **Define success criteria:** What needs to be achieved for the review to be considered successful? (e.g., "less than X critical defects," "all identified defects addressed within Y days").
3.  **Keep the meeting short and focused:** Typically 1-2 hours. Do not discuss solutions during the meeting; focus solely on identifying problems.
4.  **Limit the number of participants:** 3-5 participants are usually optimal.
5.  **Distribute materials in advance:** Provide ample time for reviewers to prepare and analyze the work product independently.
6.  **Establish a formal checklist:** Use a checklist of potential defects, common errors, and standards to guide reviewers.
7.  **Train reviewers:** Ensure reviewers understand their roles and responsibilities and how to conduct effective reviews.
8.  **Record all defects and action items:** Document every issue found, assign a responsible person, and set a due date for resolution.
9.  **Follow-up on defects:** Ensure all identified defects are addressed and verified by the producer, possibly through a re-review if necessary.
10. **Focus on the product, not the producer:** Maintain a professional and constructive tone. The goal is to improve the software, not to criticize individuals.
11. **Limit debate:** If a discussion arises, record it as an issue and move on. Don't let discussions derail the review meeting.
12. **Management should not attend:** To encourage open discussion and prevent perceived judgment.

### <mark> 25. What is Inspection in Software Testing? Who are involved in this review meeting? Define the steps of Inspection. </mark>

**Inspection in Software Testing:**
Inspection (also known as Fagan Inspection) is a highly formal and structured type of peer review used in software quality assurance to systematically detect and remove defects from documents (requirements, design, code, test plans, etc.) as early as possible in the software development lifecycle. It is considered one of the most effective defect detection techniques.

- **Characteristics:**
  - **Formal:** Adheres to a strict, defined process with roles, rules, and entry/exit criteria.
  - **Preparation:** Reviewers spend significant time preparing independently before the meeting.
  - **Checklists:** Uses detailed checklists of common error types.
  - **Focus on Detection:** Strictly focuses on finding defects, not discussing solutions.
  - **Data Collection:** Metrics are collected on defects found, time spent, etc., to improve future processes.

**Who are Involved in an Inspection Meeting:**
A typical inspection team consists of 4-6 individuals, each with a distinct role:

1.  **Moderator (Review Leader):**

    - **Role:** The most crucial role. Plans, schedules, and leads the inspection meeting. Ensures the process is followed, maintains objectivity, and mediates discussions. Is often responsible for post-inspection follow-up.
    - **Responsibility:** Ensures the meeting stays on track and productive.

2.  **Reader:**

    - **Role:** Paraphrases or reads the work product (e.g., code, document) aloud, line by line, to the inspection team during the meeting.
    - **Responsibility:** Helps the team focus and ensures common understanding.

3.  **Author (Producer):**

    - **Role:** The person who created the work product being inspected.
    - **Responsibility:** Explains the logic, answers questions, and notes defects found. They are not to defend their work but to understand the issues.

4.  **Inspector(s) (Reviewers):**

    - **Role:** Individuals who meticulously examine the work product for defects during the preparation phase and actively participate in the meeting by identifying and pointing out errors. They often have different perspectives (e.g., client, designer, tester).
    - **Responsibility:** Find defects.

5.  **Recorder (Scribe):**
    - **Role:** Documents all defects, issues, and action items identified during the inspection meeting.
    - **Responsibility:** Creates the defect log and summary report.

**Steps of Inspection:**

1.  **Planning (Entry Criteria):**

    - **Activity:** The Moderator verifies that the work product is ready for inspection (meets entry criteria like completeness, compilation success if code).
    - **Output:** Inspection schedule, team assignment.

2.  **Overview (Optional for familiar teams):**

    - **Activity:** The Author provides a brief, high-level explanation of the work product to the inspection team.
    - **Purpose:** Ensures everyone has a basic understanding.

3.  **Preparation (Individual Review):**

    - **Activity:** Each Inspector meticulously examines the work product independently using checklists, reference documents, and domain knowledge. They identify potential defects and mark them. This is the most time-consuming phase for inspectors.
    - **Output:** List of potential defects per inspector.

4.  **Inspection Meeting:**

    - **Activity:** The formal meeting where the Reader paraphrases the document, and Inspectors present the defects they found during preparation. The Moderator facilitates, and the Recorder logs everything. **No discussion of solutions** is allowed; the focus is purely on defect identification.
    - **Output:** Consolidated defect list.

5.  **Rework (Correction):**

    - **Activity:** The Author takes the consolidated defect list and rectifies all identified defects in the work product.
    - **Output:** Corrected work product.

6.  **Follow-up (Exit Criteria):**
    - **Activity:** The Moderator verifies that all identified defects have been corrected and that no new errors have been introduced. This might involve a re-inspection if a certain number of defects were found or if the changes were significant.
    - **Output:** Sign-off that the inspection process is complete and the work product meets exit criteria.

Inspections are highly effective in finding defects, especially in critical systems, but they are resource-intensive.

### <mark> 26. Differentiate Software Inspection and Formal Technical review(FTR). </mark>

While "Formal Technical Review (FTR)" is a broad term, and "Inspection" is a specific, highly structured type of FTR, there are distinctions when FTR is used in a more general sense to cover other types of reviews (like structured walkthroughs or less rigid peer reviews). Here's a differentiation focusing on Inspection as the most formal type of FTR:

| Feature             | Software Inspection                                                                                               | Formal Technical Review (FTR) (General)                                                                         |
| :------------------ | :---------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **Formality Level** | **Highest formality:** Strict process, roles, rules, entry/exit criteria.                                         | **High formality:** Structured, but can be less rigid than Inspection.                                          |
| **Primary Goal**    | **Defect Detection:** Systematically find defects early.                                                          | **Quality Improvement:** Find errors, ensure standards, improve product.                                        |
| **Preparation**     | **Extensive individual preparation:** Reviewers spend significant time analyzing the artifact before the meeting. | **Moderate preparation:** Reviewers prepare, but generally less rigorously than for Inspection.                 |
| **Checklists**      | **Mandatory and detailed:** Specific checklists are always used to guide reviewers.                               | **Optional/Less detailed:** May use general checklists or guidelines.                                           |
| **Meeting Focus**   | **Solely on defect identification:** No discussion of solutions, no debate.                                       | **Problem identification and discussion:** May involve brief discussions about potential solutions.             |
| **Metrics**         | **Mandatory data collection:** Metrics (defects per hour, defect types) are collected and analyzed.               | **Optional data collection:** Metrics may or may not be collected.                                              |
| **Roles**           | **Highly specialized roles:** Moderator, Reader, Author, Inspector, Recorder (all distinct).                      | **Less specialized roles:** Author, Review Leader, Reviewers (roles may overlap).                               |
| **Follow-up**       | **Formal follow-up by Moderator:** Ensures all defects are fixed and verified (may require re-inspection).        | **Less formal follow-up:** Author typically responsible for fixing defects, verification may be less stringent. |
| **Origin**          | Based on Michael Fagan's "Fagan Inspection" method.                                                               | A general term for any structured, peer-based technical review.                                                 |
| **Example**         | A "code inspection" where every line of code is read aloud and checked against strict rules and checklists.       | A "design review" meeting where team members discuss the design document for completeness and correctness.      |

In summary, all Inspections are FTRs, but not all FTRs are Inspections. Inspection is the most rigorous, disciplined, and metrics-driven form of FTR, making it highly effective for defect discovery, especially in critical software.

### <mark> 27. What is Walk through in software testing? Explain the Objectives and Advantages of Walk through. </mark>

**Walkthrough in Software Testing:**
A Walkthrough is an informal or semi-formal review technique where the author of a software work product (e.g., requirements document, design specification, code) guides a group of peers through the document, explaining its content, logic, and intended purpose. The reviewers ask questions, make comments, and identify potential issues or ambiguities as the author "walks through" the material.

- **Nature:** Less formal and structured than an Inspection or FTR.
- **Focus:** Understanding, brainstorming, and identifying obvious issues.
- **Driven by:** The author.

**Objectives of a Walkthrough:**

1.  **Knowledge Transfer and Understanding:** To educate team members (especially new ones) about the product, design, or code.
2.  **Early Defect Detection:** To find logical errors, omissions, ambiguities, and inconsistencies early in the development lifecycle.
3.  **Brainstorming and Problem Solving:** To facilitate open discussion and collective problem-solving related to the work product.
4.  **Consensus Building:** To achieve a common understanding and agreement among team members regarding the functionality or design.
5.  **Training:** To provide an opportunity for less experienced team members to learn from senior colleagues.
6.  **Improve Communication:** To foster better communication and collaboration within the team.

**Advantages of Walkthrough:**

1.  **Less Formal and Flexible:** Easier to organize and execute than Inspections, requiring less overhead and preparation.
2.  **Promotes Collaboration:** Encourages open discussion and active participation from all attendees.
3.  **Effective for Learning and Knowledge Transfer:** Excellent for onboarding new team members or sharing complex logic.
4.  **Early Feedback:** Provides quick feedback on the work product at various stages of development.
5.  **Cost-Effective (for informal reviews):** Reduces the need for extensive formal documentation and dedicated review time.
6.  **Versatility:** Can be applied to various work products (requirements, design, code, test plans, user manuals).
7.  **Finds Obvious Errors Quickly:** While not as thorough as inspections, it's good at catching glaring mistakes or misunderstandings.

**Disadvantages:**

- **Less Rigorous:** May miss subtle or complex defects due to lack of formal preparation and checklists.
- **Author-Dependent:** Effectiveness heavily relies on the author's ability to explain clearly.
- **Can Deviate:** Discussions can sometimes go off-topic if not properly facilitated.
- **No Metrics:** Typically, no formal metrics are collected.

### <mark> 28. Explain the objectives and types of Software Reliability. Also Define the Measurement of Software Reliability. </mark>

**Software Reliability:**
Software reliability is the probability that software will perform its required functions correctly without failure for a specified period of time under specified conditions. It is a key quality attribute that quantifies the dependability of a software system. Unlike hardware, software failures are generally due to design flaws (bugs) rather than physical wear and tear.

**Objectives of Software Reliability:**

1.  **Assessing Product Quality:** To quantitatively measure and assess the level of quality of a software product in terms of its dependability and operational stability.
2.  **Predicting Future Behavior:** To predict the likelihood of software failure in operational use, aiding in risk assessment and release decisions.
3.  **Guiding Development Efforts:** To identify areas where reliability needs improvement, guiding resource allocation for testing, defect fixing, and quality assurance.
4.  **Customer Satisfaction:** To deliver software that functions consistently and predictably, leading to higher user confidence and satisfaction.
5.  **Compliance:** To meet reliability requirements for critical systems (e.g., medical, aerospace) where failure can have severe consequences.
6.  **Comparing Alternatives:** To evaluate and compare the reliability of different software designs or versions.

**Types of Software Reliability (related to what they measure or focus on):**

1.  **Availability:** The probability that the system is operating correctly at a given point in time or over a given time interval. Often expressed as a percentage (e.g., "four nines" availability = 99.99%).
2.  **Mean Time To Failure (MTTF):** The average time between consecutive failures for a repairable system. This is a measure of the expected operational time before a failure occurs. Higher MTTF means higher reliability.
3.  **Mean Time Between Failures (MTBF):** For repairable systems, this is the average time between system failures, including the time it takes to repair the system (MTTF + MTTR, where MTTR is Mean Time To Repair).
4.  **Failure Intensity (Failure Rate):** The rate at which failures occur during a specified period of time. Often expressed as failures per hour or per operation. A decreasing failure rate indicates increasing reliability.
5.  **Fault Tolerance Reliability:** Measures the system's ability to continue operating correctly despite the presence of faults.
6.  **Operational Reliability:** Measures reliability based on how the system is actually used in its operational environment, including actual usage profiles and environmental conditions.

**Measurement of Software Reliability:**

Software reliability is measured using various metrics and models, often based on observing failure rates over time during testing or operational use. The general process involves:

1.  **Define a Failure:** Clearly define what constitutes a "failure" for the specific system (e.g., system crash, incorrect output, unacceptable performance degradation).
2.  **Define Operational Profile:** Describe the expected usage of the software in its operational environment. This includes the frequency of different functions and the types of inputs. This is crucial as reliability is dependent on usage.
3.  **Collect Failure Data:** During testing (e.g., system testing, acceptance testing) or during actual operation, record:
    - Time of failure (or test cases/operations executed until failure).
    - Type of failure.
    - Severity of failure.
    - Time to repair (for MTTR).
4.  **Calculate Reliability Metrics:** Using the collected data, calculate various reliability metrics:
    - `MTTF = Total operational time / Total number of failures`
    - `MTBF = Total operational time / Total number of failures + Total repair time`
    - `Failure Rate = Number of failures / Total operational time`
    - `Availability = Uptime / (Uptime + Downtime)`
5.  **Apply Software Reliability Growth Models (SRGMs):**
    - These are mathematical models that use historical failure data to predict future failure rates and assess the current reliability of the software as defects are detected and removed.
    - They model the "growth" of reliability over time (or test effort) as bugs are fixed.
    - **Examples:** Jelinski-Moranda Model, Goel-Okumoto Model, Musa-Okumoto Model.
    - These models help in determining if the software has reached its target reliability level for release.
6.  **Analyze and Interpret:** Analyze the trends in reliability metrics. A decreasing failure rate or increasing MTTF/MTBF indicates improved reliability. The measurements are then used to make informed decisions about product release or further quality improvements.

### <mark> 29. Write short note on Quality Standards ISO 9000 Certification. </mark>

**Quality Standards: ISO 9000 Certification**

**ISO (International Organization for Standardization):** A non-governmental organization that develops and publishes international standards.
**ISO 9000 Family of Standards:** A set of international standards for quality management systems (QMS). It provides a framework for organizations to ensure they consistently provide products and services that meet customer and regulatory requirements.

**Key Concepts of ISO 9000:**

1.  **Customer Focus:** Understanding and meeting customer requirements is paramount.
2.  **Leadership:** Top management leadership and commitment to quality.
3.  **Engagement of People:** Involvement of all employees in achieving quality objectives.
4.  **Process Approach:** Managing activities as processes to achieve consistent results.
5.  **Improvement:** Continuous improvement of the QMS.
6.  **Evidence-based Decision Making:** Decisions based on data analysis.
7.  **Relationship Management:** Managing relationships with suppliers and partners.

**ISO 9001 (The Certifiable Standard):**
While ISO 9000 is a series, the specific standard for which organizations can obtain certification is **ISO 9001:2015** (the current version). ISO 9001 sets out the criteria for a quality management system. It is not about software quality itself, but about the _process_ of managing quality within an organization, which indirectly impacts software quality.

**Components of ISO 9001 Relevant to Software:**

- **Context of the Organization:** Understanding internal/external issues.
- **Leadership:** Management commitment, quality policy.
- **Planning:** Risk management, quality objectives.
- **Support:** Resources, competence, awareness, communication, documented information.
- **Operation:** Operational planning and control, requirements for products/services, design and development, control of external providers, production, release, control of non-conforming outputs.
- **Performance Evaluation:** Monitoring, measurement, analysis, internal audit, management review.
- **Improvement:** Nonconformity and corrective action, continual improvement.

**ISO 9000 Certification Process:**

1.  **Implement QMS:** The organization develops and implements a Quality Management System that complies with the requirements of ISO 9001.
2.  **Internal Audit:** Conducts internal audits to ensure its QMS is effective.
3.  **Certification Body Audit:** Engages an accredited third-party certification body to perform an external audit.
4.  **Certification:** If the audit is successful, the organization receives ISO 9001 certification, which is typically valid for three years, with surveillance audits annually.

**Benefits of ISO 9000 Certification (for software organizations):**

- **Enhanced Customer Confidence:** Demonstrates a commitment to quality and reliable processes.
- **Improved Processes:** Forces organizations to document and standardize their processes, leading to greater efficiency and consistency.
- **Better Management Control:** Provides a structured approach to managing quality throughout the organization.
- **Increased Market Opportunities:** Many clients, especially in regulated industries, require ISO 9001 certification from their vendors.
- **Reduced Waste & Rework:** By standardizing processes and focusing on prevention, defects and inefficiencies can be reduced.
- **Basis for Continuous Improvement:** Provides a framework for ongoing quality enhancement.

**Drawbacks:**

- **Cost:** Certification process can be expensive in terms of audit fees and internal resources.
- **Bureaucracy:** Can lead to excessive documentation and administrative overhead if not implemented pragmatically.
- **"Paper" Compliance:** Some organizations might focus on documentation for certification rather than genuine process improvement.

In essence, ISO 9001 certification for a software company means that their _management system_ for developing and delivering software meets international standards for quality, indicating a disciplined approach to operations.

### <mark> 30. What is CMM (Capability Maturity Model)? Explain the methods and levels of CMM. </mark>

**CMM (Capability Maturity Model):**
The Capability Maturity Model (CMM) is a framework developed by the Software Engineering Institute (SEI) at Carnegie Mellon University. It provides a structured approach for organizations to assess and improve the maturity of their software development processes. CMM defines five levels of maturity, indicating an organization's capability to consistently produce quality software within budget and schedule.

- **Focus:** Process improvement, specifically for software development and maintenance.
- **Goal:** To help organizations evolve from immature, chaotic processes to disciplined, mature, and continuously improving processes.

**Methods of CMM (Key Process Areas - KPAs):**
Each maturity level (except Level 1) is characterized by several **Key Process Areas (KPAs)**. A KPA identifies a cluster of related activities that, when performed collectively, achieve a set of goals considered essential for process improvement. To achieve a maturity level, an organization must satisfy the goals of all KPAs defined for that level.

- **Example KPAs:** Requirements Management, Software Project Planning, Software Configuration Management, Peer Reviews, Defect Prevention, Quantitative Process Management.

**Levels of CMM:**

1.  **Level 1: Initial (Ad-hoc/Chaotic)**

    - **Characteristics:** Processes are unorganized, chaotic, and often reactive. Success depends heavily on individual heroics rather than established procedures. Projects are often over budget and behind schedule.
    - **KPA:** None. Processes are informal and not consistently applied.
    - **Risk:** High. Unpredictable results.

2.  **Level 2: Repeatable (Managed)**

    - **Characteristics:** Basic project management processes are established and followed. Planning, tracking, requirements management, and configuration management are in place for individual projects. Successes can be repeated because basic processes are managed.
    - **Key Process Areas (KPAs):**
      - Requirements Management
      - Software Project Planning
      - Software Project Tracking and Oversight
      - Software Subcontract Management
      - Software Quality Assurance
      - Software Configuration Management
    - **Risk:** Medium. Still reactive to some extent.

3.  **Level 3: Defined (Standardized)**

    - **Characteristics:** Software processes for both management and engineering activities are documented, standardized, and integrated into a standard software process for the organization. All projects use an adapted version of this standard process. Focus on process definition and institutionalization.
    - **Key Process Areas (KPAs):** (Includes all Level 2 KPAs plus)
      - Organization Process Focus
      - Organization Process Definition
      - Integrated Software Management
      - Software Product Engineering
      - Intergroup Coordination
      - Peer Reviews
    - **Risk:** Low-Medium. More stable and predictable.

4.  **Level 4: Managed (Quantitatively Managed)**

    - **Characteristics:** The organization establishes quantitative quality goals for software products and processes. Processes are measured, controlled, and analyzed using statistical and quantitative techniques. Performance is predictable.
    - **Key Process Areas (KPAs):** (Includes all Level 3 KPAs plus)
      - Organizational Process Performance
      - Quantitative Project Management
    - **Risk:** Low. Data-driven decision making.

5.  **Level 5: Optimizing (Continually Improving)**
    - **Characteristics:** The organization continuously improves its processes based on quantitative feedback and innovative ideas. Focus is on defect prevention and process optimization. The organization identifies and deploys process improvements to achieve continuous and measurable improvement.
    - **Key Process Areas (KPAs):** (Includes all Level 4 KPAs plus)
      - Organizational Innovation and Deployment
      - Causal Analysis and Resolution
    - **Risk:** Very Low. Adaptable and innovative.

**Note:** CMM has evolved into **CMMI (Capability Maturity Model Integration)**, which is a more comprehensive and flexible framework for process improvement across various domains (development, services, acquisition). However, the underlying principles and maturity levels remain similar.

### <mark> 31. What are the characteristics of Six Sigma Process? Explain two project methodologies DMAIC and DMADV with its phases. </mark>

**Six Sigma Process:**
Six Sigma is a disciplined, data-driven approach and methodology for eliminating defects (driving towards six standard deviations between the mean and the nearest specification limit) in any process – from manufacturing to transactional and from product to service. The core idea is that if you can measure how many "defects" you have in a process, you can systematically figure out how to eliminate them and get as close to "zero defects" as possible.

**Characteristics of Six Sigma Process:**

1.  **Customer Focus:** All improvement efforts are centered on delivering what the customer truly values, aiming to reduce defects that impact customer satisfaction.
2.  **Data-Driven Decisions:** Relies heavily on statistical analysis and factual data for problem identification, root cause analysis, and solution validation. Decisions are not based on intuition.
3.  **Process Focus:** Views all work as a series of processes that can be measured, analyzed, improved, and controlled.
4.  **Defect Reduction:** Primary goal is to reduce variability and defects to a level of 3.4 defects per million opportunities (DPMO), representing near perfection (six standard deviations).
5.  **Structured Methodology:** Utilizes specific methodologies (DMAIC, DMADV) with defined phases and tools.
6.  **Continuous Improvement:** Emphasizes ongoing improvement through systematic analysis and control.
7.  **Management Commitment:** Requires strong commitment and leadership from top management.
8.  **Trained Personnel:** Uses "Belts" (Green Belt, Black Belt, Master Black Belt) to denote different levels of expertise and responsibility in Six Sigma projects.

**Two Project Methodologies in Six Sigma:**

Six Sigma typically uses two main methodologies, represented by acronyms, depending on the nature of the project:

1.  **DMAIC (Define, Measure, Analyze, Improve, Control):**

    - Used for **improving existing processes** that are not meeting customer requirements or performance targets.

    - **Phases:**

      - **D - Define:**

        - **Activity:** Identify the problem, customer needs, project goals, and scope. Define "what" needs to be improved from the customer's perspective. Create a Project Charter.
        - **Output:** Problem statement, project goals, critical-to-quality (CTQ) characteristics.
        - _Example:_ Define the problem: "Our software's login failures are too high (5% of attempts)."

      - **M - Measure:**

        - **Activity:** Collect data on the current process performance. Establish baseline metrics for the problem.
        - **Output:** Data collection plan, current process performance (baseline), process maps.
        - _Example:_ Measure current login failure rate, identify specific failure types, collect data on response times.

      - **A - Analyze:**

        - **Activity:** Analyze the collected data to identify the root causes of the problem. Use statistical tools to understand relationships and pinpoint bottlenecks.
        - **Output:** Root cause analysis, verified hypotheses, identified sources of variation.
        - _Example:_ Analyze logs, identify that 80% of failures are due to database connection timeouts on peak load, and 20% from incorrect password attempts.

      - **I - Improve:**

        - **Activity:** Develop and implement solutions to address the root causes. Brainstorm, pilot, and refine improvements.
        - **Output:** Solution implementation plan, pilot test results, improved process.
        - _Example:_ Implement connection pooling, optimize database queries, add rate limiting for failed login attempts.

      - **C - Control:**
        - **Activity:** Implement controls to sustain the improvements and prevent the problem from recurring. Monitor the new process performance to ensure it remains stable.
        - **Output:** Control plans, monitoring systems, updated documentation, training.
        - _Example:_ Monitor login failure rate after changes, set up alerts, document new database connection best practices.

2.  **DMADV (Define, Measure, Analyze, Design, Verify):**

    - Used for **designing new products or processes** or redesigning existing ones that are so fundamentally flawed they cannot be improved incrementally by DMAIC.

    - **Phases:**

      - **D - Define:**

        - **Activity:** Define the project goals, scope, and customer requirements (CTQs).
        - _Example:_ Define requirements for a new payment gateway module, focusing on reliability and transaction speed.

      - **M - Measure:**

        - **Activity:** Measure customer needs, benchmarks, and product/process capabilities. Quantify customer expectations and product features.
        - _Example:_ Measure industry benchmarks for payment transaction speed, conduct user surveys for desired features.

      - **A - Analyze:**

        - **Activity:** Analyze options for meeting customer requirements. Develop high-level designs and assess their feasibility and risks.
        - _Example:_ Analyze different payment gateway APIs, identify potential integration challenges, assess security risks of various designs.

      - **D - Design:**

        - **Activity:** Design the new process or product in detail based on the analysis. This includes prototyping, simulation, and detailed specifications.
        - _Example:_ Design the architecture of the payment module, select specific technologies, create detailed API specifications.

      - **V - Verify:**
        - **Activity:** Verify the design's performance and ability to meet customer requirements. This includes pilot runs, testing, and validation of the new product/process before full deployment.
        - _Example:_ Thoroughly test the new payment module (unit, integration, performance, security), conduct user acceptance testing, monitor initial transactions in production.

In essence, DMAIC is for making existing things better, while DMADV is for creating new things or radically overhauling old ones.

### <mark> 32. Explain SQA Plan with its Activities, Benefits and Disadvantages. </mark>

**SQA Plan (Software Quality Assurance Plan):**
An SQA Plan is a formal document that defines how software quality assurance will be implemented and managed throughout a software development project. It outlines the specific activities, tasks, tools, standards, and responsibilities related to ensuring the quality of the software product and the processes used to build it. It essentially serves as a roadmap for all quality-related efforts.

**Key Sections of an SQA Plan (typical content):**

1.  **Purpose and Scope:** What the plan covers and its objectives.
2.  **Reference Documents:** All relevant standards, policies, and project documents.
3.  **Management:** Organization, tasks, responsibilities, reporting structure for SQA.
4.  **Documentation:** Documents to be reviewed and their quality criteria.
5.  **Standards, Practices, and Conventions:** Standards to be applied (e.g., coding, design, testing, documentation).
6.  **Reviews and Audits:** Types of reviews (Inspections, Walkthroughs), frequency, and participants.
7.  **Test Plan and Procedures:** How testing will be done (strategies, levels, types).
8.  **Problem Reporting and Corrective Action:** Defect management process.
9.  **Tools, Technologies, and Methods:** Software QA tools to be used.
10. **Code Control:** Configuration management, version control.
11. **Training:** SQA training needs.
12. **Risk Management:** Quality risks and mitigation strategies.
13. **Metrics:** Quality metrics to be collected and analyzed.

**Activities defined in an SQA Plan:**

1.  **Review Activities:**
    - Scheduling and conducting formal technical reviews (FTRs), inspections, and walkthroughs for requirements, design, code, and test plans.
    - Ensuring review findings are properly documented and addressed.
2.  **Audit Activities:**
    - Performing process audits to ensure adherence to defined SDLC processes, standards, and procedures.
    - Conducting product audits to verify compliance with quality requirements.
3.  **Test Management Activities:**
    - Defining test strategy, test levels, and types of testing.
    - Ensuring creation of comprehensive test plans, test cases, and test data.
    - Monitoring test execution progress and coverage.
4.  **Defect Management Activities:**
    - Establishing procedures for defect reporting, tracking, prioritization, and resolution.
    - Conducting root cause analysis for recurring defects.
5.  **Configuration Management Activities:**
    - Defining procedures for version control of all software artifacts.
    - Managing changes to requirements, design, and code.
6.  **Metrics Collection and Analysis:**
    - Defining quality metrics (e.g., defect density, test coverage, review effectiveness).
    - Collecting, analyzing, and reporting on these metrics to assess process and product quality.
7.  **Training Activities:**
    - Identifying training needs for development and QA teams in quality processes, tools, and standards.
8.  **Risk Management Activities (Quality Specific):**
    - Identifying potential quality risks and planning mitigation strategies.
    - Monitoring these risks throughout the project.

**Benefits of an SQA Plan:**

1.  **Systematic Approach:** Ensures a structured and organized approach to quality assurance, rather than ad-hoc efforts.
2.  **Early Defect Detection:** By integrating QA activities throughout the SDLC, it helps find defects earlier, which is cheaper to fix.
3.  **Improved Product Quality:** Leads to a higher quality software product by proactively preventing defects and ensuring adherence to standards.
4.  **Enhanced Communication:** Provides a clear reference for all stakeholders, improving understanding and collaboration.
5.  **Increased Transparency:** Makes the quality assurance process visible and auditable.
6.  **Risk Mitigation:** Helps identify and address quality-related risks proactively.
7.  **Consistency:** Promotes consistent quality practices across different projects and teams.
8.  **Compliance:** Aids in meeting regulatory and contractual quality requirements.

**Disadvantages of an SQA Plan:**

1.  **Overhead:** Creating and maintaining a comprehensive SQA plan can be time-consuming and require significant effort, especially for small or agile projects.
2.  **Rigidity:** If too detailed or inflexible, it can become a bureaucratic burden that slows down rapid development cycles, particularly in agile environments.
3.  **Staleness:** The plan can quickly become outdated if not regularly reviewed and updated to reflect changes in project scope, technology, or processes.
4.  **Resource Intensive:** Requires dedicated resources (time, personnel, tools) for its implementation and monitoring.
5.  **Perceived as Bureaucracy:** Some teams might view it as an unnecessary formality rather than a beneficial guide.

Despite the disadvantages, a well-crafted and appropriately scaled SQA plan is invaluable for achieving and maintaining high software quality in most professional development environments.

### <mark> 33. Describe the process of SCM (System Configuration Management). Also Explain Version Control and Change Control with Suitable Diagram. </mark>

**System Configuration Management (SCM):**
System Configuration Management (SCM) is a systematic process of managing, organizing, and controlling changes to the software development process and its associated artifacts throughout the entire software development life cycle. This includes source code, documentation (requirements, design, test plans), libraries, build scripts, data, and even hardware specifications. SCM ensures consistency, traceability, and integrity of the software system.

**Process of SCM:**

1.  **Configuration Item Identification:**

    - **Activity:** Determine all the items that need to be managed and controlled. These are called Configuration Items (CIs).
    - **Examples:** Source code files, design documents, test cases, build scripts, deployment scripts, user manuals.

2.  **Version Control (Source Code Control):**

    - **Activity:** Establish a system to manage different versions of configuration items, ensuring that changes are tracked, history is maintained, and conflicts are resolved.
    - **Goal:** To track changes, allow rollback, enable branching/merging for parallel development. (Explained below)

3.  **Change Control (Change Management):**

    - **Activity:** Define a formal process for requesting, evaluating, approving, and tracking all proposed changes to configuration items.
    - **Goal:** To ensure changes are made in a controlled manner, with proper authorization and impact assessment. (Explained below)

4.  **Configuration Status Accounting:**

    - **Activity:** Record and report the current status of all configuration items and changes made to them. This involves maintaining a database of CIs, their versions, and change history.
    - **Goal:** To provide accurate and up-to-date information about the system's configuration.

5.  **Configuration Auditing:**
    - **Activity:** Verify that the configuration items meet their specifications and that the change control process has been followed correctly. This ensures that the current version of the software includes all approved changes and no unauthorized ones.
    - **Types:** Functional Configuration Audit (verifies performance/functionality), Physical Configuration Audit (verifies documentation matches implementation).

**Explanation of Version Control and Change Control:**

**1. Version Control (Revision Control / Source Code Control):**

- **Definition:** The process of managing changes to documents, computer programs, large web sites, and other collections of information. It tracks changes to files over time, allowing multiple people to work on the same project concurrently without overwriting each other's work and providing a history of all changes.
- **Purpose:**
  - **Track Changes:** Records who made what changes, when, and why.
  - **Collaboration:** Enables multiple developers to work on the same codebase simultaneously.
  - **Rollback:** Allows reverting to a previous working version of a file or the entire codebase.
  - **Branching & Merging:** Supports parallel development of features and bug fixes (branches) and integrating those changes back into the main codebase (merging).
- **Tools:** Git, SVN (Subversion), Mercurial, Perforce.

**2. Change Control (Change Management):**

- **Definition:** The formal process of managing changes to software artifacts (like code, requirements, design documents) after a baseline has been established. It involves a formal review and approval process for any proposed modification to a configuration item.
- **Purpose:**
  - **Controlled Evolution:** Ensures that changes are introduced systematically and are properly authorized.
  - **Impact Assessment:** Forces evaluation of the potential impact of a change on other parts of the system, schedule, and cost.
  - **Traceability:** Links changes to specific requirements or reported defects.
  - **Risk Mitigation:** Prevents unauthorized, un-tested, or problematic changes from entering the system.
- **Process usually involves:**
  - **Change Request (CR):** A formal request to modify a CI.
  - **Impact Analysis:** Assessing consequences of the change.
  - **Review & Approval:** A Change Control Board (CCB) or designated authority reviews and approves/rejects the CR.
  - **Implementation:** The approved change is made.
  - **Verification:** Testing the change.
  - **Release:** Incorporating the change into a new baseline.
- **Tools:** Jira, Azure DevOps, Bugzilla (often integrate with Version Control tools).

**Suitable Diagram (Conceptual):**

```
             +---------------------+
             |     Requirements    |
             |      (Baseline)     |
             +----------+----------+
                        |
                        | Change Request (CR)
                        V
             +---------------------+
             |   Change Control    |<-----------+
             | (CCB Review/Approval) |          |
             +----------+----------+          |
                        |                     |
              Approved Change Request       |
                        V                     |
             +---------------------+          |
             |   Version Control   |          |
             | (Checkout, Modify, Commit)|     |
             | (Tracks versions, branches) |    |
             +----------+----------+          |
                        |                     |
                        | Changes tracked     |
                        V                     |
             +---------------------+          |
             |  Configuration Items |----------+
             | (Code, Docs, Tests)  |
             +---------------------+
```

This diagram shows how a change request for a configuration item goes through the change control process (approval), then is implemented and tracked via version control, ultimately updating the configuration items themselves, with feedback loops.

### <mark> 34. What is a Test Suit? Define the parameters of Test Case and Test Case Management tools. </mark>

**Test Suite:**
A Test Suite is a collection or set of related test cases grouped together to test a specific functionality, module, or feature of the software, or for a particular type of testing (e.g., regression suite, smoke test suite). Organizing test cases into suites helps in managing and executing them efficiently.

- **Purpose:** To streamline test execution, provide logical grouping for reporting, and ensure comprehensive coverage of specific areas.
- **Example:** A "Login Test Suite" might contain test cases for valid login, invalid password, invalid username, locked account, forgotten password, etc. A "Regression Test Suite" might contain a subset of critical test cases from various functionalities.

**Parameters (Attributes) of a Test Case:**
A well-defined test case typically includes the following parameters or attributes:

1.  **Test Case ID:** A unique identifier for the test case (e.g., TC_LOGIN_001, HP_SEARCH_005).
2.  **Test Case Name/Title:** A brief, descriptive name summarizing the test's purpose.
3.  **Test Objective:** A concise statement of what the test aims to verify or achieve.
4.  **Preconditions:** Conditions that must be met before the test case can be executed successfully (e.g., "User is registered," "Database is up," "Application is launched").
5.  **Test Steps:** A detailed, step-by-step procedure to execute the test case. (e.g., "1. Navigate to login page. 2. Enter username 'testuser'. 3. Enter password 'password123'. 4. Click 'Login' button.").
6.  **Test Data:** Specific input data required for the test steps (e.g., username, password, item ID, quantity).
7.  **Expected Result:** The anticipated outcome or behavior of the system after executing the test steps. This must be clear and measurable. (e.g., "User is logged in and redirected to dashboard," "Error message 'Invalid credentials' is displayed").
8.  **Post-conditions:** The state of the system after the test case has been executed (e.g., "User is logged out," "Data is saved in DB").
9.  **Actual Result:** The observed outcome when the test case is executed (filled in during execution).
10. **Status:** The result of the test execution (Pass, Fail, Blocked, Skipped).
11. **Test Environment:** The specific environment (OS, browser, hardware) where the test was executed.
12. **Priority:** The importance of the test case (e.g., High, Medium, Low).
13. **Severity:** The impact of a failure if this test case fails.
14. **Tester Name:** The name of the person who executed the test.
15. **Date of Execution:** When the test was executed.
16. **Associated Requirement(s):** Link to the requirement(s) that this test case validates (for traceability).
17. **Associated Defect(s):** Link to any defects found during the execution of this test case.

**Test Case Management Tools:**
Test Case Management (TCM) tools are software applications used to manage and organize the entire testing process, including test planning, test case design, test execution, and reporting. They provide a central repository for all test-related artifacts.

**Key Features of TCM Tools:**

- **Test Case Repository:** Store, organize, and version control test cases.
- **Test Plan Management:** Create and manage test plans, cycles, and releases.
- **Test Execution Management:** Track test execution progress, assign tests to testers, record results.
- **Defect Management Integration:** Seamless integration with bug tracking systems (e.g., Jira, Bugzilla) for logging and linking defects.
- **Requirements Traceability:** Link test cases to requirements for coverage analysis.
- **Reporting and Dashboards:** Generate various reports (e.g., test execution summary, defect trend, coverage reports).
- **Version Control:** Manage changes to test cases and test suites.
- **User Management & Permissions:** Control access for different roles.
- **Automation Integration:** Ability to link with automated test scripts and execution results.

**Examples of Test Case Management Tools:**

- **Jira (with extensions like Zephyr, Xray, TestRail):** Very popular, widely used, highly customizable.
- **TestRail:** A dedicated, robust test management tool known for its user-friendly interface.
- **Azure DevOps (Test Plans):** Microsoft's comprehensive ALM suite with integrated test management.
- **ALM Octane (formerly HP ALM/Quality Center):** Enterprise-level test management solution.
- **TestLink:** Open-source test management tool.
- **PractiTest:** SaaS-based test management tool.
- **QMetry:** Comprehensive test management and quality assurance platform.

These tools are crucial for organizing and scaling testing efforts, especially in larger and more complex projects.

### <mark> 35. Explain various types of Test Cases with example. </mark>

Test cases can be categorized based on their purpose, input type, or the aspect of the software they target. Here are various common types of test cases:

1.  **Positive Test Cases:**

    - **Definition:** Test cases designed to verify that the software behaves as expected when given valid inputs and executed under normal, expected conditions.
    - **Purpose:** To confirm that the system functions correctly according to its specifications.
    - **Example (Login Page):**
      - **Input:** Valid username and valid password.
      - **Expected:** User successfully logs in and is redirected to the dashboard.

2.  **Negative Test Cases:**

    - **Definition:** Test cases designed to verify that the software handles invalid, unexpected, or abnormal inputs and conditions gracefully, typically by displaying an appropriate error message or preventing the action.
    - **Purpose:** To check the robustness, error handling, and security of the system.
    - **Example (Login Page):**
      - **Input:** Valid username, invalid password.
      - **Expected:** Error message "Invalid username or password" is displayed, and user remains on the login page.
      - **Input:** Empty username and empty password.
      - **Expected:** Error message "Username is required" or "Password is required" is displayed.

3.  **Boundary Value Test Cases:**

    - **Definition:** Test cases that use input values at the extreme ends of valid or invalid ranges (boundaries).
    - **Purpose:** To find "off-by-one" errors or issues specifically at the transition points of expected behavior.
    - **Example (Age Input: 18-60 years):**
      - **Input:** `17` (invalid, just below min) -> Expected: Error message.
      - **Input:** `18` (valid, min) -> Expected: Accepted.
      - **Input:** `60` (valid, max) -> Expected: Accepted.
      - **Input:** `61` (invalid, just above max) -> Expected: Error message.

4.  **Equivalence Partitioning Test Cases:**

    - **Definition:** Test cases that select one representative value from each identified valid and invalid equivalence class of inputs.
    - **Purpose:** To reduce the total number of test cases while ensuring coverage of distinct input behaviors.
    - **Example (Numeric Grade: 0-100):**
      - **Valid Class (0-100):** Input `50` -> Expected: Valid grade processed.
      - **Invalid Class (<0):** Input `-10` -> Expected: Error.
      - **Invalid Class (>100):** Input `110` -> Expected: Error.

5.  **Functional Test Cases:**

    - **Definition:** Test cases that verify specific functional requirements of the software. They describe what the system _does_.
    - **Purpose:** To ensure that each feature works as specified.
    - **Example (E-commerce "Add to Cart"):**
      - **Input:** Select an item, specify quantity `1`, click "Add to Cart".
      - **Expected:** Item successfully added, cart count updates, confirmation message.

6.  **Non-Functional Test Cases:**

    - **Definition:** Test cases that verify non-functional requirements like performance, security, usability, reliability, etc. They describe _how_ the system performs.
    - **Purpose:** To ensure the system meets quality attributes.
    - **Example (Performance):**
      - **Input:** Login with 1000 concurrent users.
      - **Expected:** Average login time is under 2 seconds.
    - **Example (Security):**
      - **Input:** Try to access admin page without being logged in as admin.
      - **Expected:** Access denied, redirected to login page.

7.  **Usability Test Cases:**

    - **Definition:** Test cases focusing on the ease of use, learnability, and overall user experience.
    - **Purpose:** To ensure the interface is intuitive and user-friendly.
    - **Example:**
      - **Input:** Navigate to the "Profile Settings" page.
      - **Expected:** All relevant settings are clearly labeled and easily editable without confusion.

8.  **Regression Test Cases:**

    - **Definition:** A subset of previously executed test cases (often high-priority or critical paths) that are re-executed after code changes (bug fixes, new features) to ensure that existing functionalities are not negatively impacted.
    - **Purpose:** To prevent regressions (new bugs in old features).
    - **Example:** After implementing a new payment method, re-run all test cases for existing payment methods and basic order placement to ensure they still work.

9.  **Smoke Test Cases:**
    - **Definition:** A quick set of critical test cases performed on a new build to determine if the software is stable enough to proceed with more extensive testing.
    - **Purpose:** To verify basic functionality and stability of the build.
    - **Example:** For a new banking app build, test cases like: "Can login successfully?", "Can view account balance?", "Does the main menu open?".

### <mark> 36. Differentiate Object Oriented Application Testing and Conventional Application Testing. </mark>

Object-Oriented (OO) applications leverage concepts like encapsulation, inheritance, and polymorphism, which introduce unique challenges and require different testing approaches compared to conventional (procedural or monolithic) applications.

| Feature                  | Conventional Application Testing (Procedural/Monolithic)                                                          | Object-Oriented Application Testing                                                                                                                                                                  |
| :----------------------- | :---------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Unit Definition**      | **Function/Procedure/Module:** Smallest testable unit is typically a function or a self-contained module.         | **Class/Object:** Smallest testable unit is a class or an instance of a class (object).                                                                                                              |
| **Unit Testing**         | Tests individual functions/procedures in isolation. Focus on sequential logic within a module.                    | **Class Testing:** Tests individual classes/objects in isolation. Focus on methods, attributes, state of an object.                                                                                  |
| **Integration Testing**  | **Interface-based:** Tests interfaces between separate modules. Common strategies: Big-Bang, Top-Down, Bottom-Up. | **Collaboration-based (Cluster Testing):** Tests interactions and message passing between groups of collaborating objects. Focus on object relationships (inheritance, aggregation).                 |
| **Encapsulation Impact** | Less direct impact. Data and functions might be exposed more freely.                                              | **Data Hiding:** Internal state of an object is hidden. Testing must occur through public methods, limiting direct access to private data.                                                           |
| **Inheritance Impact**   | Not applicable.                                                                                                   | **Test Case Reusability/Complexity:** Superclass tests can be reused by subclasses. However, inherited behavior might be overridden (polymorphism), requiring specific tests for each derived class. |
| **Polymorphism Impact**  | Not applicable.                                                                                                   | **Dynamic Behavior:** Method calls are resolved at runtime based on the actual object type. Requires testing all possible polymorphic behaviors for a given method call.                             |
| **State Management**     | Often deals with global data or data passed explicitly between functions.                                         | Objects have internal state. Tests must consider object states and transitions between states. **State-based testing** is crucial.                                                                   |
| **Test Case Design**     | Focus on input/output variations, control flow (paths), data flow between functions.                              | Focus on class methods, object states, interactions between objects, polymorphic behavior. **Scenario-based testing** (use cases) is very effective.                                                 |
| **Test Data**            | Simple data sets for functions.                                                                                   | Can involve complex object graphs and managing the state of multiple interacting objects.                                                                                                            |
| **Test Tools**           | Unit test frameworks (e.g., CppUnit, NUnit for procedural parts), general integration/system tools.               | Unit test frameworks with mocking/stubbing capabilities (e.g., JUnit, Mockito), tools for object interaction testing.                                                                                |
| **Overall Complexity**   | Can be complex, but largely predictable functional flows.                                                         | Added complexity due to dynamic binding, state changes, and object relationships, requiring specialized testing thought.                                                                             |

### <mark> 37. Write the differences between Mobile App Testing and Web App Testing. </mark>

Mobile App Testing and Web App Testing both fall under application testing but differ significantly due to their distinct platforms, environments, and user interaction patterns.

| Feature                  | Mobile Application Testing (Native/Hybrid/Web Apps)                                                                                                                                                                                                                                  | Web Application Testing (Browser-based)                                                                                                                                                    |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Platform Specificity** | Highly platform-dependent (iOS, Android, specific device models). Native apps built for a specific OS.                                                                                                                                                                               | Generally browser-dependent; aims for cross-browser compatibility (Chrome, Firefox, Edge, Safari).                                                                                         |
| **Environment**          | Diverse devices (phones, tablets), screen sizes, resolutions, OS versions, hardware capabilities (camera, GPS, accelerometer, gestures).                                                                                                                                             | Primarily desktop/laptop browsers. Responsive design adapts to different screen sizes, but core environment is the browser.                                                                |
| **Installation**         | Requires installation from app stores (Google Play, Apple App Store) or direct APK/IPA installation.                                                                                                                                                                                 | No installation needed; accessed via a URL in a web browser.                                                                                                                               |
| **Connectivity**         | Can work offline (for some apps/features), and needs to handle intermittent/fluctuating network connectivity (2G, 3G, 4G, 5G, Wi-Fi).                                                                                                                                                | Requires continuous and stable internet connection. Offline capabilities are limited (e.g., using Service Workers).                                                                        |
| **Performance Focus**    | Battery consumption, app launch time, responsiveness to gestures, data usage, smooth scrolling, offline mode performance.                                                                                                                                                            | Page load time, server response time, client-side rendering speed, network latency.                                                                                                        |
| **User Interaction**     | Gestures (tap, swipe, pinch-zoom), touch-based input, device features (camera, GPS, push notifications, voice commands).                                                                                                                                                             | Mouse clicks, keyboard input, scroll bars.                                                                                                                                                 |
| **Device Resources**     | Direct access to device hardware (camera, GPS, contacts, microphone, storage), background processes, push notifications.                                                                                                                                                             | Limited direct access to client-side hardware (depends on browser APIs and user permissions).                                                                                              |
| **Updates**              | Users need to manually update via app stores, or auto-updates occur.                                                                                                                                                                                                                 | Updates are deployed centrally on the server; users always access the latest version by refreshing.                                                                                        |
| **Testing Types**        | **Usability:** Touch gestures, device interaction. **Performance:** Battery, data usage, responsiveness. **Security:** Device permissions, data storage. **Interrupt:** Calls, SMS, low battery. **Network:** Different network conditions. **Certification:** App store guidelines. | **Cross-browser compatibility:** Across various browsers. **Responsive design:** Different screen resolutions. **SEO:** Search engine optimization. **API testing:** For backend services. |
| **Automation Tools**     | Appium, Espresso (Android), XCUITest (iOS), UIAutomator, Calabash.                                                                                                                                                                                                                   | Selenium, Cypress, Playwright, Puppeteer.                                                                                                                                                  |
| **Challenges**           | Device fragmentation, OS fragmentation, network variability, battery drain, touch accuracy, interrupt handling, app store submission process.                                                                                                                                        | Cross-browser compatibility, responsive design across many screen sizes, security vulnerabilities inherent to web (XSS, CSRF).                                                             |

### <mark> 38. Define the factors to consider while selecting performance testing tools. List some of the performance testing tools and Describe Win runner & Load Runner Tool. </mark>

**Factors to Consider While Selecting Performance Testing Tools:**

Selecting the right performance testing tool is crucial for accurate and efficient performance analysis. Key factors include:

1.  **Protocol Support:** Does the tool support the communication protocols used by your application (e.g., HTTP/HTTPS, SOAP, REST, TCP/IP, specific enterprise protocols like SAP, Oracle Forms, Citrix)?
2.  **Technology Stack Compatibility:** Is the tool compatible with the technologies used to build your application (e.g., Java, .NET, specific web frameworks, databases)?
3.  **Cost and Licensing:** Evaluate the initial purchase cost, licensing models (perpetual, subscription, per virtual user), and maintenance costs. Open-source tools (like JMeter) have no licensing cost.
4.  **Scalability:** Can the tool generate the required number of virtual users to simulate realistic loads? Does it support distributed testing (multiple load generators)?
5.  **Ease of Use and Scripting:** How easy is it to learn, create, and maintain test scripts? Does it support a familiar scripting language (e.g., Java, Python, JavaScript) or a proprietary one?
6.  **Reporting and Analysis Capabilities:** Does the tool provide comprehensive reports, graphs, and analysis features to interpret test results (e.g., response times, throughput, error rates, resource utilization)?
7.  **Integration with Other Tools:** Can it integrate with other tools in your CI/CD pipeline (e.g., Jenkins), APM tools (e.g., Dynatrace, New Relic), or monitoring tools?
8.  **Monitoring Capabilities:** Can it monitor server-side resources (CPU, memory, disk I/O, network) during the test run?
9.  **Support and Community:** Is there strong vendor support or an active community forum for troubleshooting and knowledge sharing?
10. **Customization and Extensibility:** Can the tool be customized or extended to meet specific testing requirements?
11. **Browser/Client Simulation:** How realistically can it simulate actual user behavior (e.g., concurrent HTTP requests, caching, JavaScript execution)?
12. **Load Generation Options:** Does it support different types of load (e.g., steady, ramp-up, spike) and varied user profiles?

**List Some of the Performance Testing Tools:**

- **JMeter (Apache JMeter):** Open-source, widely used for web (HTTP/S), SOAP/REST web services, databases, FTP.
- **LoadRunner (Micro Focus LoadRunner):** Commercial, powerful, supports a vast array of protocols and technologies.
- **Gatling:** Open-source, Scala-based, highly scalable for web and API performance testing.
- **k6:** Open-source, JavaScript-based, modern load testing tool.
- **NeoLoad (Neotys NeoLoad):** Commercial, strong for enterprise applications, good for DevOps integration.
- **WebLOAD (RadView WebLOAD):** Commercial, enterprise-grade load testing.
- **BlazeMeter:** SaaS-based platform that extends JMeter and other tools for cloud-based load testing.
- **Locust:** Open-source, Python-based, easy to write test scripts.

**Description of WinRunner & LoadRunner Tools:**

- **WinRunner (Legacy - Micro Focus, formerly HP):**

  - **Type:** Primarily a **functional test automation tool** for GUI testing of desktop applications.
  - **Functionality:** It allowed testers to record user interactions with a graphical user interface (GUI) and then play them back to automate functional test cases. It also offered advanced features like object recognition, data-driven testing, and check-points (for verification).
  - **Language:** Used a proprietary scripting language called Test Script Language (TSL).
  - **Status:** **Discontinued/End-of-Life.** It was replaced by **HP QuickTest Professional (QTP)**, which then became **Micro Focus Unified Functional Testing (UFT)**. While historically significant, it's not a current tool in use for new projects.
  - **Relevance to Performance Testing:** None directly. WinRunner was for _functional_ automation, not _performance_ testing.

- **LoadRunner (Micro Focus, formerly HP):**
  - **Type:** A leading **enterprise-grade performance and load testing tool**.
  - **Functionality:** LoadRunner is designed to simulate hundreds or thousands of concurrent users to test the performance, scalability, and robustness of applications under load.
  - **Key Features:**
    - **Protocol Support:** Supports a vast range of application protocols (web HTTP/S, web services, database, ERP, Citrix, SAP, Java, .NET, etc.).
    - **Virtual User Generator (VuGen):** For recording and scripting virtual user behaviors (Vusers) in various protocols. Uses C-like scripting for customization.
    - **Controller:** Manages and controls the load test scenario (number of Vusers, ramp-up, duration, goals).
    - **Load Generators:** Machines that generate the actual load (Vusers).
    - **Analysis:** Provides comprehensive analysis reports and graphs to identify performance bottlenecks (response times, throughput, errors, resource utilization).
  - **Strengths:** Very powerful, comprehensive, high fidelity in simulating real-world user behavior.
  - **Weaknesses:** High cost, complex to set up and maintain for beginners, resource-intensive.
  - **Status:** Still actively developed and widely used in large enterprises, though open-source alternatives like JMeter are gaining popularity.

### <mark> 39. What are the tips for writing better test cases? Design the test cases for Registration and Login Page. </mark>

**Tips for Writing Better Test Cases:**

1.  **Keep them Atomic and Focused:** Each test case should ideally test one specific functionality or condition.
2.  **Clear and Concise:** Write steps that are easy to understand and follow. Avoid jargon.
3.  **Specific Expected Results:** Define what the system _must_ do or display precisely. Avoid vague statements.
4.  **Reproducible:** Ensure that anyone following the steps can reproduce the test and its results. Include all necessary preconditions and test data.
5.  **Prioritize:** Assign a priority (e.g., P1-Critical, P2-High) to each test case based on its business impact and likelihood of failure.
6.  **Maintainable:** Design test cases so they are easy to update when requirements or UI change (e.g., use meaningful names for fields instead of relying solely on exact UI text).
7.  **Traceable:** Link test cases back to specific requirements or user stories.
8.  **Independent:** Ideally, test cases should be independent of each other so that the failure of one does not block or invalidate others.
9.  **Include Negative Scenarios:** Don't just test what works; also test what shouldn't work (invalid inputs, boundary conditions).
10. **Cover Boundary Values:** Pay special attention to minimum, maximum, and values just inside/outside ranges.
11. **Review and Refine:** Have other testers or business analysts review test cases for completeness, accuracy, and clarity.
12. **Use Templates:** Standardize the format of test cases using a consistent template for parameters (ID, steps, expected results, etc.).

---

**Design Test Cases for Registration and Login Page:**

**Assumptions:**

- **Registration:** Fields: Username, Email, Password, Confirm Password. Terms & Conditions checkbox.
- **Login:** Fields: Username, Password. "Forgot Password" link.
- **Password Policy:** Min 8 chars, Max 15 chars, at least 1 uppercase, 1 lowercase, 1 digit, 1 special character.

---

**I. Registration Page Test Cases:**

**Test Suite: REGISTRATION_FUNCTIONALITY_SUITE**

| TC ID       | Test Objective/Name                                   | Preconditions        | Test Steps                                                                                                                                                                                                                         | Test Data (if applicable)                                                                                     | Expected Result                                                                                                                         | Priority      |
| :---------- | :---------------------------------------------------- | :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------- | :------------ |
| **REG_001** | **Positive: Successful User Registration**            | On Registration Page | 1. Enter valid, unique Username.<br>2. Enter valid, unique Email.<br>3. Enter valid Password conforming to policy.<br>4. Enter same Password in Confirm Password.<br>5. Check "Terms & Conditions".<br>6. Click "Register" button. | Username: `newuser1`<br>Email: `newuser1@example.com`<br>Password: `Pass@123`<br>Confirm Password: `Pass@123` | User account is successfully created, and user is redirected to the login page or a success/verification page. Confirmation email sent. | P1 (Critical) |
| **REG_002** | Negative: Existing Username                           | On Registration Page | 1. Enter an already existing Username.<br>2. Enter valid Email.<br>3. Enter valid Password.<br>4. Enter same Password in Confirm Password.<br>5. Check "Terms & Conditions".<br>6. Click "Register" button.                        | Username: `existinguser`<br>Email: `test@example.com`<br>Password: `Pass@123`                                 | Error message "Username already exists" is displayed.                                                                                   | P1 (Critical) |
| **REG_003** | Negative: Existing Email                              | On Registration Page | 1. Enter valid unique Username.<br>2. Enter an already existing Email.<br>3. Enter valid Password.<br>4. Enter same Password in Confirm Password.<br>5. Check "Terms & Conditions".<br>6. Click "Register" button.                 | Username: `newuser2`<br>Email: `existing@example.com`<br>Password: `Pass@123`                                 | Error message "Email already registered" is displayed.                                                                                  | P1 (Critical) |
| **REG_004** | Negative: Password Mismatch                           | On Registration Page | 1. Enter valid Username.<br>2. Enter valid Email.<br>3. Enter valid Password.<br>4. Enter different Password in Confirm Password.<br>5. Check "Terms & Conditions".<br>6. Click "Register" button.                                 | Username: `newuser3`<br>Email: `newuser3@example.com`<br>Password: `Pass@123`<br>Confirm Password: `Pass@124` | Error message "Passwords do not match" is displayed.                                                                                    | P2 (High)     |
| **REG_005** | Negative: Password Policy Violation (e.g., too short) | On Registration Page | 1. Enter valid Username.<br>2. Enter valid Email.<br>3. Enter Password shorter than 8 chars.<br>4. Enter same Password in Confirm Password.<br>5. Check "Terms & Conditions".<br>6. Click "Register" button.                       | Username: `newuser4`<br>Email: `newuser4@example.com`<br>Password: `short1`<br>Confirm Password: `short1`     | Error message "Password must be at least 8 characters long" (or similar policy violation message) is displayed.                         | P2 (High)     |
| **REG_006** | Negative: Unchecked Terms & Conditions                | On Registration Page | 1. Enter valid data for all fields.<br>2. **Do NOT** check "Terms & Conditions".<br>3. Click "Register" button.                                                                                                                    | All valid data as in REG_001                                                                                  | Error message "You must agree to the Terms & Conditions" is displayed.                                                                  | P2 (High)     |
| **REG_007** | Negative: Empty Mandatory Fields                      | On Registration Page | 1. Leave Username field empty.<br>2. Fill other fields with valid data.<br>3. Click "Register" button.                                                                                                                             | Email: `test@example.com`<br>Password: `Pass@123`                                                             | Error message "Username is required" is displayed. (Repeat for Email, Password, Confirm Password)                                       | P2 (High)     |
| **REG_008** | Boundary: Min/Max Password Length                     | On Registration Page | 1. Register with password of exactly 8 chars.<br>2. Register with password of exactly 15 chars.<br>3. Register with password of 7 chars.<br>4. Register with password of 16 chars.                                                 | Passwords with lengths 8, 15, 7, 16                                                                           | 1&2: Success. 3&4: Appropriate error messages.                                                                                          | P2 (High)     |

---

**II. Login Page Test Cases:**

**Test Suite: LOGIN_FUNCTIONALITY_SUITE**

| TC ID       | Test Objective/Name                                   | Preconditions                                          | Test Steps                                                                                           | Test Data (if applicable)                                   | Expected Result                                                                                                                                       | Priority      |
| :---------- | :---------------------------------------------------- | :----------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :---------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :------------ |
| **LOG_001** | **Positive: Successful Login**                        | User `validuser` is registered. On Login Page.         | 1. Enter valid Username.<br>2. Enter valid Password.<br>3. Click "Login" button.                     | Username: `validuser`<br>Password: `Valid@123`              | User successfully logs in and is redirected to the dashboard/home page.                                                                               | P1 (Critical) |
| **LOG_002** | Negative: Invalid Password                            | User `validuser` is registered. On Login Page.         | 1. Enter valid Username.<br>2. Enter invalid Password.<br>3. Click "Login" button.                   | Username: `validuser`<br>Password: `wrongpass`              | Error message "Invalid username or password" is displayed, user remains on login page.                                                                | P1 (Critical) |
| **LOG_003** | Negative: Invalid Username                            | Any user. On Login Page.                               | 1. Enter invalid Username.<br>2. Enter any Password.<br>3. Click "Login" button.                     | Username: `nonexistentuser`<br>Password: `anypass`          | Error message "Invalid username or password" is displayed, user remains on login page.                                                                | P1 (Critical) |
| **LOG_004** | Negative: Empty Username                              | On Login Page.                                         | 1. Leave Username field empty.<br>2. Enter valid Password.<br>3. Click "Login" button.               | Password: `Valid@123`                                       | Error message "Username is required" is displayed.                                                                                                    | P2 (High)     |
| **LOG_005** | Negative: Empty Password                              | On Login Page.                                         | 1. Enter valid Username.<br>2. Leave Password field empty.<br>3. Click "Login" button.               | Username: `validuser`                                       | Error message "Password is required" is displayed.                                                                                                    | P2 (High)     |
| **LOG_006** | Negative: Locked Account                              | User `lockeduser` exists and is locked. On Login Page. | 1. Enter locked Username.<br>2. Enter correct Password.<br>3. Click "Login" button.                  | Username: `lockeduser`<br>Password: `Locked@123`            | Error message "Your account is locked. Please contact support." is displayed.                                                                         | P2 (High)     |
| **LOG_007** | Positive: Forgot Password Link                        | On Login Page.                                         | 1. Click "Forgot Password?" link.                                                                    | N/A                                                         | User is redirected to the "Forgot Password" or "Reset Password" page.                                                                                 | P2 (High)     |
| **LOG_008** | Security: SQL Injection Attempt                       | On Login Page.                                         | 1. Enter `admin' OR '1'='1` in Username field.<br>2. Enter any Password.<br>3. Click "Login" button. | Username: `admin' OR '1'='1`<br>Password: `anypass`         | Application should not log in. Appropriate error message or secure handling of input.                                                                 | P1 (Critical) |
| **LOG_009** | Performance: Multiple Failed Attempts (Rate Limiting) | On Login Page.                                         | 1. Repeatedly attempt login with invalid credentials (e.g., 5 times within 1 minute).                | Username: `validuser`<br>Password: `wrongpass` (repeatedly) | After N failed attempts, the system should either lock the account, introduce a CAPTCHA, or rate limit login attempts. Appropriate message displayed. | P2 (High)     |

### <mark> 40. Generate Valid and Invalid Test Cases for PAN Card Verification and ATM Machine. </mark>

---

**I. PAN Card Verification Test Cases**

**Assumptions for PAN Card Format:**

- PAN is a 10-character alphanumeric identifier.
- Format: `AAAAA1234A`
  - First 5 characters: Alphabetic (fixed for entities, e.g., P for individual, C for Company)
  - Next 4 characters: Numeric (0-9)
  - Last character: Alphabetic

**Test Suite: PAN_VERIFICATION_SUITE**

| TC ID         | Test Objective/Name                                                | Preconditions / Context | Test Steps                                                                              | Test Data (PAN Input) | Expected Result                                                                                   |
| :------------ | :----------------------------------------------------------------- | :---------------------- | :-------------------------------------------------------------------------------------- | :-------------------- | :------------------------------------------------------------------------------------------------ |
| **PAN_V_001** | **Valid PAN Format**                                               | On PAN input field      | 1. Enter a valid PAN.<br>2. Submit/Verify.                                              | `ABCDE1234F`          | PAN is accepted/verified as valid.                                                                |
| **PAN_V_002** | **Invalid: Incorrect Length (Short)**                              | On PAN input field      | 1. Enter a PAN with less than 10 characters.<br>2. Submit/Verify.                       | `ABCDE123A`           | Error message: "PAN must be 10 characters long." (or similar).                                    |
| **PAN_V_003** | **Invalid: Incorrect Length (Long)**                               | On PAN input field      | 1. Enter a PAN with more than 10 characters.<br>2. Submit/Verify.                       | `ABCDE1234FG`         | Error message: "PAN must be 10 characters long." (or similar).                                    |
| **PAN_V_004** | **Invalid: Incorrect Alphanumeric Pattern (First 5 not alpha)**    | On PAN input field      | 1. Enter a PAN with numeric characters in the first 5.<br>2. Submit/Verify.             | `123DE1234F`          | Error message: "First 5 characters must be alphabetic." (or similar).                             |
| **PAN_V_005** | **Invalid: Incorrect Alphanumeric Pattern (Middle 4 not numeric)** | On PAN input field      | 1. Enter a PAN with alphabetic characters in middle 4.<br>2. Submit/Verify.             | `ABCDE1A34F`          | Error message: "Characters 6-9 must be numeric." (or similar).                                    |
| **PAN_V_006** | **Invalid: Incorrect Alphanumeric Pattern (Last char not alpha)**  | On PAN input field      | 1. Enter a PAN with a numeric character as the last.<br>2. Submit/Verify.               | `ABCDE12345`          | Error message: "Last character must be alphabetic." (or similar).                                 |
| **PAN_V_007** | **Invalid: Special Characters**                                    | On PAN input field      | 1. Enter PAN with special characters.<br>2. Submit/Verify.                              | `ABC@E1234F`          | Error message: "PAN contains invalid characters." (or similar).                                   |
| **PAN_V_008** | **Invalid: Empty Field**                                           | On PAN input field      | 1. Leave PAN field empty.<br>2. Submit/Verify.                                          | (Empty)               | Error message: "PAN is required." (or similar).                                                   |
| **PAN_V_009** | **Valid: Lowercase Input**                                         | On PAN input field      | 1. Enter a valid PAN in lowercase (if system is case-insensitive).<br>2. Submit/Verify. | `abcde1234f`          | PAN is accepted/verified (system converts to uppercase internally or handles case-insensitivity). |
| **PAN_V_010** | **Valid: Mixed Case Input**                                        | On PAN input field      | 1. Enter a valid PAN in mixed case.<br>2. Submit/Verify.                                | `AbCdE1234f`          | PAN is accepted/verified.                                                                         |

---

**II. ATM Machine Test Cases**

**Assumptions:**

- ATM has a card reader, keypad, screen, cash dispenser, receipt printer.
- Basic operations: Insert Card, Enter PIN, Check Balance, Withdraw Cash, Print Receipt.
- Account types: Savings, Current.
- Withdrawal limits: Min 100, Max 20,000 per transaction; only multiples of 100.

**Test Suite: ATM_TRANSACTION_SUITE**

| TC ID         | Test Objective/Name                               | Preconditions                                                   | Test Steps                                                                                                                                                                                                                  | Test Data (Card, PIN, Balance, Amount)                                                     | Expected Result                                                                                                                                                                                                                 |
| :------------ | :------------------------------------------------ | :-------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **ATM_T_001** | **Positive: Successful Cash Withdrawal**          | Valid Debit Card, ATM operational. User has sufficient balance. | 1. Insert valid Debit Card.<br>2. Enter correct PIN (e.g., `1234`).<br>3. Select "Withdrawal".<br>4. Select "Savings" account.<br>5. Enter amount (e.g., `500`).<br>6. Confirm transaction.<br>7. Choose "Yes" for receipt. | Card: `ValidCard1`<br>PIN: `1234`<br>Savings Balance: `10000`<br>Withdrawal Amount: `500`  | Cash is dispensed (`500`), receipt is printed, card is ejected, screen shows "Transaction successful" or new balance (`9500`). Transaction recorded.                                                                            |
| **ATM_T_002** | **Positive: Check Balance**                       | Valid Debit Card, ATM operational.                              | 1. Insert valid Debit Card.<br>2. Enter correct PIN.<br>3. Select "Balance Inquiry".<br>4. Select "Current" account.<br>5. Choose "Yes" for receipt.                                                                        | Card: `ValidCard2`<br>PIN: `5678`<br>Current Balance: `5000`                               | Screen displays correct current account balance (`5000`), receipt is printed, card is ejected.                                                                                                                                  |
| **ATM_T_003** | Negative: Invalid PIN (1st attempt)               | Valid Debit Card, ATM operational.                              | 1. Insert valid Debit Card.<br>2. Enter incorrect PIN (e.g., `0000`).<br>3. Press Enter.                                                                                                                                    | Card: `ValidCard1`<br>PIN: `0000` (incorrect)                                              | Error message: "Incorrect PIN. Please try again." User is prompted to re-enter PIN.                                                                                                                                             |
| **ATM_T_004** | Negative: Invalid PIN (3rd consecutive attempt)   | Valid Debit Card, ATM operational.                              | 1. Insert valid Debit Card.<br>2. Enter incorrect PIN (3 times consecutively).                                                                                                                                              | Card: `ValidCard1`<br>PIN: `0000` (3 times)                                                | Card is blocked and retained by ATM. Error message: "Card blocked. Please contact your bank."                                                                                                                                   |
| **ATM_T_005** | Negative: Insufficient Funds                      | Valid Debit Card, ATM operational. User has low balance.        | 1. Insert valid Debit Card.<br>2. Enter correct PIN.<br>3. Select "Withdrawal".<br>4. Select "Savings" account.<br>5. Enter amount greater than balance (e.g., `10000`).<br>6. Confirm transaction.                         | Card: `ValidCard3`<br>PIN: `1111`<br>Savings Balance: `5000`<br>Withdrawal Amount: `10000` | Error message: "Insufficient funds in your account." or "Transaction cannot be completed." No cash dispensed. User prompted to choose another option.                                                                           |
| **ATM_T_006** | Negative: Withdrawal Not Multiples of 100         | Valid Debit Card, ATM operational.                              | 1. Insert valid Debit Card.<br>2. Enter correct PIN.<br>3. Select "Withdrawal".<br>4. Select "Savings" account.<br>5. Enter amount not a multiple of 100 (e.g., `550`).<br>6. Confirm transaction.                          | Card: `ValidCard1`<br>PIN: `1234`<br>Withdrawal Amount: `550`                              | Error message: "Please enter amount in multiples of 100." or "Invalid amount."                                                                                                                                                  |
| **ATM_T_007** | Negative: Exceeding Max Withdrawal Limit          | Valid Debit Card, ATM operational.                              | 1. Insert valid Debit Card.<br>2. Enter correct PIN.<br>3. Select "Withdrawal".<br>4. Select "Savings" account.<br>5. Enter amount exceeding limit (e.g., `21000`).<br>6. Confirm transaction.                              | Card: `ValidCard1`<br>PIN: `1234`<br>Withdrawal Amount: `21000`                            | Error message: "Maximum withdrawal limit per transaction is 20,000." or "Amount exceeds daily limit."                                                                                                                           |
| **ATM_T_008** | Negative: Card Ejection Failure                   | Valid Debit Card, ATM operational.                              | 1. Insert valid Debit Card.<br>2. Perform any transaction.<br>3. Observe card ejection.                                                                                                                                     | Card: `ValidCard1`                                                                         | Card should be ejected smoothly and completely. If not, error message "Please take your card" or alarm triggered.                                                                                                               |
| **ATM_T_009** | Negative: No Receipt Option                       | Valid Debit Card, ATM operational.                              | 1. Perform transaction.<br>2. Choose "No" for receipt.                                                                                                                                                                      | N/A                                                                                        | No receipt is printed. Transaction details are displayed on screen (if applicable).                                                                                                                                             |
| **ATM_T_010** | System: Power Failure/Recovery during Transaction | Valid Debit Card, ATM operational.                              | 1. Insert Card.<br>2. Enter PIN.<br>3. During cash withdrawal, simulate power failure.<br>4. ATM restarts.                                                                                                                  | Card: `ValidCard1`<br>PIN: `1234`<br>Withdrawal Amount: `5000`                             | System recovers gracefully. Account balance is either reverted to original state or transaction is completed and cash dispensed after recovery. No data corruption. (Depends on transaction atomicity). Card is ejected safely. |

---
