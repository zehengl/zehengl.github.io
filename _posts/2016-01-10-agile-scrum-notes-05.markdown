---
layout: post
title:  "Agile Scrum Note 05: Artifacts"
date:   2016-01-10
author: Zeheng Li
---
This chapter covers the Scrum Artifacts.

# Product backlog
  - Collection of everything that the team could do which adds value to the customer
  - Defined in terms of user stories and epics
  - All items in the backlog must be ranked in priority order
  - Needs to be well defined for the next 2 or 3 Sprints
    + Rest could be defined at a high level
  - It is a “live” list maintained by the Product Owner
  - Backlog items can be:
    + Functional or non-functional requirements
    + Technical upgrades
    + Significant bug-fixes

# Product, release and sprint backlog
  - Release backlog is a subset of the Product backlog (everything targeted to a release)
  - Sprint backlog is a subset of the Release backlog (everything targeted to a particular Sprint)
  - Product backlog may be in terms of epics, Release backlog may be in terms of stories and Sprint backlog should be down to the sub-story and "task" level

# User story
  - Is the most granular unit of requirement expressed by the Product Owner
  - Provides a simple medium for:
    + Gathering basic information about stories, 
    + Recording high-level requirements,
    + Developing work estimates, and
    + Defining acceptance tests
  - Acts as agreements between customers and team members to discuss detail requirements during an iteration
  - 3 C's:
    + Card
    + Conversation
    + Confirmation
  - **I.N.V.E.S.T.**:
    + Independent
    + Negotiable
    + Valuable
    + Estimable
    + Small
    + Testable
  - Example user story: formal
    + **As a** &lt;role&gt;: *who* wants this piece of functionality
    + **I want to** &lt;goal/desire&gt;: *what* the user wants
    + **so that** &lt;benefit&gt;: *why* the user wants it
    + Priority
    + Estimate
    + See Example:
      - **As an** employee, **I want to** be able to purchase a parking pass online **so that** I can save time AND be able to park my car safely in the basement.

# Story card information
  - Story identifier and name
  - Story description: A few sentences that describes the feature
  - Story type (C=customer domain, T=technology domain)
  - Estimated work effort: The estimated work effort needed to deliver the story (this is given by the team)
  - Estimated Value Points
  - Requirements uncertainty: An "exploration factor" for the story
  - Story dependencies:
  - Acceptance tests: Basis on which the customer team will accept or reject

# Multiple stories may be required to complete a feature
Feature: As a credit analyst I need the ability to check a customer's credit rating.

  - Story 1: As a credit analyst I need the ability to check the prior payment history with this customer.
  - Story 2: As a credit analyst I need the ability to check this customer's credit bureau status.
  - Story 3: As a credit analyst I need the ability to calculate our internal credit rating based on history and credit report.

# Epics
Way of grouping stories together - by a higher level goal or aggregating a large number of sub-stories into a big story

# Writing good stories
  - Use example templates – As a [role] I can [feature] so that [reason] •Make the stories small (use 3” X 5” index cards so that you don't write too much)
  - Make it testable by giving acceptance criteria
    + Given [context] &lt;and/or [some more context]&gt; When [event] Then [outcome] &lt;and/or [another outcome]&gt;
    + Example: Given account balance is negative and no direct deposit is scheduled on the day when the account holder tries to withdraw money then the bank will deny the request and send the account holder an alert
  - “Connect the dots” by thinking of all possible scenarios that could arise (use case thinking)

# Splitting user stories
  - A story should be small (no more than 40 man hours of effort)
  - Keeping stories small allows the team to build incrementally, getting
validation along the way
  - It requires considerable effort on part of the Product Owner to write requirements at that level of granularity
  - We shall look at ways in which larger stories can be split into multiple smaller stories
    + Big Picture
      * Research v.s. Action: Spend a time-boxed period on research before moving to the action story if the story requires research
      * Spike v.s. Implementation: Spend some time doing experimentation to gain better understanding before moving to implementation
      * Main flow v.s. Alternate flow: Implement the happy path first, then take up the alternate paths
      * Buy v.s. Build: Spend some time to see if what you need already exists and can be bought - a widget, an algorithm or component
    + User Experience
      * Batch v.s. Online: Keep the user interactions away for some time by implementing a batch system
      * Single user v.s. Multi-user: Keep concurrency, access control issues aside for some time, think about single user
      * API only v.s. User interface: Build the fancy UI later, first think about the programmatic interface
      * Generic UI v.s. Custom UI: Use basic widgets to begin with - add the fancy controls later
    + Others
      * Static v.s. Dynamic: Use static or cached information to begin with - think about dynamic later
      * Ignore errors v.s. Handle errors: Add more sophisticated exception handling later, first implement core logic
      * Transient v.s. Persistent: Worry about persisting data later, first work on transient information
      * Low fidelity v.s. High fidelity: Improve quality of output progressively
      * Small scale v.s. Large scale: Forget about scale issues for some time, then add scalability
      * Unreliable v.s. Reliable: Perfect uptime is expensive, build it step-by-step