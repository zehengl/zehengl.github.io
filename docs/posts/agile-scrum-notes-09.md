---
draft: false
date: 2016-01-28
categories:
  - agile
  - scrum
---

# Agile Scrum Note 09

Tools and techniques to monitor Scrum projects

<!-- more -->

## Principles in monitoring Scrum Projects

<!-- prettier-ignore -->
- Ideally, the TEAM should monitor its own progress
    - The manager or Scrum Master should NOT micro- manage
- The Scrum Master should try to provide the team visibility so that they can make informed decisions
- Common tracking mechanisms in Scrum
    - Daily stand-up meetings
    - Reviews and retrospectives
    - Metrics
    - Charts
    - Information radiators

## Metrics

<!-- prettier-ignore -->
- A metric is a standard for measuring or evaluating something.
- A measure is a quantity, a proportion, or a qualitative comparison of some kind.
    - Quantity: "There are 25 open defect reports on the application as of today."
    - Proportion: "This week there are 10 percent fewer open defect reports than last week."
    - Qualitative comparison: "The new version of the software is easier to use than the old version."
- Types of metrics
    - Business
        - RTF (Running Tested Features)
        - Earned Business Value (EBV)
        - Net Present Value (NPV)
        - Internal Rate of Return (IRR)
        - Return on Investment (ROI)
    - Process
        - Impediments cleared per iteration
        - Impediments & User stories carried over the next iteration
        - User stories done per iteration
        - Defects carried over the next iteration
        - Team member loading
        - Velocity
        - Backlog size
    - Project Testing
        - Acceptance tests per story
        - Defects count per story
        - Escaped Defects per cycle
        - Tests time to run
        - Tests run per frequency
        - Time to fix tests
    - Do's and Don'ts
        - Measure only a few things that matter (just because it can be measured doesn’t mean it is important)
        - It should be easy to calculate (ideally an automated process)
            - If it is too cumbersome, either people won’t do it or it will be incorrect
        - It should be easy to explain and interpret
        - It should result in tangible action
            - Behavior that you want to encourage OR
            - Behavior that you want to discourage
        - Use metrics to guide action, not for witch-hunts
        - In Scrum, team metrics are preferred
        - Do NOT use metrics for performance appraisals
            - It will usually result in perverse incentive to manipulate the number

## Charts in Scrum

<!-- prettier-ignore -->
- Commonly used charts:
    - Burn-down, Burn-up charts
    - Cumulative Flow Diagrams
    - Progress Charts
    - Risk profile graphs
    - Others
- Charts are useful because:
    - It indicates trends (trends are more important than absolute numbers)
    - It is more "visual" (a picture is worth a thousand words)
    - Management loves charts!

## Burn-down Chart

![burn-down-chart](./assets/burn-down-chart.png)

## Burn-down Chart Bar Style

![burn-down-chart-bar-style](./assets/burn-down-chart-bar-style.png)

## Burn-up and Burn-down Chart

![burn-up-burn-down-chart](./assets/burn-up-burn-down-chart.jpg)

## Cumulative Flow Diagram

![cumulative-flow-diagram](./assets/cumulative-flow-diagram.jpg)

## Parking Lot Diagram

![parking-lot-diagram](./assets/parking-lot-diagram.png)

## Escaped defects found

Escaped Defects Found counts number of new escaped defects found over period of time (day, week, month).

## Velocity Chart

![velocity-chart](./assets/velocity-chart.png)

## Progress Chart / Kanban

![kanban-board](./assets/kanban-board.png)

## Niko Niko Calendar

![niko-niko-calendar](./assets/niko-niko-calendar.png)

## Information radiators

"An information radiator displays information in a place where passers by can see it. With information radiators, the passers by don't need to ask any question; the information simply hits them as they pass."

- Invented by Alistair Cockburn
- Team members can view the current state of the project : schedules, tasks, progress, issues
- Scrum teams should use it to make progress (or lack of) visible

![information-radiators1](./assets/information-radiators1.jpg)

Most popular Information radiators are:

- Task Boards
- Big Visible charts (Includes burn down charts)
- Continuous Integration build health Indicators (Including lava lamps and street lights)

![information-radiators2](./assets/information-radiators2.jpg)

Effective Information Radiators should be :

- **Simple**: Should be Brief and concise.
- **Stark**: Should display the progress and expose problems. Errors should not be masked, rather used to improve the work and performance
- **Current**: Information displayed should be current
- **Transient**: The problems and errors shouldn't be there on the chart for long; once the problem has been rectified, it should be taken off
- **Influential**: Influences the team members and management and empowers the whole team to take decisions
- **Highly** visible
- **Minimal** in number
